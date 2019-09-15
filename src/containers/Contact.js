import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
    render() {
        return(
            <div className="contact_form">
                <h3>Contact Form</h3>
                <ContactForm />
            </div>
        )
    }
}

export default Contact;
