import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartitem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartitem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCardOpen: false,
  setIsCardOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (!cartItems) return;
    const newCartCount = cartItems.reduce((total, cartItem) => {
      return cartItem.quantity + total;
    }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  // setCount(cartItems=>{
  //     console.log(cartItems)
  // },[])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCardOpen, setIsCardOpen, addItemToCart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
