import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoF from "./FoF";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";

export const App: React.SFC = () => (
  <Router>
    <Provider store={store}>
      <MuiThemeProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={FoF} />
        </Switch>
        <Footer />
      </MuiThemeProvider>
    </Provider>
  </Router>
);
