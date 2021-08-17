import React, { useState, useEffect, useContext } from 'react';
import { isEmail, isMobilePhone } from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import ModalBackdrop from '../modal-backdrop/ModalBackdrop.component';

import { FormModalClassContext } from '../../../context/form-modal.context';

const ContactModal = () => {
    const { setFormModalClass } = useContext(FormModalClassContext);

    const [contactModalClass, setContactModalClass] = useState('modal-backdrop contact');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [namePlaceholder, setNamePlaceholder] = useState('שם מלא');
    const [phonePlaceholder, setPhonePlaceholder] = useState('טלפון');
    const [emailPlaceholder, setEmailPlaceholder] = useState('אי-מייל');
    const [nameInputClass, setNameInputClass] = useState('');
    const [phoneInputClass, setPhoneInputClass] = useState('');
    const [emailInputClass, setEmailInputClass] = useState('');

    useEffect(() => {
        setTimeout(() => {
            if (!sessionStorage.getItem('contact-modal')) {
                setContactModalClass('modal-backdrop contact show');
                sessionStorage.setItem('contact-modal', true);
            }
        }, 2000);
    }, []);

    const closeModal = () => setContactModalClass('modal-backdrop contact');

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
        setNameInputClass('');
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
        setPhoneInputClass('');
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
        setEmailInputClass('');
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            console.log(true);
            setNameInputClass('invalid');
            setPhoneInputClass('invalid');
            setEmailInputClass('invalid');

            setName('');
            setPhone('');
            setEmail('');

            setNamePlaceholder('*נא להזין שם תקין');
            setPhonePlaceholder('*נא להזין מספר טלפון');
            setEmailPlaceholder('*נא להזין כתובת מייל');
            return;
        }

        setContactModalClass('modal-backdrop contact');
        setTimeout(() => setFormModalClass('modal-backdrop show'), 500);
    };

    return (
        <ModalBackdrop className={contactModalClass}>
            <div style={{ backgroundImage: 'url(img/backgrounds/modal-background.jpg)' }} className="contact-modal">
                <FontAwesomeIcon icon={faTimes} onClick={closeModal} />

                <h2 className="title">מעוניינים לקבל ייעוץ חינם לגבי לימודי הייטק? השאירו פרטים! </h2>

                <form className="contact-modal__form" onSubmit={submitForm}>
                    <div className="form-inputs-container">
                        <input
                            type="text"
                            placeholder={namePlaceholder}
                            onInput={checkNameInput}
                            className={nameInputClass}
                            value={name}
                        />
                        <input
                            type="tel"
                            placeholder={phonePlaceholder}
                            onInput={checkPhoneInput}
                            className={phoneInputClass}
                            value={phone}
                        />
                        <input
                            type="text"
                            placeholder={emailPlaceholder}
                            onInput={checkEmailInput}
                            className={emailInputClass}
                            value={email}
                        />
                    </div>

                    <div className="checkbox-container">
                        <input type="checkbox" defaultChecked={true} />
                        <label>אני מאשר קבלת עדכונים ומבצעים מהייפראקטיב.</label>
                    </div>

                    <button type="submit">
                        <span> דברו איתי </span>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                </form>
            </div>
        </ModalBackdrop>
    );
};

export default ContactModal;
