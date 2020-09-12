import React from 'react';
import classes from './Question.module.scss';

const Question5 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>
            <ol type="A" start="4">
                <li>first</li>
                <li>second</li>
                <li>third</li>
            </ol>
        </pre>
    );
};

export default Question5;