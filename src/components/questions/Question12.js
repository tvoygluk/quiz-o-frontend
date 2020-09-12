import React from 'react';
import classes from './Question.module.scss';

const Question12 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>let foo = <span style={{color: '#008c00'}}>1</span>;{"\n"}const bar = () =&gt; {"{"}{"\n"}{"  "}foo = <span style={{color: '#008c00'}}>10</span>;{"\n"}{"  "}function foo() {"{"}{"}"}{"\n"}{"  "}return;{"\n"}{"}"}{"\n"}bar();{"\n"}console<span style={{color: '#008c00'}}>.</span>log(foo);{"\n"}</pre>
    );
};

export default Question12;