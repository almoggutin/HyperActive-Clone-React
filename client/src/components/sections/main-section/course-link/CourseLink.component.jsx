import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const CourseLink = ({ name, link, imageURL, dividerClass }) => {
    return (
        <a href={link} className="course-links__link">
            <img className="course-image" src={imageURL} alt="logo" />

            <div className={dividerClass}></div>

            <span className="course-name">{name}</span>

            <FontAwesomeIcon icon={faArrowCircleLeft} />
        </a>
    );
};

export default CourseLink;
