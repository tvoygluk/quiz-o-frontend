import React, {useEffect, useState} from 'react';
import classes from './FinishedQuiz.module.scss'
import FinishedList from "./FinishedList/FinishedList";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (props.answers !== {}) {
            Object.values(props.answers).forEach((val) => {
                if (val === 'success') {
                    setCount(prev => prev + 1)
                }
            })
        }
    },[props.answers]);

    return (
        <div className={classes.FinishedQuiz}>

            <FinishedList
                quizArray={props.quiz}
                answers={props.answers}
            />

            <div className={classes.wrapper}>
                <Button
                    cls={'Button'}
                    onClick={props.onRetryClick}
                >Повторить</Button>

                <p>Правильно {count} из {props.quiz.length}</p>
            </div>

        </div>
    );
};

export default FinishedQuiz;