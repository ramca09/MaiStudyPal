import Stripe from 'stripe';
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

async function getStripeInstance() {
  const key = process.env.STRIPE_SECRET_KEY;
 
  return new Stripe(key, {
    apiVersion: `2022-11-15`, // update this!
  });
}

export default async function createCustomerHandler(req, res) {
	const { email, name, user } =req.body;

	const stripe = await getStripeInstance();
	const supabase = createMiddlewareClient();
	
	try {
		const customer = await stripe.customers.create({
			email, name
		});

		const { error } = await supabase
			.from('users')
			.update({ customer_id: customer })
			.eq('id', user.id);

		// redirect user back based on the response
		return NextResponse.json({ status: "success", message: 'created' });
	} catch (e) {
		console.error(e, `Stripe Checkout error`);
	
		// either end request or ideally redirect users to the same URL
		// but using a query parameter such as error=true
		return res.status(500).end();
	}
}