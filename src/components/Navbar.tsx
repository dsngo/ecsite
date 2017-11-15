import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
// import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import ShoppingCartIcon from "material-ui/svg-icons/action/shopping-cart";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import ReactHover from "react-hover";


interface INavbar {
  isLogin: boolean;
  username: string;
  cartNumberOfItems: number;
}

const Navbar: React.SFC<INavbar> = props => (
  <Paper>
    <Link to="/collections/womens-all">
      <FlatButton label="Women" />
    </Link>
    <Link to="/collections/mens-all">
    <FlatButton label="Men" />
    </Link>
    <Link to="/visit-us">
    <FlatButton label="Visit us" />
    </Link>
    <Link to="/factories">
    <FlatButton label="Factories" />
    </Link>
    <Link to="/about">
    <FlatButton label="About" />
      
    </Link>
    <Link to="/">ECSITE</Link>
    {props.isLogin ? (
      <Link to="/account/info">`Hi, ${props.username}`</Link>
    ) : (
      <div>
        {/* <LoginPopup />
        <SignupPopup /> */}
      </div>
    )}
    {/* <Link to="/checkout/preview">
      <ShoppingCartIcon style={{marginRight: 12}}color={grey500} />
      {props.cartNumberOfItems && `${props.cartNumberOfItems} ${props.cartNumberOfItems < 2 ? "item" : "items"}`}
    </Link> */}
  </Paper>
);

const mapStateToProps = (state: any) => ({
  isLogin: state.isLogin,
  username: state.username,
  cartNumberOfItems: state.cartItems.length,
});

export default connect(mapStateToProps)(Navbar);
