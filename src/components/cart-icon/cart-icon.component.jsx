import {CartIconContainer,ItemCount,ShopBagContainer}from './cart-icon.styles';


import { setIsCardOpen } from '../../store/cart/cart.action';
import {useDispatch,useSelector}from 'react-redux'

import { selectIsCartOpen,selectCartCount } from '../../store/cart/cart.selector';




const CartIcon = () =>{
    const dispatch = useDispatch()

    const isCardOpen= useSelector(selectIsCartOpen);
    
    const cartCount= useSelector(selectCartCount);


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