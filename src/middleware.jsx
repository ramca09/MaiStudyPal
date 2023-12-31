import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

async function getStripeInstance() {
  const key = process.env.STRIPE_SECRET_KEY;

  return new Stripe(key, {
    apiVersion: `2022-11-15`, // update this!
  });
}

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile, error } = await supabase
      .from("users")
      .select(`subscription,customer_id`)
      .eq("id", user?.id)
      .single();

    // create customer in stripe
    if (profile && !profile?.customer_id) {
      const stripe = await getStripeInstance();
      const customer = await stripe.customers.create({
        email: profile.email,
        name: profile.username,
      });

      const { error } = await supabase
        .from("users")
        .update({ customer_id: customer.id })
        .eq("id", user.id);
    }

    if (["/signup", "/signin"].includes(req.nextUrl.pathname))
      return NextResponse.redirect(new URL("/", req.url));
    else if (
      !profile?.subscription &&
      ["/summarizer", "/wassistant", "/chatbot"].includes(
        req.nextUrl.pathname
      )
    )
      return NextResponse.redirect(new URL("/subscription", req.url));
  }

  if (
    !user &&
    ["/subscription", "/summarizer", "/wassistant"].includes(
      req.nextUrl.pathname
    )
  ) {
    console.log("unauthorized");
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/:path*"],
  runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: [
    "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
};
