import React, { useState, useEffect } from 'react';

import FormModalClassContextProvider from './context/form-modal.context';

import Homepage from './pages/Homepage.component';
import Header from './components/main-components/header/Header.component';
import Footer from './components/main-components/footer/Footer.component';
import ContactModal from './components/modals/contact-modal/ContactModal.component';
import FormModal from './components/modals/form-modal/FormModal.component';

const App = () => {
    const [mobileSize, setMobileSize] = useState(false);

    const isMobileSize = () => {
        if (window.innerWidth < 450) return setMobileSize(true);

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
        <FormModalClassContextProvider>
            <Header />

            <Homepage />

            {!mobileSize && <ContactModal />}
            <FormModal />

            <Footer />
        </FormModalClassContextProvider>
    );
};

export default App;
