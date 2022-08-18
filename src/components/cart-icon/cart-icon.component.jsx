import {CartIconContainer,ItemCount,ShopBagContainer}from './cart-icon.styles';

import {useContext}from 'react';
import { CartContext } from '../../context/cart.context.';
import { setIsCardOpen } from '../../store/cart/cart.action';
import {useDispatch,useSelector}from 'react-redux'

const CartIcon = () =>{
    const dispatch = useDispatch()
    const {cartCount}= useContext(CartContext)
    const isCardOpen= useSelector(state=>state.cart.isCardOpen);


    const toggleIsCartOpen = ()=>dispatch(setIsCardOpen(!isCardOpen))
   

    return(
        <CartIconContainer  onClick={toggleIsCartOpen}>
            <ShopBagContainer 
             />
            <ItemCount >{cartCount} </ItemCount>
           
        </CartIconContainer>
    )

}

export default CartIcon