import Stripe from 'stripe';

async function getStripeInstance() {
  const key = process.env.STRIPE_SECRET_KEY;
 
  return new Stripe(key, {
    apiVersion: `2022-11-15`, // update this!
  });
}

export default async function createCustomerHandler(req, res) {
	const {  } =req.body;
	
	// NB: here you may want to check that:
	// - the user can update billing
	// - the data sent is correct
	// - the user belongs to the organization in the body
	// we omit it for simplicity, but food for thought!
	
	try {
		const { url } = await createStripeCheckout({
			returnUrl,
			organizationId,
			priceId,
			customerId,
		});
	
		// redirect user back based on the response
		res.redirect(301, url);
	} catch (e) {
		console.error(e, `Stripe Checkout error`);
	
		// either end request or ideally redirect users to the same URL
		// but using a query parameter such as error=true
		return res.status(500).end();
	}
}