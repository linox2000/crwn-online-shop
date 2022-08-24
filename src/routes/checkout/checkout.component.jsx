import {CheckoutHeaderBlock,CheckoutContainer,CheckoutHeader,Total}from "./checkout.styles";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { useSelector } from "react-redux";
import { selectCartItems,selectCartTotal } from "../../store/cart/cart.selector";


const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal =useSelector(selectCartTotal)

  return (
    <CheckoutContainer >
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total >{cartTotal},00 Akz </Total>
    </CheckoutContainer>
  );
};
export default Checkout;
