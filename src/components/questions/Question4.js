import React from 'react';
import classes from './Question.module.scss';

const Question4 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>a<sup>log<sub>a<sup>x</sup></sub></sup> = x</pre>
    );
};

export default Question4;