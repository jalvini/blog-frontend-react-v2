import React  from 'react';
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { Switch, withRouter} from "react-router-dom";

const Routes = withRouter(({ location }) => (
            <Switch location={location}>
                <Route exact path="/" component={Home} />,
                <Route exact path="/coding" component={Home} />,
                <Route exact path="/opinions" component={Home}  />,
                <Route exact path="/dev-ops" component={Home} />,
                <Route exact path="/about" component={About} />,
                <Route exact path="/contact" component={Contact} />
            </Switch>
));


export default Routes;
