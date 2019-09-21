import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../Routes";

class Wrapper extends Component {
    render() {
        return(
            <div className={"container-fluid"}>
                <Router>
                    <Header />
                    <Routes />
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default Wrapper;
