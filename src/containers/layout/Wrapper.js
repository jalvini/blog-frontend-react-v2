import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import Header from "./Header";
import Footer from "./Footer";

class Wrapper extends Component {
    render() {
        return(
            <div className={"container-fluid"}>
                <Router>
                    <Header />
                    <div className={"row"}>
                        <div className={"col col-12"}>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </div>
                    </div>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default Wrapper;
