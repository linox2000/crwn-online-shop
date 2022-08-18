import {createSelector} from 'reselect'

const newCartTotal = newCartItems.reduce((total, cartItem) => {
  return total + cartItem.quantity * cartItem.price;
}, 0);

const newCartCount = newCartItems.reduce((total, cartItem) => {
  return cartItem.quantity + total;
}, 0);
