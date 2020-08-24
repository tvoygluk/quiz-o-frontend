import React from 'react';
import classes from './AnswerItem.module.scss'

const AnswerItem = props => {
    let cls = [classes.AnswerItem];

    if (props.answerState) {
        cls.push(classes[props.answerState[props.answer.id]])
    }

    return (
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >{props.answer.text}</li>
    );
};

export default AnswerItem;