import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';

class Contact extends Component {
    render() {
        return(
            <div className="container">
                <h3>Contact Form</h3>
                <FormComponent />
            </div>
        )
    }
}

export default Contact;