import React from 'react';
import classes from './Question.module.scss';

const Question13 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>let x = <span style={{color: '#008c00'}}>4</span>{"\n"}const obj = {"{"}{"\n"}{"  "}x: <span style={{color: '#008c00'}}>3</span>,{"\n"}{"  "}bar: () =&gt; {"{"}{"\n"}{"    "}let x = <span style={{color: '#008c00'}}>2</span>;{"\n"}{"    "}console<span style={{color: '#008c00'}}>.</span>log(this<span style={{color: '#008c00'}}>.</span>x);{"\n"}{"  "}{"}"}{"\n"}{"}"};{"\n"}obj<span style={{color: '#008c00'}}>.</span>bar();{"\n"}</pre>
    );
};

export default Question13;