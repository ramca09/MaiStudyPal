import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user && ["/signup", "/signin"].includes(req.nextUrl.pathname)) {
    console.log("hook");
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!user && ['/subscription', '/summarizer', '/verify', '/wassistant'].includes(req.nextUrl.pathname))
  {
    console.log("unauthorized");
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  
  const { data: profile, error } = await supabase
    .from('users')
    .select(`subscription`)
    .eq('id', user?.id)
    .single()

  if (user && !profile?.subscription && ['/summarizer', '/verify', '/wassistant'].includes(req.nextUrl.pathname))
  {
    return NextResponse.redirect(new URL('/subscription', req.url));
  }
  
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
