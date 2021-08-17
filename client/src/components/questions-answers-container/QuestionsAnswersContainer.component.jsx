import React from 'react';

import QuestionAnswer from '../question-answer/QuestionAnswer.component';

const QuestionsAnswersContainer = ({ content }) => {
    return (
        <div className="questions-answers-container">
            {content.map(({ id, question, answer }) => (
                <QuestionAnswer key={id} question={question} answer={answer} />
            ))}
        </div>
    );
};

export default QuestionsAnswersContainer;
