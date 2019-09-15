import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";

class Wrapper extends Component {
    render() {
        return(
            <div className={"container-fluid"}>
                <Router>
                    <div className={"row"}>
                        <div className={"col col-lg-1 padding-0"}>
                            <div className={"logo_container"}>
                                <div className={"logo"}>
                                    <img src={"/assets/images/logo.svg"} alt={"logo"} />
                                </div>
                            </div>
                        </div>
                        <div className={"col col-lg-11 padding-0"}>
                            <div className={"link_bar"}>
                                <Link to="/">
                                    Home
                                </Link>
                                <Link to="/about">
                                    About
                                </Link>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </div>

                            <div className={"secondary_links"}>
                                <Link to="/">
                                    Home
                                </Link>
                                <Link to="/about">
                                    About
                                </Link>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col col-12"}>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                </Router>
                <footer>
                    This is the footer
                </footer>
            </div>
        )
    }
}

export default Wrapper;
