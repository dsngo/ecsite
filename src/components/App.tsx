import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoF from "./FoF";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./Navbar";
import Landing from "./Landing";

export const App: React.SFC = () => (
    <Router>
            <MuiThemeProvider>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route component={FoF} />
                    </Switch>
                </div>
            </MuiThemeProvider>
    </Router>
);
