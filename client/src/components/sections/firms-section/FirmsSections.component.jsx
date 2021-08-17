import React from 'react';

import FIRMS_SECTION_DATA from '../../../data/sections/firms-section/firms-section.data';

const FirmsSection = () => {
    return (
        <section id="firms-section" className="firms-section">
            <h2 className="title">כאן תמצאו את הבוגרים</h2>
            <div className="firms-container">
                {FIRMS_SECTION_DATA.map(({ id, name, imageURL }) => (
                    <img key={id} src={imageURL} alt={name} />
                ))}
            </div>
        </section>
    );
};

export default FirmsSection;
