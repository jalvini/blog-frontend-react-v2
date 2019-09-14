import React from 'react';

const TextInput = props => {

    let formControl = "form-control";

    let touched = props.touched ? props.touched  : false;

    if (touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="text" className={formControl}  {...props} />
        </div>
    );
};

export default TextInput;
