import React from 'react';
import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";
import Question4 from "../questions/Question4";
import Question5 from "../questions/Question5";
import Question6 from "../questions/Question6";
import Question7 from "../questions/Question7";
import Question8 from "../questions/Question8";
import Question9 from "../questions/Question9";
import Question10 from "../questions/Question10";
import Question11 from "../questions/Question11";
import Question12 from "../questions/Question12";
import Question13 from "../questions/Question13";
import Question14 from "../questions/Question14";
import Question15 from "../questions/Question15";

const ActiveQuiz = props => {

    const codeQuestion = {
        '1': () => <Question1/>,
        '2': () => <Question2/>,
        '3': () => <Question3/>,
        '4': () => <Question4/>,
        '5': () => <Question5/>,
        '6': () => <Question6/>,
        '7': () => <Question7/>,
        '8': () => <Question8/>,
        '9': () => <Question9/>,
        '10': () => <Question10/>,
        '11': () => <Question11/>,
        '12': () => <Question12/>,
        '13': () => <Question13/>,
        '14': () => <Question14/>,
        '15': () => <Question15/>,
    };


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