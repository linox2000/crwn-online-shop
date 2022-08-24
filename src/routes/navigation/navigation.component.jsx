import {useSelector}from 'react-redux'
import { Outlet, Link } from "react-router-dom";

import {NavigationContainer,LogoContainer,NavLink,NavLinks}from "./navigation.styles";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import Logo from "../../components/logo/logo.component";

import { Fragment } from "react";
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

  const currentUser  = useSelector(selectCurrentUser);
  
  const isCardOpen= useSelector(selectIsCartOpen);


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
