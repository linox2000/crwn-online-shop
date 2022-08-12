import { Outlet, Link } from "react-router-dom";

import {NavigationContainer,LogoContainer,NavLink,NavLinks}from "./navigation.styles";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from "../../components/logo/logo.component";

import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { CartContext } from "../../context/cart.context.";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCardOpen}= useContext(CartContext);


const showCardhandler = ()=>{
  console.log(currentUser)
}
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks >
          <NavLink  to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser} >SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCardOpen&& <CartDropdown/> } 
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
