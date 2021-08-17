import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import ModalBackDrop from '../modal-backdrop/ModalBackdrop.component';

import { FormModalClassContext } from '../../../context/form-modal.context';

import FORM_MODAL_DATA from '../../../data/modals/form-modal/form-modal.data';

const FormModal = () => {
    const { title, message } = FORM_MODAL_DATA.success;

    const { formModalClass, setFormModalClass } = useContext(FormModalClassContext);

    const closeModal = () => setFormModalClass('modal-backdrop');

    return (
        <ModalBackDrop className={formModalClass}>
            <div className="form-modal">
                <FontAwesomeIcon icon={faTimes} onClick={closeModal} />

                <h2 className="title">{title}</h2>
                <p>{message}</p>

                <FontAwesomeIcon icon={faCheckCircle} />
            </div>
        </ModalBackDrop>
    );
};

export default FormModal;
