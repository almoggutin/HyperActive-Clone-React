import React, { createContext, useState } from 'react';

export const FormModalClassContext = createContext();

const FormModalClassContextProvider = (props) => {
    const [formModalClass, setFormModalClass] = useState('modal-backdrop');

    return (
        <FormModalClassContext.Provider value={{ formModalClass, setFormModalClass }}>
            {props.children}
        </FormModalClassContext.Provider>
    );
};

export default FormModalClassContextProvider;
