import React, { useState, useContext } from 'react';
import { isEmail, isMobilePhone } from 'validator';

import CustomInput from '../../custom-input/CustomInput.component';
import CustomButton from '../../custom-button/CustomButton.component';

import { FormModalClassContext } from '../../../context/form-modal.context';

const Footer = () => {
    const { setFormModalClass } = useContext(FormModalClassContext);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const isFormValid = () => name !== '' && isNameValid && phone && isPhoneValid && email && isEmailValid;

    const checkNameInput = (event) => {
        const nameInput = event.target.value;

        if (nameInput === '') {
            setName(nameInput);
            setIsNameValid(false);
            return;
        }

        setName(nameInput);
        setIsNameValid(true);
    };

    const checkPhoneInput = (event) => {
        const phoneInput = event.target.value;

        if (phoneInput === '' || !isMobilePhone(phoneInput)) {
            setPhone(phoneInput);
            setIsPhoneValid(false);
            return;
        }

        setPhone(phoneInput);
        setIsPhoneValid(true);
    };

    const checkEmailInput = (event) => {
        const emailInput = event.target.value;

        if (emailInput === '' || !isEmail(emailInput)) {
            setEmail(emailInput);
            setIsEmailValid(false);
            return;
        }

        setEmail(emailInput);
        setIsEmailValid(true);
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            setName('');
            setPhone('');
            setEmail('');
            setNameErrorMessage('*נא להזין שם תקין');
            setPhoneErrorMessage('*נא להזין מספר טלפון');
            setEmailErrorMessage('*נא להזין כתובת מייל');
            return;
        }

        setFormModalClass('modal-backdrop show');
    };

    return (
        <footer className="footer">
            <h2 className="title">צרו קשר לכל שאלה או לקביעת פגישת ייעוץ (מלאו פרטיכם ונחזור אליכם בהקדם) </h2>

            <form className="footer-contact-form" onSubmit={submitForm}>
                <div className="form-inputs-container">
                    <CustomInput
                        label={'שם מלא'}
                        type="text"
                        checkInput={checkNameInput}
                        errorMessage={nameErrorMessage}
                        value={name}
                    />
                    <CustomInput
                        label={'טלפון'}
                        type="tel"
                        checkInput={checkPhoneInput}
                        errorMessage={phoneErrorMessage}
                        value={phone}
                    />
                    <CustomInput
                        label={'מייל'}
                        type="text"
                        checkInput={checkEmailInput}
                        errorMessage={emailErrorMessage}
                        value={email}
                    />

                    <CustomButton type="submit" content="דברו איתי!" />
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" defaultChecked={true} />
                    <label>אני מאשר קבלת עדכונים ומבצעים מהייפראקטיב בכפוף לתקנון.</label>
                </div>

                <span className="policy">מדיניות פרטיות משתמשים</span>

                <span className="policy">הצהרת נגישות</span>
            </form>
        </footer>
    );
};

export default Footer;
