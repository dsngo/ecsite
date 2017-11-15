import * as React from "react";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { grey800 } from "material-ui/styles/colors";
import Checkbox from "material-ui/Checkbox";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import PopupButton from "./miscComponents/PopupButtons";

class SignupPopup extends React.Component<{}, {}> {
  state = {
    email: "",
    password: "",
    fullname: "",
    preferStyle: { men: false, women: false, both: false },
  };
  handleChangeUserInfo = (key: string, info: string) => this.setState(prevState => ({ ...prevState, [key]: info }));
  handleChangePreferStyle = (style: string) =>
    this.setState((prevState: any) => ({
      ...prevState,
      preferStyle: { ...prevState.preferStyle, [style]: !prevState.preferStyle[style] },
    }));
  render() {
    const {
      handleChangeUserInfo,
      handleChangePreferStyle,
      props: { handleOpenPopup },
      state: { email, password, fullname, preferStyle },
    } = this;
    return (
      <Paper>
        <List>
          <TextField
            value={email}
            onChange={(e: any) => handleChangeUserInfo("email", e.target.value)}
            hintText="Please enter your email address."
            floatingLabelText="Email Address"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
          />
          <br />
          <TextField
            value={fullname}
            onChange={(e: any) => handleChangeUserInfo("fullname", e.target.value)}
            hintText="Please enter your full name."
            floatingLabelText="Full Name"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
          />
          <br />
          <TextField
            value={password}
            onChange={(e: any) => handleChangeUserInfo("password", e.target.value)}
            hintText="Please enter your password."
            floatingLabelText="Password"
            type="password"
            underlineFocusStyle={{ borderColor: grey800 }}
            floatingLabelStyle={{ color: grey800 }}
          />
          <br />
        </List>
        <List>
          <Subheader>What styles are you interested in?</Subheader>
          <ListItem
            primaryText="Women"
            leftCheckbox={
              <Checkbox
                iconStyle={{ fill: grey800 }}
                checked={preferStyle.women}
                onCheck={() => handleChangePreferStyle("women")}
              />
            }
          />
          <ListItem
            primaryText="Men"
            leftCheckbox={
              <Checkbox iconStyle={{ fill: grey800 }} checked={preferStyle.men} onCheck={() => handleChangePreferStyle("men")} />
            }
          />
          <ListItem
            primaryText="Both"
            leftCheckbox={
              <Checkbox
                iconStyle={{ fill: grey800 }}
                checked={preferStyle.both}
                onCheck={() => handleChangePreferStyle("both")}
              />
            }
          />
        </List>
        <PopupButton {...{ createUserInfo: this.state }} />
      </Paper>
    );
  }
}

export default SignupPopup;
