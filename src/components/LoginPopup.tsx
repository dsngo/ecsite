import * as React from "react";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import PopupButton from "./miscComponents/PopupButtons";

class LoginPopup extends React.Component<{},{}> {
  state = {
    email: "",
    password: "",
  };
  handleChangeUserInfo = (key: string, info: string) => this.setState(prevState => ({ ...prevState, [key]: info }));
  render() {
    const {
      handleChangeUserInfo,
      state: { email, password },
    } = this;
    return (
      <Paper>
        <List>
          <TextField
            value={email}
            onChange={(e: any) => handleChangeUserInfo("email", e.target.value)}
            hintText="Please enter your email address."
            floatingLabelText="Email Address"
          />
          <br />
          <TextField
            value={password}
            onChange={(e: any) => handleChangeUserInfo("password", e.target.value)}
            hintText="Please enter your password."
            floatingLabelText="Password"
            type="password"
          />
          <br />
        </List>
        <PopupButton loginUserInfo={this.state} />
      </Paper>
    );
  }
}

export default LoginPopup;
