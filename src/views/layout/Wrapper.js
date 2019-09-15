import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";

class Wrapper extends Component {
    render() {
        return(
            <React.Fragment>
            <Router>
                    <header>
                        <Link to="/">
                            <button>home</button>
                        </Link>
                        <Link to="/about">
                            <button>About</button>
                        </Link>
                        <Link to="/contact">
                            <button>contact</button>
                        </Link>
                    </header>

                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </Router>
                <footer>
                    This is the footer
                </footer>
            </React.Fragment>
        )
    }
}

export default Wrapper;
