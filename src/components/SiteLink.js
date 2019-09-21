import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SiteLink extends Component {
    render() {
        return(
            <Link to={this.props.to}>
                {this.props.htmlText}
            </Link>
        )
    }
}

export default SiteLink;
