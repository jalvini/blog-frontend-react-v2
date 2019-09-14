import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <header>
                    <Link to="/">
                        <button>home</button>
                    </Link>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                    <Link to="/code">
                        <button>code</button>
                    </Link>
                    <Link to="/contact">
                        <button>contact</button>
                    </Link>
                    <Link to="/info">
                        <button>info</button>
                    </Link>
            </header>
        )
    }
}

export default Header;
