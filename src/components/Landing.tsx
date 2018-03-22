import * as React from "react";
// import { clearSubmitStatus } from "./redux/actionCreators";
import connect from "react-redux/es/connect/connect";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Carousel } from "react-responsive-carousel";

interface ILanding {}

const featuredImg1 = {
  background:
    "url('https://everlane-2.imgix.net/i/88336c01_608a.jpg?q=65&dpr=1.5')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "400px"
};
const featuredImg2 = {
  background:
    "url('https://everlane-2.imgix.net/i/81b3920b_d927.jpg?q=65&dpr=1.5')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "400px"
};
const featuredImg3 = {
  background:
    "url('https://everlane-2.imgix.net/i/e9217a3d_452f.jpg?q=65&dpr=1.5')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "400px"
};

const Landing: React.SFC<ILanding> = props => (
  <div className="homepage">
    <div className="carosel">
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
        <div>
          <img src="https://everlane-2.imgix.net/i/ce913f1d_52f4.jpg" />
        </div>
        <div>
          <img src="https://everlane-2.imgix.net/i/3c94c4f9_0be5.jpg" />
        </div>
      </Carousel>
    </div>
    <div className="featured-collection-container row">
      <div className="featured-collection col-xs-4">
        <div style={featuredImg1} className="thumbnail">
          <div className="title">The Denim Shop</div>
        </div>
      </div>
      <div className="featured-collection col-xs-4">
        <div style={featuredImg2} className="thumbnail">
          <div className="title">Our Denim Factory</div>
        </div>
      </div>
      <div className="featured-collection col-xs-4">
        <div style={featuredImg3} className="thumbnail">
          <div className="title">The Campaign</div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
