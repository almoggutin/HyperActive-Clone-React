import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const QuestionAnswer = ({ question, answer }) => {
    const [answerClass, setAnswerClass] = useState('answer close');

    const showAnswer = () => setAnswerClass(answerClass === 'answer close' ? 'answer open' : 'answer close');

    return (
        <div className="question-answer-container" onClick={showAnswer}>
            <div className="question">
                <span>{question}</span>
                <FontAwesomeIcon icon={answerClass === 'answer close' ? faArrowCircleDown : faArrowCircleUp} />
            </div>

            <div className={answerClass} dangerouslySetInnerHTML={{ __html: answer }}></div>
        </div>
    );
};

export default QuestionAnswer;
