import React, { useState, useContext } from 'react';
import { isEmail, isMobilePhone } from 'validator';

import CustomButton from '../../../custom-button/CustomButton.component';
import CustomInput from '../../../custom-input/CustomInput.component';

import { FormModalClassContext } from '../../../../context/form-modal.context';

const ContactForm = () => {
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
        <form className="contact-form" onSubmit={submitForm}>
            <h2 className="title">רוצה לשמוע עוד?</h2>

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
            </div>

            <div className="checkbox-container">
                <input type="checkbox" defaultChecked={true} />
                <label>אני מאשר קבלת עדכונים ומבצעים מהייפראקטיב בכפוף לתקנון.</label>
            </div>

            <span className="policy">מדיניות פרטיות משתמשים</span>
            <span className="policy">הצהרת נגישות</span>

            <CustomButton type="submit" content="דברו איתי!" />
        </form>
    );
};

export default ContactForm;
