import React from 'react';
import classes from './Question.module.scss';

const Question14 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>const promise = new Promise((resolve) =&gt; {"{"}{"\n"}{"  "}console<span style={{color: '#008c00'}}>.</span>log('<span style={{color: '#008c00'}}>0</span>');{"\n"}{"  "}setTimeout(function() {"{"}{"\n"}{"    "}resolve();{"\n"}{"    "}console<span style={{color: '#008c00'}}>.</span>log('<span style={{color: '#008c00'}}>1</span>');{"\n"}{"  "}{"}"}, <span style={{color: '#008c00'}}>0</span>);{"\n"}{"  "}console<span style={{color: '#008c00'}}>.</span>log('<span style={{color: '#008c00'}}>2</span>');{"\n"}{"}"});{"\n"}{"\n"}promise<span style={{color: '#008c00'}}>.</span>then(() =&gt; {"{"}{"\n"}{"  "}console<span style={{color: '#008c00'}}>.</span>log('<span style={{color: '#008c00'}}>3</span>');{"\n"}{"}"});{"\n"}</pre>
    );
};

export default Question14;