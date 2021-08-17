import React from 'react';

const CustomInput = ({ label, type, checkInput, errorMessage, value }) => {
    return (
        <div className="custom-input">
            <label>{label}</label>
            <div className="divider"></div>
            <input type={type} placeholder={errorMessage} value={value} onInput={checkInput} />
        </div>
    );
};

export default CustomInput;
