import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <React.Fragment>
                <footer className={"footer_container row"}>
                    <div className={"col col-3"}>
                        This is the footer
                    </div>
                    <div className={"col col-3"}>
                        This is the footer
                    </div>
                    <div className={"col col-3"}>
                        This is the footer
                    </div>
                    <div className={"col col-3"}>
                        This is the footer
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
