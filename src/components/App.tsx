import * as React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Router from "react-router-dom/es/BrowserRouter";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import Provider from "react-redux/es/components/Provider";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { store } from "./redux/store";
import FoF from "./FoF";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Footer from "./Footer";
import Collection from "./Collection";
import ProductShow from "./product/Show";

export const App: React.SFC = () => (
  <Router>
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/collections" component={Collection} />
            <Route
              path="/products/:id"
              component={(props:any) => {
                console.log(props);
                return <ProductShow productPermalink={props.match.params.id} />;
              }}
            />
            <Route component={FoF} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Provider>
  </Router>
);
