import React from 'react';
import classes from './Button.module.scss'

const Button = props => {
    return (
        <button
            className={classes.ButtonMain}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;