import React from 'react';

import QuestionsAnswersContainer from '../../questions-answers-container/QuestionsAnswersContainer.component';

import PROGRAM_QUESTIONS_SECTION_DATA from '../../../data/sections/program-questions-section/program-questions-section.data';

const ProgramQuestionsSection = () => {
    return (
        <section id="program-questions-section" className="program-questions-section">
            <h2 className="title">שאלות שכנראה תשאלו</h2>

            <div className="program-questions-container">
                {PROGRAM_QUESTIONS_SECTION_DATA.map(({ id, content }) => (
                    <QuestionsAnswersContainer key={id} content={content} />
                ))}
            </div>
        </section>
    );
};

export default ProgramQuestionsSection;
