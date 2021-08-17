import React, { useState, useEffect } from 'react';

import ToggleButton from './toggle-button/ToggleButton.component';
import Navbar from './navbar/Navbar.component';

const Header = () => {
    const [navBarClass, setNavBarClass] = useState('navbar');
    const [toggleButtonClass, setToggleButtonClass] = useState('toggle-button');
    const [mobileSize, setMobileSize] = useState(false);

    const isMobileSize = () => {
        if (window.innerWidth < 925) return setMobileSize(true);

        setMobileSize(false);
    };

    useEffect(() => {
        isMobileSize();
        window.addEventListener('resize', isMobileSize);

        return () => {
            window.removeEventListener('resize', isMobileSize);
        };
    }, []);

    return (
        <header className="header">
            <div className="logo-container">
                <img src="img/company-logo/hyperactive.png" alt="logo" />
                <span>בית הספר להיי-טק הטוב בישראל</span>
            </div>

            <Navbar
                navBarClass={navBarClass}
                setNavBarClass={setNavBarClass}
                setToggleButtonClass={setToggleButtonClass}
                mobileSize={mobileSize}
                isMobileSize={isMobileSize}
            />

            {!mobileSize ? null : (
                <ToggleButton
                    toggleButtonClass={toggleButtonClass}
                    setToggleButtonClass={setToggleButtonClass}
                    navBarClass={navBarClass}
                    setNavBarClass={setNavBarClass}
                    mobileSize={mobileSize}
                    isMobileSize={isMobileSize}
                />
            )}
        </header>
    );
};

export default Header;
