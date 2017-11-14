import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { grey500 } from "material-ui/styles/colors";
import FlatButton from "material-ui/FlatButton";
import Checkbox from "material-ui/Checkbox";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import { createNewUser } from "./redux/actionCreators";

interface ISignupPopup {
  submitToDatabase: () => any;
}

class SignupPopup extends React.Component<ISignupPopup> {
  state = {
    username: "",
    password: "",
    preferStyle: { men: false, women: false, both: false },
  };
  handleChangeUsername = (username: string) => this.setState(prevState => ({ ...prevState, username }));
  handleChangePassword = (password: string) => this.setState(prevState => ({ ...prevState, password }));
  handleChangePreferStyle = (style: string) =>
    this.setState((prevState: any) => ({
      ...prevState,
      preferStyle: { ...prevState.preferStyle, [style]: !prevState.preferStyle[style] },
    }));
  render() {
    const {
      handleChangeUsername,
      handleChangePassword,
      handleChangePreferStyle,
      props: { submitToDatabase },
      state: { username, password, preferStyle },
    } = this;
    return (
      <Paper>
        <List>
          <Subheader>Email Address</Subheader>
          <TextField hintText="Please enter your email address." floatingLabelText="Email Address" />
          <Subheader>Full Name</Subheader>
          <TextField hintText="Please enter your full name." floatingLabelText="Full Name" />
          <br />
          <Subheader>Password</Subheader>
          <TextField hintText="Please enter your password." floatingLabelText="Password" type="password" />
          <br />
        </List>
        <List>
          <Subheader>What styles are you interested in?</Subheader>
          <ListItem
            primaryText="Women"
            leftCheckbox={<Checkbox checked={preferStyle.women} onCheck={() => handleChangePreferStyle("women")} />}
          />
          <ListItem
            primaryText="Men"
            leftCheckbox={<Checkbox checked={preferStyle.men} onCheck={() => handleChangePreferStyle("Men")} />}
          />{" "}
          <ListItem
            primaryText="Both"
            leftCheckbox={<Checkbox checked={preferStyle.both} onCheck={() => handleChangePreferStyle("both")} />}
          />
        </List>
        <FlatButton />
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  submitToDatabase: (data: any) => dispatch(createNewUser(data)),
});

export default connect(null, mapDispatchToProps)(SignupPopup);
