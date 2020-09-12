import React from 'react';
import classes from './Question.module.scss';

const Question3 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}><span style={{color: '#0057a6'}}>&lt;</span><span style={{color: '#200080', fontWeight: 'bold'}}>input</span><span style={{color: '#474796'}}> </span><span style={{color: '#074726'}}>type</span><span style={{color: '#308080'}}>=</span><span style={{color: '#1060b6'}}>"hidden"</span><span style={{color: '#474796'}}> </span><span style={{color: '#074726'}}>name</span><span style={{color: '#308080'}}>=</span><span style={{color: '#1060b6'}}>"name"</span><span style={{color: '#474796'}}> </span><span style={{color: '#074726'}}>value</span><span style={{color: '#308080'}}>=</span><span style={{color: '#1060b6'}}>"value"</span><span style={{color: '#0057a6'}}>&gt;</span>{"\n"}</pre>
    );
};

export default Question3;