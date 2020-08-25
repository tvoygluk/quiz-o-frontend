import React, {Component} from 'react';
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    /* answerState: { [id]: 'success' } либо answerState: { [id]: 'error' } */
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        answers: {},
        quiz: [
            {
                id: 1,
                rightAnswerId: 1,
                question: 'Что выведет консоль?',
                answers: [
                    {text: 'Syntax error', id: 1},
                    {text: '42', id: 2},
                    {text: 'Reference error', id: 3},
                    {text: 'baz', id: 4}
                ],
            },
            {
                id: 2,
                rightAnswerId: 1,
                question: 'В каком порядке сработают логи?',
                answers: [
                    {text: '123', id: 1},
                    {text: '213', id: 2},
                    {text: '132', id: 3},
                    {text: '231', id: 4}
                ],
            },
        ],
    }

    isFinishedQuiz = () => {
        return this.state.quiz.length === this.state.activeQuestion + 1;
    }

    onAnswerClick = answerId => {
        const answeringQuestion = this.state.quiz[this.state.activeQuestion];
        const SUCCESS = 'success';
        const ERROR = 'error';
        const answers = {...this.state.answers};

        if (!this.state.answerState || (this.state.answerState[Object.keys(this.state.answerState)[0]] === ERROR)) {

            if (answeringQuestion.rightAnswerId === answerId) {

                if(!answers[answeringQuestion.id]) {
                    answers[answeringQuestion.id] = SUCCESS;
                }

                this.setState({
                    answerState: { [answerId]: SUCCESS },
                    answers
                })

                const timeout = window.setTimeout(() => {
                    if (this.isFinishedQuiz()) {
                        this.setState({
                            isFinished: true
                        })
                    } else {
                        this.setState({
                            activeQuestion: this.state.activeQuestion + 1,
                            answerState: null
                        })
                    }

                    window.clearTimeout(timeout);
                }, 700)

            } else {

                if(!answers[answeringQuestion.id]) {
                    answers[answeringQuestion.id] = ERROR;
                }

                this.setState({
                    answerState: { [answerId]: ERROR },
                    answers
                })
            }
        }
    }

    onRetryClick = () => {
        this.setState({
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            answers: {},
        })
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>

                    {this.state.isFinished
                        ?
                            <FinishedQuiz
                                quiz={this.state.quiz}
                                onRetryClick={this.onRetryClick}
                                answers={this.state.answers}
                            />
                        :
                            <ActiveQuiz
                                quizLength={this.state.quiz.length}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                activeQuestion={this.state.activeQuestion + 1}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClick}
                                answerState={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;