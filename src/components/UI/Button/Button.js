import React from 'react';
import classes from './Button.module.scss'

const Button = props => {
    let cls = [];
    cls.push(classes[props.cls]);

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;