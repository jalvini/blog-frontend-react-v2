import React,{Component} from 'react';
import FormInputError from "./FormInputError";

class TextInput extends Component {

    render() {
        const { valid, errorMessage, touched, ...props } = this.props;

        return (
            <div className={"form_group_text_input"}>
                <input type="text" {...props} />
                <FormInputError
                    errorMessage={this.props.errorMessage}
                    touched={this.props.touched}
                    valid={this.props.valid}
                />
            </div>
        );
    }
}

export default TextInput;
