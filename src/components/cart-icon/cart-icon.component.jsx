import './cart-icon.styles.scss';
import ShopBagIcon from '../shop-bag-icon/shop-bag-icon.component'
import {useContext}from 'react';
import { CartContext } from '../../context/cart.context.';

const CartIcon = () =>{
    const {isCardOpen,setIsCardOpen}= useContext(CartContext)

    const toggleIsCartOpen = ()=>setIsCardOpen(!isCardOpen)
   

    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShopBagIcon 
             className='shopping-icon'/>
            <span className='item-count'>0</span>
           
        </div>
    )

}

export default CartIcon