import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import HEADER_DATA from '../../../../data/header/header.data';

const Navbar = ({ navBarClass, setNavBarClass, setToggleButtonClass, mobileSize, isMobileSize }) => {
    const [dropdownClass, setDropdownClass] = useState('dropdown');

    const closeMenuBar = () => {
        setNavBarClass('navbar');
        setToggleButtonClass('toggle-button');
    };

    const openCloseDropdown = () => {
        if (window.innerWidth > 924) return;

        setDropdownClass(dropdownClass === 'dropdown' ? 'dropdown open' : 'dropdown');
    };

    return (
        <nav className={navBarClass}>
            <ul className="navbar-items">
                {!mobileSize ? null : (
                    <li className="navbar-items__item" onClick={closeMenuBar}>
                        בית
                    </li>
                )}

                {HEADER_DATA.map(({ name, dropdown = null, link = null }, index) => (
                    <li key={index} className="navbar-items__item">
                        {link ? (
                            <a href={link}>{name}</a>
                        ) : (
                            <span onClick={openCloseDropdown}>
                                {name}
                                {dropdown && <FontAwesomeIcon icon={faCaretDown} />}
                            </span>
                        )}

                        {dropdown && (
                            <div className={dropdownClass}>
                                {dropdown.map(({ name: dropdownItemName, link: dropdownItemLink }, index) => (
                                    <a key={index} href={dropdownItemLink}>
                                        {dropdownItemName}
                                    </a>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
