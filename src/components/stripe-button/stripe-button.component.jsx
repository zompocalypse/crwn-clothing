import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = 'pk_test_51I4C3qFUYwlb0yTf6yi5WG783Wa4FQSRpYgbFIudryoJymUhZ1CLlOqWSbnvuX407JAZNymaO2yoRp0izU6A86Qp00Bn2JCREb';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
      />
  )
};

export default StripeCheckoutButton;