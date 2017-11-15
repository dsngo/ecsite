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
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import { handleOpenPopup } from "./redux/actionCreators";

interface INavbar {
  isLogin: boolean;
  loginPopup: boolean;
  signupPopup: boolean;
  username: string;
  cartNumberOfItems: number;
  handleOpenPopup: (popupName: string, isOpen: boolean) => any;
}

const navbarWomen = [
  {
    category: "Featured",
    handle: "featured",
    child: [
      {
        name: "New Arrivals",
        handle: "new-arrivals",
      },
      {
        name: "Puffers",
        handle: "puffers",
      },
      {
        name: "Denim Shop",
        handle: "denim-shop",
      },
      {
        name: "Coming Soon",
        handle: "coming-soon",
      },
      {
        name: "Best Sellers",
        handle: "best-seller",
      },
      {
        name: "Choose what you pay",
        handle: "what-you-pay",
      },
    ],
  },
  {
    category: "Apparel",
    handle: "apparel",
    child: [
      {
        name: "Tees",
        handle: "tees",
      },
      {
        name: "Top",
        handle: "top",
      },
      {
        name: "Sweeters",
        handle: "sweeters",
      },
      {
        name: "Dresses",
        handle: "dresses",
      },
      {
        name: "Denim",
        handle: "denim",
      },
      {
        name: "Pants & Shorts",
        handle: "pants-shorts",
      },
      {
        name: "Skirts",
        handle: "skirts",
      },
      {
        name: "Outerwear",
        handle: "outerwear",
      },
    ],
  },
  {
    category: "Shoes",
    handle: "shoes",
    child: [
      {
        name: "Loafers",
        handle: "loafers",
      },
    ],
  },
  {
    category: "Accessories",
    handle: "accessories",
    child: [
      {
        name: "Bags",
        handle: "bags",
      },
    ],
  },
];

const navbarMen = [
  {
    category: "Featured",
    handle: "featured",
    child: [
      {
        name: "New Arrivals",
        handle: "new-arrivals",
      },
      {
        name: "Puffers",
        handle: "puffers",
      },
      {
        name: "Denim Shop",
        handle: "denim-shop",
      },
      {
        name: "Coming Soon",
        handle: "coming-soon",
      },
      {
        name: "Best Sellers",
        handle: "best-seller",
      },
      {
        name: "Choose what you pay",
        handle: "what-you-pay",
      },
    ],
  },
];
class Navbar extends React.Component<INavbar, {}> {
  state = {
    openNavbarCollection: false,
    navbarCurrentCategory: "",
  };
  hoverNavbarItem = (open: boolean, category: string) => {
    this.setState(prevState => ({
      ...prevState,
      openNavbarCollection: open,
      navbarCurrentCategory: category,
    }));
  };
  render() {
    const navbarData = this.state.navbarCurrentCategory === "women" ? navbarWomen : navbarMen;
    const {
      hoverNavbarItem,
      props: { username, isLogin, loginPopup, signupPopup, handleOpenPopup },
      state: { openNavbarCollection, navbarCurrentCategory },
    } = this;
    return (
      <div>
        <Paper className="navbar">
          <Link
            to="/collections/womens-all"
            onMouseEnter={e => hoverNavbarItem(true, "women")}
            onMouseLeave={e => hoverNavbarItem(true, navbarCurrentCategory)}
          >
            <FlatButton label="Women" className="navbar-item" />
          </Link>
          <Link
            to="/collections/mens-all"
            onMouseEnter={e => hoverNavbarItem(true, "men")}
            onMouseLeave={e => hoverNavbarItem(false, navbarCurrentCategory)}
          >
            <FlatButton label="Men" className="navbar-item" />
          </Link>
          <Link to="/visit-us">
            <FlatButton label="Visit us" className="navbar-item" />
          </Link>
          <Link to="/factories">
            <FlatButton label="Factories" className="navbar-item" />
          </Link>
          <Link to="/about">
            <FlatButton label="About" className="navbar-item" />
          </Link>
          <Link to="/">ECSITE</Link>
          {isLogin ? (
            <Link to="/account/info">`Hi, ${username}`</Link>
          ) : (
            <span>
              <FlatButton onClick={() => handleOpenPopup("signupPopup", true)} label="Sign Up" className="btn-right" />
              <FlatButton onClick={() => handleOpenPopup("loginPopup", true)} label="Login" className="btn-right" />
              <Dialog
                open={loginPopup}
                onRequestClose={() => handleOpenPopup("loginPopup", false)}
              >
                <LoginPopup />
              </Dialog>
              <Dialog
                open={signupPopup}
                onRequestClose={() => handleOpenPopup("signupPopup", false)}
              >
                <SignupPopup />
              </Dialog>
            </span>
          )}
        </Paper>
        {openNavbarCollection ? (
          <Paper
            className="navbar-col"
            onMouseEnter={e => hoverNavbarItem(true, navbarCurrentCategory)}
            onMouseLeave={e => hoverNavbarItem(false, navbarCurrentCategory)}
          >
            <div className="align">
              {navbarData.map((cat: any) => (
                <div className="float-left">
                  <ul>
                    <div className="section">
                      <h6 className="navbar-column-header">{cat.category}</h6>
                      <ul>{cat.child.map((child: any) => <li>{child.name}</li>)}</ul>
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          </Paper>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLogin: state.isLogin,
  username: state.username,
  loginPopup: state.popupStatus.loginPopup,
  signupPopup: state.popupStatus.signupPopup,
  cartNumberOfItems: state.cartItems.length,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleOpenPopup: (popupName: string, isOpen: boolean) => dispatch(handleOpenPopup(popupName, isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
