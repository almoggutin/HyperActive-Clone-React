import React from 'react';

const ToggleButton = ({
    toggleButtonClass,
    setToggleButtonClass,
    navBarClass,
    setNavBarClass,
    mobileSize,
    isMobileSize,
}) => {
    const openCloseMenuBar = () => {
        toggleButtonClass === 'toggle-button'
            ? setToggleButtonClass('toggle-button open')
            : setToggleButtonClass('toggle-button');

        navBarClass === 'navbar' ? setNavBarClass('navbar open') : setNavBarClass('navbar');
    };
    return (
        <div className={toggleButtonClass} onClick={openCloseMenuBar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    );
};

export default ToggleButton;
