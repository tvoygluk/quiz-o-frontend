import React, {useEffect} from 'react';
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {retryQuiz} from "../../store/actions/finishedQuiz";
import {getData} from "../../store/actions/quiz";
import {onAnswerClick} from "../../store/actions/activeQuiz";

const Quiz = props => {

    useEffect(() => {
        props.getQuizzes();
        // eslint-disable-next-line
    },[]);

    return (
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>

                {props.isFinished
                    ?
                        <>
                            <h2 className={classes.endTitle}>&#60;THE END&#47;&#62;</h2>
                            <h3>Ошиблись?<br/>Ознакомьтесь с материалами <br/>и попробуйте свои силы снова!</h3>
                            <FinishedQuiz
                                quiz={props.quiz}
                                onRetryClick={props.onRetryClick}
                                answers={props.answers}
                            />
                        </>
                    : props.hadQuizState
                        ?
                            <>
                                <h2 className={classes.title}>Quiz-o-Frontend</h2>
                                <ActiveQuiz
                                    quizLength={props.quiz.length}
                                    question={props.quiz[props.activeQuestion].question}
                                    activeQuestion={props.activeQuestion + 1}
                                    answers={props.quiz[props.activeQuestion].answers}

                                    onAnswerClick={props.onAnswerClick}

                                    answerState={props.answerState}
                                />
                            </>
                        :
                            <Loader />
                }
            </div>
        </div>
    );

};

function mapStateToProps(state) {
    return {
        isFinished: state.isFinished,
        activeQuestion: state.activeQuestion,
        answerState: state.answerState,
        answers: state.answers,
        quiz: state.quiz,
        hadQuizState: state.hadQuizState,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRetryClick: () => dispatch(retryQuiz()),
        getQuizzes: () => dispatch(getData()),
        onAnswerClick: answerId => dispatch(onAnswerClick(answerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);