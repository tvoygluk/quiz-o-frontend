import React from 'react';
import classes from './Question.module.scss';

const Question1 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}>function Person1(name, age, sex) {"{"}{"\n"}{"  "}this<span style={{color: '#008c00'}}>.</span>name = name;{"\n"}{"  "}this<span style={{color: '#008c00'}}>.</span>age = age;{"\n"}{"  "}this<span style={{color: '#008c00'}}>.</span>sex = sex;{"\n"}{"}"}{"\n"}{"\n"}var rand = new Person('Rand McKinnon', <span style={{color: '#008c00'}}>33</span>, 'M');{"\n"}var ken = new Person('Ken Jones', <span style={{color: '#008c00'}}>39</span>, 'M');{"\n"}</pre>
    );
};

export default Question1;