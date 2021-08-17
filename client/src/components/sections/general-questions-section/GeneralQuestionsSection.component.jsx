import React from 'react';

import QuestionsAnswersContainer from '../../questions-answers-container/QuestionsAnswersContainer.component';

import GENERAL_QUESTIONS_SECTION_DATA from '../../../data/sections/general-questions-section/general-questions-section.data';

const GeneralQuestionsSection = () => {
    return (
        <section
            id="general-questions-section"
            style={{ backgroundImage: 'url(img/backgrounds/section-background.png)' }}
            className="general-questions-section"
        >
            <h2 className="title">שירות לציבור</h2>

            <div className="general-questions-container">
                {GENERAL_QUESTIONS_SECTION_DATA.map(({ id, content }) => (
                    <QuestionsAnswersContainer key={id} content={content} />
                ))}
            </div>
        </section>
    );
};

export default GeneralQuestionsSection;
