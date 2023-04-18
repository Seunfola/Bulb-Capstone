import React from "react";
import Elements from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import LoadStrip from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51MsD6PGAQvOTTolVb0bs9x1vaIE8ApeZfM7p09KhirEQ1IBPveLt0pl9y6O3Bt8H0kUPimkk1pgcBBK5MxFmgr4f00ftecLfDb');

const StripeContainer = () => {
      const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
     <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  )
};

export default StripeContainer
