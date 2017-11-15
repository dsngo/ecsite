import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
// import LoginPopup from "./LoginPopup";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";

interface INavbarCollection {
  data: any[];
}

class NavbarCollection extends React.Component<INavbarCollection> {
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

export default NavbarCollection;
