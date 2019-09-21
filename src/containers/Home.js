import React, { Component } from 'react';
import Posts from "../components/api/Posts";

class Home extends Component {
    render() {
        return(
            <div>
               <Posts />
            </div>
        )
    }
}

export default Home;
