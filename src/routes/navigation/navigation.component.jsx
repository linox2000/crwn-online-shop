import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
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
      <div className="navigation">
        <Link to="/" className="logo-container ">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link " to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link"onClick={signOutUser} >SIGN OUT</span>
          ) : (
            <Link className="nav-link " to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCardOpen&& <CartDropdown/> }
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
