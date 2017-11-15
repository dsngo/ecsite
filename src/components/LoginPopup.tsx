import * as React from "react";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import PopupButton from "./miscComponents/PopupButtons";
import { grey800 } from "material-ui/styles/colors";

class LoginPopup extends React.Component<{}, {}> {
  state = {
    email: "",
    password: "",
  };
  handleChangeUserInfo = (key: string, info: string) => this.setState(prevState => ({ ...prevState, [key]: info }));
  render() {
    const { handleChangeUserInfo, state: { email, password } } = this;
    return (
      <Paper zDepth={ 0 }>
        <div className="login-modal">
          <div className="welcome-text">
            Good to see you again. <br/>
            Please log in.

          </div>
          <TextField
          fullWidth
            value={email}
            onChange={(e: any) => handleChangeUserInfo("email", e.target.value)}
            hintText="Please enter your email address."
            floatingLabelText="Email Address"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
          />
          <br />
          <TextField
          fullWidth
            value={password}
            onChange={(e: any) => handleChangeUserInfo("password", e.target.value)}
            hintText="Please enter your password."
            floatingLabelText="Password"
            type="password"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
          />
          <br />
        </div>
        <PopupButton {...{loginUserInfo: this.state }} />
      </Paper>
    );
  }
}

export default LoginPopup;
