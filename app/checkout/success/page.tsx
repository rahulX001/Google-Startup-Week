'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import { Stripe } from "stripe";
//@ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

// interface CheckoutSessionData {
//   amount_received: number;
//   customer_details: {
//     name: string;
//   };
//   // Add any other properties you expect in the checkout session response
// }

export default function SuccessPage() {
//   const [paymentDetails, setPaymentDetails] = useState<
//     CheckoutSessionData | {}
//   >({});

  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log("session id", sessionId);

  const URL = sessionId ? `/api/stripe/sessions/${sessionId}` : null;

  const { data: checkoutSession, error } = useSWR(
    URL,
    fetcher
  );

  if (error) return <div>failed to load the session</div>;

  console.log(checkoutSession);
  if (checkoutSession) {
    // setPaymentDetails(checkoutSession);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="">
          Your payment of {checkoutSession.payment_intent.amount_received / 100} is successful
        </h1>
        <h2>Customer details</h2>
        <p>Payment Id: {checkoutSession.payment_intent.id}</p>
        <p>Customer Name: {checkoutSession.customer_details?.name}</p>
        <p>Customer Email: {checkoutSession.customer_details?.email}</p>
      </div>
      
    );
  } else {
    return <div className="flex flex-col justify-center h-screen items-center">loading...</div>;
  }
}
