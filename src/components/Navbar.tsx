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
import { List, ListItem } from "material-ui/List";
import { navbarMen, navbarWomen } from "../data/navbarCollectionData";
import Subheader from "material-ui/Subheader";


interface INavbar {
  isLogin: boolean;
  loginPopup: boolean;
  signupPopup: boolean;
  username: string;
  cartNumberOfItems: number;
  handleOpenPopup: (popupName: string, isOpen: boolean) => any;
}

const styles: { [key: string]: React.CSSProperties } = {
  navbarCollection: {
    position: "fixed",
    textAlign: "center",
    top: 40,
    width: "100%",
    zIndex: 10,
    display: "table",
    margin: "0 auto",
  },
  collectionItems: {

  },
  navbarData: {
    textAlign: "left",
    float: "left",
    marginRight: "45px",
  },
  navbarColHeader: {
    fontWeight: 700,
  },
};

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
        {isLogin ? (
          <Link to="/account/info">`Hi, ${username}`</Link>
        ) : (
          <span>
            <FlatButton onClick={() => handleOpenPopup("signupPopup", true)} label="Sign Up" className="btn-right" />
            <FlatButton onClick={() => handleOpenPopup("loginPopup", true)} label="Login" className="btn-right" />
            <Dialog open={loginPopup} onRequestClose={() => handleOpenPopup("loginPopup", false)}>
              <LoginPopup />
            </Dialog>
            <Dialog open={signupPopup} onRequestClose={() => handleOpenPopup("signupPopup", false)}>
              <SignupPopup />
            </Dialog>
          </span>
        )}
        {openNavbarCollection && (
          <Paper
            style={styles.navbarCollection}
            onMouseEnter={e => hoverNavbarItem(true, navbarCurrentCategory)}
            onMouseLeave={e => hoverNavbarItem(false, navbarCurrentCategory)}
          >
            {navbarData.map((cat: any, i: any) => (
              <Paper zDepth={0} style={styles.navbarData} key={`navbarD-${i}`}>
                <Subheader style={styles.navbarColHeader}>{cat.category}</Subheader>
                <List>{cat.child.map((child: any, i: number) => <ListItem key={`categoryC-${i}`}>{child.name}</ListItem>)}</List>
              </Paper>
            ))}
          </Paper>
        )}
      </Paper>
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
