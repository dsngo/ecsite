import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoF from "./FoF";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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
<<<<<<< HEAD
              component={(props: any) => {
                return <ProductShow />;
=======
              component={(props:any) => {
                console.log(props);
                return <ProductShow productPermalink={props.match.params.id} />;
>>>>>>> fb0a7aa29a9e59f06b3f9cdd7b088a15811a7638
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
