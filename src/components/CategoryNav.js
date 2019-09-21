import React, { Component } from 'react';
import SiteLink from "./SiteLink";

class CategoryNav extends Component {
    constructor() {
        super();
        this.state = {
            Navigation: {
                home: {
                    name: "Coding",
                    url: "/coding",
                },
                about: {
                    name: "Opinions",
                    url: "/opinions"
                },
                contact: {
                    name: "Dev Ops",
                    url: "/dev-ops"
                }
            }
        }
    }
    render() {
        return(
            <div className={"secondary_links"}>
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

export default CategoryNav;
