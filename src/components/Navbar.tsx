import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
// import LoginPopup from "./LoginPopup";
import SignupPopup from "./SignupPopup";
import NavbarCollection from "./miscComponents/NavbarCollection";
import ShoppingCartIcon from "material-ui/svg-icons/action/shopping-cart";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";

interface INavbar {
  isLogin: boolean;
  username: string;
  cartNumberOfItems: number;
}

const navbarWomen = [
  {
    category: "Featured",
    handle: "featured",
    child: [
      {
        name: "New Arrivals",
        handle: "new-arrivals"
      },
      {
        name: "Puffers",
        handle: "puffers"
      }
    ]
  }
];

const navbarMen = [
  {
    category: "Featured",
    handle: "featured",
    child: [
      {
        name: "New Arrivals",
        handle: "new-arrivals"
      },
      {
        name: "Puffers",
        handle: "puffers"
      }
    ]
  }
];
class Navbar extends React.Component<INavbar> {
  state = {
    openNavbarChild: false,
    navbarCurrentCategory: ""
  };
  constructor(props: any) {
    super(props);
  }

  hoverNavbarItem = (open: boolean, category: string) => {
    this.setState(prevState => ({
      ...prevState,
      openNavbarChild: open,
      navbarCurrentCategory: category
    }));
  };
  render() {
    return (
      <div>
        <Paper>
          <Link
            to="/collections/womens-all"
            onMouseEnter={e => this.hoverNavbarItem(true, "women")}
            onMouseLeave={e => this.hoverNavbarItem(false, "")}
          >
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
          {this.props.isLogin ? (
            <Link to="/account/info">`Hi, ${this.props.username}`</Link>
          ) : (
            <div>{}</div>
          )}
          {}
        </Paper>
        {this.state.openNavbarChild ? (
          <NavbarCollection
            data={
              this.state.navbarCurrentCategory === "women"
                ? navbarWomen
                : navbarMen
            }
          />
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
  cartNumberOfItems: state.cartItems.length
});

export default connect(mapStateToProps)(Navbar);
