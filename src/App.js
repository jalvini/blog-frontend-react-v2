import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

const Code = () => (
    <div>
        Code
    </div>
);

class App extends Component {
  render() {
    return(
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/code" component={Code} />
                <Footer />
            </div>
        </Router>
    )
  }
}

export default App;
