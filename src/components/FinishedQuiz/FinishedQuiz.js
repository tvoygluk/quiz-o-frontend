import React from 'react';
import classes from './FinishedQuiz.module.scss'

const FinishedQuiz = ({quiz: quizArray, rightAnswersCount: rightAnswers, onRetryClick}) => {

    const quizItems = quizArray.map((card, index) => {
        let cls = ['fa'];

        if( card.isCorrectAnswer === true ) {
            cls.push('fa-check');
            cls.push(classes.success);
        } else {
            cls.push('fa-times');
            cls.push(classes.error);
        }

        return (
            <li key={index}>
                <strong>{index + 1}. </strong>
                {card.question}
                <i className={cls.join(' ')} />
            </li>
        )
    });

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {quizItems}
            </ul>

            <p>Правильно {rightAnswers} из {quizArray.length}</p>

            <div>
                <button onClick={onRetryClick}>Повторить</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;