import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <header className={"row"}>
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
                </header>
                <div className={"spacer"}>&nbsp;</div>
            </React.Fragment>
    )
    }
}

export default Header;
