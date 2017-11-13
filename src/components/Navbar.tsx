import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import ShoppingCartIcon from "material-ui/svg-icons/action/shopping-cart";
import { grey500 } from "material-ui/styles/colors";

interface INavbar {
  isLogin: boolean;
  username: string;
  cartNumberOfItems: number;
}

const Navbar: React.SFC<INavbar> = props => (
  <Paper>
    <Link to="/collections/womens-all">Women</Link>
    <Link to="/collections/mens-all">Men</Link>
    <Link to="/visit-us">Visit Us</Link>
    <Link to="/factories">Factory</Link>
    <Link to="/about">About</Link>
    <Link to="/">ECSITE</Link>
    {props.isLogin ? (
      <Link to="/account/info">`Hi, ${props.username}`</Link>
    ) : (
      <div>
        <LoginPopup />
        <SignupPopup />
      </div>
    )}
    <Link to="/checkout/preview">
      <ShoppingCartIcon style={{marginRight: 12}}color={grey500} />
      {props.cartNumberOfItems && `${props.cartNumberOfItems} ${props.cartNumberOfItems < 2 ? "item" : "items"}`}
    </Link>
  </Paper>
);

const mapStateToProps = (state: any) => ({
  isLogin: state.isLogin,
  username: state.username,
  cartNumberOfItems: state.cartNumberOfItems,
});

export default connect(mapStateToProps)(Navbar);
