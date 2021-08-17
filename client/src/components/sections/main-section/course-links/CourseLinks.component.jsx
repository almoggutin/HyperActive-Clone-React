import React from 'react';

import CourseLink from '../course-link/CourseLink.component';

import MAIN_SECTION_DATA from '../../../../data/sections/main-section/main-section.data';

const CourseLinks = () => {
    return (
        <div className="course-links-container">
            <h1>מה הקריירה שלך בהיי-טק?</h1>

            <div className="course-links">
                {MAIN_SECTION_DATA.map(({ id, ...otherProps }) => (
                    <CourseLink key={id} {...otherProps} />
                ))}
            </div>
        </div>
    );
};

export default CourseLinks;
