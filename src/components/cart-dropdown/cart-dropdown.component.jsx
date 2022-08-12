import { CartDropdownContainer, Cartitems,EmptyMessage } from "./cart-dropdown.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context.";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <Cartitems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>O Seu Carrinho Esta Vazio</EmptyMessage>
        )}

        
      </Cartitems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
