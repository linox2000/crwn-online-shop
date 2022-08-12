import {CartIconContainer,ItemCount,ShopBagContainer}from './cart-icon.styles';

import {useContext}from 'react';
import { CartContext } from '../../context/cart.context.';

const CartIcon = () =>{
    const {isCardOpen,setIsCardOpen}= useContext(CartContext)
    const {cartCount}= useContext(CartContext)

    const toggleIsCartOpen = ()=>setIsCardOpen(!isCardOpen)
   

    return(
        <CartIconContainer  onClick={toggleIsCartOpen}>
            <ShopBagContainer 
             />
            <ItemCount >{cartCount} </ItemCount>
           
        </CartIconContainer>
    )

}

export default CartIcon