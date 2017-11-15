import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
// import LoginPopup from "./LoginPopup";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import ReactHover from "react-hover";

interface INavbarChild {
  data: any[];
}

class NavbarChild extends React.Component<INavbarChild> {
  state = {
  };
  constructor(props: any) {
    super(props);
  }

  render() {
      const { props: { data } } = this;
    return (
      <Paper>
        {
            data.map((cat: any) => (
                <div>

                </div>
            ))
        }
      </Paper>
    );
  }
}

export default NavbarChild;
