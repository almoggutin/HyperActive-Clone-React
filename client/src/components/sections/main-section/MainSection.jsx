import React from 'react';

import CourseLinks from './course-links/CourseLinks.component';
import ContactForm from './contact-form/ContactForm.component';

const MainSection = () => {
    return (
        <section id="main-section" className="main-section">
            <div>
                <CourseLinks />
                <ContactForm />
            </div>
        </section>
    );
};

export default MainSection;
