import React from 'react';
import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";

const ActiveQuiz = props => {

    const codeQuestion = {
        '1': () => <Question1/>,
        '2': () => <Question2/>,
    }


    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
              <span>
                  <strong>{props.activeQuestion}.</strong>&nbsp;
                  {props.question}
              </span>
                <small>{props.activeQuestion} из {props.quizLength}</small>
            </p>

            {codeQuestion[props.activeQuestion]()}

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
                answerState={props.answerState}
            />
        </div>
    );
};

export default ActiveQuiz;