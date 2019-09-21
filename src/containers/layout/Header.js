import React, { Component } from 'react';
import Navigation from "../../components/Navigation";
import CategoryNav from "../../components/CategoryNav";

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
                            <Navigation />
                            <CategoryNav />
                        </div>
                    </header>
                <div className={"spacer"}>&nbsp;</div>
            </React.Fragment>
        )
    }
}

export default Header;
