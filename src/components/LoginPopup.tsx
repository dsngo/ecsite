import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { grey500 } from "material-ui/styles/colors";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "material-ui/Checkbox";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import { createNewUser } from "./redux/actionCreators";

interface ISignupPopup {
  createNewUser: (data: any) => any;
}

class SignupPopup extends React.Component<ISignupPopup> {
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
      props: { createNewUser },
      state: { email, password, fullname, preferStyle },
    } = this;
    return (
      <Paper>
        <List>
          <Subheader>Email Address</Subheader>
          <TextField
            value={email}
            onChange={(e: any) => handleChangeUserInfo("email", e.target.value)}
            hintText="Please enter your email address."
            floatingLabelText="Email Address"
          />
          <Subheader>Full Name</Subheader>
          <TextField
            value={fullname}
            onChange={(e: any) => handleChangeUserInfo("fullname", e.target.value)}
            hintText="Please enter your full name."
            floatingLabelText="Full Name"
          />
          <br />
          <Subheader>Password</Subheader>
          <TextField
            value={password}
            onChange={(e: any) => handleChangeUserInfo("password", e.target.value)}
            hintText="Please enter your password."
            floatingLabelText="Password"
            type="password"
          />
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
        <RaisedButton label="CONTINUE" primary onClick={()=> createNewUser(this.state)}/>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  createNewUser: (data: any) => dispatch(createNewUser(data)),
});

export default connect(null, mapDispatchToProps)(SignupPopup);
