import React from 'react';
import classes from './AnswersList.module.scss'
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => {
   const list = props.answers.map((answer, index) => {
        return (
            <AnswerItem
                key={index}
                answer={answer}
                onAnswerClick={props.onAnswerClick}
                answerState={props.answerState}
            />

        )
    });

    return (

        <ul className={classes.AnswersList}>
            {list}

        </ul>
    );
};

export default AnswersList;