import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
// import LoginPopup from "./LoginPopup";
// import SignupPopup from "./SignupPopup";
import ShoppingCartIcon from "material-ui/svg-icons/action/shopping-cart";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";

interface IFooter {}

const Footer: React.SFC<IFooter> = props => (
  <Paper className="footer">
    <div className="container">
      <div className="col-xs-6 left">
        <ul>
          <li className="section">
            <h6 className="footer-column-header">HELP</h6>
            <ul>
              <li>Orders & Returns</li>
              <li>Contact & FAQ</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Sitemap - Collections</li>
              <li>Sitemap - Products</li>
            </ul>
          </li>
          <li className="section">
            <h6 className="footer-column-header">COMPANY</h6>
            <ul>
              <li>Visit Us</li>
              <li>Factories</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </li>
          <li className="section">
            <h6 className="footer-column-header">CONNECT</h6>
            <ul>
              <li>Snapchat</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Affilates</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="col-xs-6 right">
        <div>Refer a friend. Earn $25 credit when they purchase.</div>
        <TextField id="reference-text-test" value="https://www.testtesttest.com/r/sntrnh" fullWidth />
      </div>
    </div>
  </Paper>
);

export default Footer;
