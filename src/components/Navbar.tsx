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
      },
      {
        name: "Denim Shop",
        handle: "denim-shop"
      },
      {
        name: "Coming Soon",
        handle: "coming-soon"
      },
      {
        name: "Best Sellers",
        handle: "best-seller"
      },
      {
        name: "Choose what you pay",
        handle: "what-you-pay"
      }
    ]
  },
  {
    category: "Apparel",
    handle: "apparel",
    child: [
      {
        name: "Tees",
        handle: "tees"
      },
      {
        name: "Top",
        handle: "top"
      },
      {
        name: "Sweeters",
        handle: "sweeters"
      },
      {
        name: "Dresses",
        handle: "dresses"
      },
      {
        name: "Denim",
        handle: "denim"
      },
      {
        name: "Pants & Shorts",
        handle: "pants-shorts"
      },
      {
        name: "Skirts",
        handle: "skirts"
      },
      {
        name: "Outerwear",
        handle: "outerwear"
      }
    ]
  },
  {
    category: "Shoes",
    handle: "shoes",
    child: [
      {
        name: "Loafers",
        handle: "loafers"
      }
    ]
  },
  {
    category: "Accessories",
    handle: "accessories",
    child: [
      {
        name: "Bags",
        handle: "bags"
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
      },
      {
        name: "Denim Shop",
        handle: "denim-shop"
      },
      {
        name: "Coming Soon",
        handle: "coming-soon"
      },
      {
        name: "Best Sellers",
        handle: "best-seller"
      },
      {
        name: "Choose what you pay",
        handle: "what-you-pay"
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
    const navbarData =
      this.state.navbarCurrentCategory === "women" ? navbarWomen : navbarMen;
    const { state: { navbarCurrentCategory }} = this;
    return (
      <div>
        <Paper className="navbar">
          <Link
            to="/collections/womens-all"
            onMouseEnter={e => this.hoverNavbarItem(true, "women")}
            onMouseLeave={e =>
              this.hoverNavbarItem(true, navbarCurrentCategory)}
          >
            <FlatButton label="Women" className="navbar-item" />
          </Link>
          <Link
            to="/collections/mens-all"
            onMouseEnter={e => this.hoverNavbarItem(true, "men")}
            onMouseLeave={e =>
              this.hoverNavbarItem(false, navbarCurrentCategory)}
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
          {this.props.isLogin ? (
            <Link to="/account/info">`Hi, ${this.props.username}`</Link>
          ) : (
            <div>{}</div>
          )}
        </Paper>
        {this.state.openNavbarChild ? (
          <Paper
            className="navbar-col"
            onMouseEnter={e =>
              this.hoverNavbarItem(true, navbarCurrentCategory)}
            onMouseLeave={e =>
              this.hoverNavbarItem(false, navbarCurrentCategory)}
          >
              <div className="align">
                {navbarData.map((cat: any) => (
                  <div className="float-left">
                    <ul>
                      <div className="section">
                        <h6 className="navbar-column-header">{cat.category}</h6>
                        <ul>
                          {cat.child.map((child: any) => <li>{child.name}</li>)}
                        </ul>
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
  cartNumberOfItems: state.cartItems.length
});

export default connect(mapStateToProps)(Navbar);
