import React, {Component} from 'react';
import TextInput from './Input';
import validate from './Validation';
import FormInputError from "./FormInputError";

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

        let formIsValid = true;
        let inputIdentifier;
        for (inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
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
                />
                <FormInputError
                    errorMessage={this.state.formControls.name.errorMessage}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                />
                <TextInput name="email"
                           placeholder={this.state.formControls.email.placeholderText}
                           value={this.state.formControls.email.value}
                           onChange={this.changeHandler}
                />
                <FormInputError
                    errorMessage={this.state.formControls.email.errorMessage}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}
                />
                <TextInput name="password"
                           placeholder={this.state.formControls.password.placeholderText}
                           value={this.state.formControls.password.value}
                           onChange={this.changeHandler}
                />

                <FormInputError
                    errorMessage={this.state.formControls.password.errorMessage}
                    touched={this.state.formControls.password.touched}
                    valid={this.state.formControls.password.valid}
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
