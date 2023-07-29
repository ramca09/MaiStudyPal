import getRawBody from 'raw-body';
import { NextResponse } from "next/server";
 
const STRIPE_SIGNATURE_HEADER = 'stripe-signature';

// export const config = {
// 	api: {
// 		bodyParser: false,
// 	},
// };

function buildOrganizationSubscription(
  subscription,
  status = OrganizationPlanStatus.Paid
) {
  const lineItem = subscription.items.data[0];
  const price = lineItem.price;
 
  return {
    id: subscription.id,
    priceId: price?.id,
    status,
    currency: lineItem.price.currency ?? null,
    interval: price?.recurring?.interval ?? null,
    intervalCount: price?.recurring?.interval_count ?? null,
    createdAt: subscription.created,
    periodStartsAt: subscription.current_period_start,
    periodEndsAt: subscription.current_period_end,
    trialStartsAt: subscription.trial_start ?? null,
    trialEndsAt: subscription.trial_end ?? null,
  };
}

function getOrderStatus(status) {
	console.log(status)
	return status
}

function setOrganizationSubscription(subscriptionData) {
	console.log(subscriptionData)
	return subscriptionData;
}

async function onCheckoutCompleted(
	session,
  subscription
) {
  const organizationId = session.client_reference_id;
  const customerId = session.customer;
  
  // status can either be PAID or AWAITING_PAYMENT (if asynchronous)
  const status
     = getOrderStatus(session.payment_status);
 
  const subscriptionData 
    = buildOrganizationSubscription(subscription, status);
  
  // use your DB methods to 
  // set organization.subscription=subscriptionData
 
  return setOrganizationSubscription({
    organizationId,
    customerId,
    subscription: subscriptionData,
  });
}

async function activatePendingSubscription (organizationId) {
}

async function deleteOrganizationSubscription (subscription_id) {
}

async function onSubscriptionUpdated (subscription) {
}

function onPaymentFailed (session) {
}

function internalServerErrorException(res) {
	return 'stripe error'
}

export async function POST(
  req,
) {
  const res = NextResponse.next();
  const signature = req.headers[STRIPE_SIGNATURE_HEADER];
  const rawBody = await getRawBody(req);
  const stripe = await getStripeInstance();
 
  const event = stripe.webhooks.constructEvent(
    rawBody,
    signature,
    webhookSecretKey
  );
	console.log(event)
  
  // NB: if stripe.webhooks.constructEvent fails, it would throw an error
 
  // here we handle each event based on {event.type}
 
  try {
    switch (event.type) {
      case StripeWebhooks.Completed: {
        const session = event.data.object;
        const subscriptionId = session.subscription;
 
        const subscription = await stripe.subscriptions.retrieve(
          subscriptionId
        );
 
        await onCheckoutCompleted(session, subscription);
 
        break;
      }
 
      case StripeWebhooks.AsyncPaymentSuccess: {
        const session = event.data.object;
        const organizationId = session.client_reference_id;
 
        await activatePendingSubscription(organizationId);
 
        break;
      }
 
      case StripeWebhooks.SubscriptionDeleted: {
        const subscription = event.data.object;
 
        await deleteOrganizationSubscription(subscription.id);
 
        break;
      }
 
      case StripeWebhooks.SubscriptionUpdated: {
        const subscription = event.data.object;
 
        await onSubscriptionUpdated(subscription);
 
        break;
      }
 
      case StripeWebhooks.PaymentFailed: {
        const session = event.data.object;
 
        // TODO: handle this properly
        onPaymentFailed(session);
 
        break;
      }
    }
 
    return NextResponse.json({ status: "success" });
  } catch (e) {
    return internalServerErrorException(res);
  }
}