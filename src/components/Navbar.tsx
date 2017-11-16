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
    zIndex: 10
  },
  navbarAlign: {
    display: "table",
    margin: "0 auto"
  },
  collectionItems: {},
  ul: {
    paddingLeft: "0"
  },
  li: {
    fontFamily: "graphik,Helvetica Neue,Helvetica,Arial,'sans-serif'",
    fontSize: "11px",
    lineHeight: "17.798px",
    color: "#808284",
    fontWeight: 400,
    textTransform: "uppercase",
    marginBottom: "5px",
    display: "block",
    marginTop: "0",
    paddingLeft: "0",
    cursor: "pointer"
  },
  section: {
    textAlign: "left",
    float: "left",
    marginRight: "45px"
  },
  navbarData: {
    textAlign: "left",
    float: "left",
    marginRight: "45px"
  },
  navbarColHeader: {
    fontWeight: 700,
    paddingLeft: "0"
  }
};

class Navbar extends React.Component<INavbar, {}> {
  state = {
    openNavbarCollection: false,
    navbarCurrentCategory: ""
  };
  hoverNavbarItem = (open: boolean, category: string) => {
    this.setState(prevState => ({
      ...prevState,
      openNavbarCollection: open,
      navbarCurrentCategory: category
    }));
  };
  render() {
    const navbarData =
      this.state.navbarCurrentCategory === "women" ? navbarWomen : navbarMen;
    const {
      hoverNavbarItem,
      props: { username, isLogin, loginPopup, signupPopup, handleOpenPopup },
      state: { openNavbarCollection, navbarCurrentCategory }
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
          onMouseLeave={e => hoverNavbarItem(true, navbarCurrentCategory)}
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
<<<<<<< HEAD
            <FlatButton onClick={() => handleOpenPopup("signupPopup", true)} label="Sign Up" className="btn-right" />
            <FlatButton onClick={() => handleOpenPopup("loginPopup", true)} label="Login" className="btn-right" />
            <Dialog open={loginPopup || false} onRequestClose={() => handleOpenPopup("loginPopup", false)}>
              <LoginPopup />
            </Dialog>
            <Dialog open={signupPopup || false} onRequestClose={() => handleOpenPopup("signupPopup", false)}>
=======
            <FlatButton
              onClick={() => handleOpenPopup("signupPopup", true)}
              label="Sign Up"
              className="btn-right"
            />
            <FlatButton
              onClick={() => handleOpenPopup("loginPopup", true)}
              label="Login"
              className="btn-right"
            />
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
>>>>>>> abba320be6e3940bc6534eb284afc032ae485daa
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
            <div style={styles.navbarAlign}>
              {navbarData.map((cat: any, i: any) => (
                <Paper
                  zDepth={0}
                  style={styles.navbarData}
                  key={`navbarD-${i}`}
                >
                  <Subheader style={styles.navbarColHeader}>
                    {cat.category}
                  </Subheader>
                  <div style={styles.section}>
                    <ul style={styles.ul}>
                      {cat.child.map((child: any, i: number) => (
                        <li style={styles.li} key={`cat-${i}`}>
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Paper>
              ))}
            </div>
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
  cartNumberOfItems: state.cartItems.length
});

const mapDispatchToProps = (dispatch: any) => ({
  handleOpenPopup: (popupName: string, isOpen: boolean) =>
    dispatch(handleOpenPopup(popupName, isOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
