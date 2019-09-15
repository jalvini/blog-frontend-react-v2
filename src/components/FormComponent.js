import React, {Component} from 'react';
import TextInput from './Input';
import validate from './Validation';

class FormComponent extends Component {

    constructor() {
        super();

        this.state = {
            formIsValid: false,

            formControls: {
                name: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                    },
                    className: 'input_box',
                    errorMessage: 'name is required',
                    placeholderText: 'Your Name',
                    touched: false
                },
                email: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: false,
                    },
                    className: 'input_box',
                    errorMessage: 'email has to be valid email address',
                    placeholderText: 'Your Email',
                    touched: false
                },
                password: {
                    value: '',
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        minLength: 6,
                    },
                    className: 'input_box',
                    errorMessage: 'password needs to be 6 characters',
                    placeholderText: 'Your Password',
                    touched: false
                }

            }
        };
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        };

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        updatedFormElement.className = updatedFormElement.valid ? 'input_success' : 'input_error';

        let formIsValid = true;
        let inputIdentifier;
        for (inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid,
        });
    };

    formSubmitHandler = () => {
        console.dir(this.state.formControls);
    };

    render() {
        return (
            <div>
                <TextInput name="name"
                           placeholder={this.state.formControls.name.placeholderText}
                           value={this.state.formControls.name.value}
                           onChange={this.changeHandler}
                           className ={this.state.formControls.name.className}
                           valid={this.state.formControls.name.valid}
                           touched={this.state.formControls.name.touched}
                           errorMessage={this.state.formControls.name.errorMessage}
                />

                <TextInput name="email"
                           placeholder={this.state.formControls.email.placeholderText}
                           value={this.state.formControls.email.value}
                           onChange={this.changeHandler}
                           className ={this.state.formControls.email.className}
                           valid={this.state.formControls.email.valid}
                           touched={this.state.formControls.email.touched}
                           errorMessage={this.state.formControls.email.errorMessage}
                />

                <TextInput name="password"
                           placeholder={this.state.formControls.password.placeholderText}
                           value={this.state.formControls.password.value}
                           onChange={this.changeHandler}
                           className ={this.state.formControls.password.className}
                           valid={this.state.formControls.password.valid}
                           touched={this.state.formControls.password.touched}
                           errorMessage={this.state.formControls.password.errorMessage}
                />

                <button onClick={this.formSubmitHandler}
                        disabled={!this.state.formIsValid}
                >
                    Submit
                </button>
            </div>
        );
    }

}

export default FormComponent;
