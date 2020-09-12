import React from 'react';
import classes from './Question.module.scss';

const Question10 = () => {
    return (
        <pre className={classes.Question} style={{color: '#000020', background: '#f6f8ff'}}><span style={{color: '#200080', fontWeight: 'bold'}}>div</span> <span style={{color: '#406080'}}>{"{"}</span>{"\n"}{"    "}<span style={{color: '#7779bb', fontWeight: 'bold'}}>display</span><span style={{color: '#308080'}}>:</span> <span style={{color: '#074726'}}>none</span><span style={{color: '#406080'}}>;</span>{"\n"}<span style={{color: '#406080'}}>{"}"}</span>{"\n"}{"\n"}<span style={{color: '#200080', fontWeight: 'bold'}}>div</span> <span style={{color: '#406080'}}>{"{"}</span>{"\n"}{"    "}<span style={{color: '#7779bb', fontWeight: 'bold'}}>visibility</span><span style={{color: '#308080'}}>:</span> <span style={{color: '#074726'}}>hidden</span><span style={{color: '#406080'}}>;</span>{"\n"}<span style={{color: '#406080'}}>{"}"}</span>{"\n"}</pre>
    );
};

export default Question10;