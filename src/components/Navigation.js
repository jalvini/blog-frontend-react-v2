import React, { Component } from 'react';
import SiteLink from "./SiteLink";

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            Navigation: {
                home: {
                    name: "Home",
                    url: "/",
                },
                about: {
                    name: "About",
                    url: "/about"
                },
                contact: {
                    name: "Contact",
                    url: "/contact"
                }
            }
        }
    }

    render() {
        return(
            <div className={"link_bar"}>
                <SiteLink
                    to={this.state.Navigation.home.url}
                    htmlText={this.state.Navigation.home.name}
                />

                <SiteLink
                    to={this.state.Navigation.about.url}
                    htmlText={this.state.Navigation.about.name}
                />

                <SiteLink
                    to={this.state.Navigation.contact.url}
                    htmlText={this.state.Navigation.contact.name}
                />
            </div>
        )
    }
}

export default Navigation;
