import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { Fragment, useContext } from "react";
import Logo from "../../components/logo/logo.component";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  


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
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
