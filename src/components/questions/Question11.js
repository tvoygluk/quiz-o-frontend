import React from 'react';
import classes from './Question.module.scss';

const Question11 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>console<span style={{color: '#008c00'}}>.</span>log(<span style={{color: '#008c00'}}>4</span> + <span style={{color: '#008c00'}}>3</span> + <span style={{color: '#008c00'}}>2</span> + "<span style={{color: '#008c00'}}>1</span>");{"\n"}</pre>
    );
};

export default Question11;