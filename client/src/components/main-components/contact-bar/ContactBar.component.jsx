import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons';

import { ReactComponent as ReactLogo } from '../../../assets/whatsapp.svg';

const ContactBar = () => {
    return (
        <div className="contact-bar">
            <a href="#footer">
                <FontAwesomeIcon icon={faHandPointUp} />
                <span>לפרטים</span>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=972512409433&text=%D7%A9%D7%9C%D7%95%D7%9D+%D7%94%D7%99%D7%99%D7%A4%D7%A8%D7%90%D7%A7%D7%98%D7%99%D7%91%2C+%D7%91%D7%93%D7%99%D7%95%D7%A7+%D7%91%D7%99%D7%A7%D7%A8%D7%AA%D7%99+%D7%91%D7%90%D7%AA%D7%A8+%D7%A9%D7%9C%D7%9B%D7%9D%2C+%D7%94%D7%99%D7%99%D7%AA%D7%99+%D7%A9%D7%9E%D7%97+%D7%9C%D7%A9%D7%9E%D7%95%D7%A2+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D&app_absent=0">
                <ReactLogo />
                <span>וואטסאפ</span>
            </a>
        </div>
    );
};

export default ContactBar;
