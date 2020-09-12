import React from 'react';
import classes from './Question.module.scss';

const Question1 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}><span style={{color: '#0057a6'}}>&lt;</span><span style={{color: '#200080', fontWeight: 'bold'}}>a</span><span style={{color: '#474796'}}> </span><span style={{color: '#074726'}}>href</span><span style={{color: '#308080'}}>=</span><span style={{color: '#1060b6'}}>"emailto:example@mail.com"</span><span style={{color: '#0057a6'}}>&gt;</span>Text me<span style={{color: '#0057a6'}}>&lt;/</span><span style={{color: '#200080', fontWeight: 'bold'}}>a</span><span style={{color: '#0057a6'}}>&gt;</span>{"\n"}</pre>
    );
};

export default Question1;