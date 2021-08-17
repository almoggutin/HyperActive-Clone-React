import React from 'react';

import Banner from '../components/banner/Banner.component';
import WhatsappButton from '../components/main-components/whatsapp-button/WhatsappButton.component';
import AboutUsSection from '../components/sections/about-us-section/AboutUsSection.component';
import FirmsSection from '../components/sections/firms-section/FirmsSections.component';
import GeneralQuestionsSection from '../components/sections/general-questions-section/GeneralQuestionsSection.component';
import HowItWorks from '../components/sections/how-it-works-section/HowItWorks.component';
import MainSection from '../components/sections/main-section/MainSection';
import ProgramQuestionsSection from '../components/sections/program-questions-section/ProgramQuestionsSection.component';
import WhySection from '../components/sections/why-section/WhySection.component';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <MainSection />
            <WhySection />
            <FirmsSection />
            <AboutUsSection />
            <HowItWorks />
            <ProgramQuestionsSection />
            <GeneralQuestionsSection />
            <WhatsappButton />
        </div>
    );
};

export default Homepage;
