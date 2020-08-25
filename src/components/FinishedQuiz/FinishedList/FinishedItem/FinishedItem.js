import React from 'react';
import classes from "./FinishedItem.module.scss";

const FinishedItem = props => {

    return (
        <li key={props.index} className={classes.FinishedItem}>
            <strong>{props.index + 1}. </strong>
            {props.card.question}
            <i className={props.cls.join(' ')} />
        </li>
    );
};

export default FinishedItem;