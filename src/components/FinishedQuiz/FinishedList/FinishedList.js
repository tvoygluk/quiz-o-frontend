import React from 'react';
import classes from './FinishedList.module.scss'
import FinishedItem from "./FinishedItem/FinishedItem";


const FinishedList = props => {


    const quizItems = props.quizArray.map((card, index) => {

        let cls = ['fa'];

        if( Object.values(props.answers)[index] === 'success' ) {
            cls.push('fa-check');
            cls.push(classes.success);

        } else {
            cls.push('fa-times');
            cls.push(classes.error);
        }

        return (
            <FinishedItem
                key={index}
                index={index}
                card={card}
                cls={cls}
            />

        )

    })

    return (
        <ul className={classes.FinishedList}>
            {quizItems}
        </ul>
    );

}

export default FinishedList;