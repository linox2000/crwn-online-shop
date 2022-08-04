import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { Fragment } from "react";
import Logo from "../../components/logo/logo.component";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container ">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link " to="/shop">
            Shop
          </Link>
          <Link className="nav-link " to="/auth">
            SignIn
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
