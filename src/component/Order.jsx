import React from 'react'

const Order = () => {
  return (
    <>
      <div class="container mt-5 text-center">
        <i class="fas fa-check-circle fa-4x text-success mb-4"></i>
        <h1 class="mb-3">Order Successful!</h1>
        <p class="lead">
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>
        <p>
          You will receive an email confirmation shortly with your order
          details.
        </p>
      </div>
    </>
  );
}

export default Order
