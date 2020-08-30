import React from 'react';
import classes from "./FinishedItem.module.scss";

const FinishedItem = props => {

    return (
        <li key={props.index} className={classes.FinishedItem}>
            <strong>{props.index + 1}. </strong>
            <a href={props.card.link}>{props.card.theme}</a>
            <i className={props.cls.join(' ')} />
        </li>
    );
};

export default FinishedItem;