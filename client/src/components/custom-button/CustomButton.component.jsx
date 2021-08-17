import React from 'react';

const CustomButton = ({ type, content }) => {
    return (
        <button className="custom-button" type={type}>
            <div>{content}</div>
        </button>
    );
};

export default CustomButton;
