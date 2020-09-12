import React from 'react';
import classes from './Question.module.scss';

const Question15 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>const foo = async() =&gt; 'foo';{"\n"}{"\n"}const bar = async() =&gt; 'bar';{"\n"}{"\n"}const baz = async() =&gt; {"{"}{"\n"}{"  "}const a = await Promise<span style={{color: '#008c00'}}>.</span>race([bar, foo]);{"\n"}{"  "}console<span style={{color: '#008c00'}}>.</span>log(a);{"\n"}{"}"};{"\n"}{"\n"}baz();{"\n"}</pre>
    );
};

export default Question15;