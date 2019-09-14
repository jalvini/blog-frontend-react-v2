import React from 'react';

const FormInputError = props => {

    const errorHandler = () => {
        return !props.valid &&
        props.touched ? props.errorMessage : "";
    };

    return (
            <div>{errorHandler()}</div>
    );
};

export default FormInputError;
