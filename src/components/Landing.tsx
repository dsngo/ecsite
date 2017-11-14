import * as React from "react";
// import { clearSubmitStatus } from "./redux/actionCreators";
import { connect } from "react-redux";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Carousel } from "react-responsive-carousel";

interface ILanding {}

const Landing: React.SFC<ILanding> = props => (
  <div>
    <div className="carosel">
      <Carousel showArrows={ false } showStatus={ false } showThumbs={ false } >

        <div>
          <img src="https://everlane-2.imgix.net/i/ce913f1d_52f4.jpg" />
        </div>
        <div>
          <img src="https://everlane-2.imgix.net/i/3c94c4f9_0be5.jpg" />
        </div>
      </Carousel>
    </div>
  </div>
);

export default Landing;
