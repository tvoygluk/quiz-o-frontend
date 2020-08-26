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
                rightAnswerId: 4,
                question: 'Что выведет консоль?',
                answers: [
                    {text: '10', id: 1},
                    {text: '91', id: 2},
                    {text: '"4321"', id: 3},
                    {text: '"91"', id: 4}
                ],
            },
            {
                id: 2,
                rightAnswerId: 3,
                question: 'Что выведет консоль?',
                answers: [
                    {text: '10', id: 1},
                    {text: 'function', id: 2},
                    {text: '1', id: 3},
                    {text: 'TypeError', id: 4}
                ],
            },
            {
                id: 3,
                rightAnswerId: 4,
                question: 'Что выведет консоль?',
                answers: [
                    {text: '4', id: 1},
                    {text: '3', id: 2},
                    {text: '2', id: 3},
                    {text: 'undefined', id: 4}
                ],
            },
            {
                id: 4,
                rightAnswerId: 2,
                question: 'В каком порядке выведутся логи?',
                answers: [
                    {text: '0231', id: 1},
                    {text: '0213', id: 2},
                    {text: '1302', id: 3},
                    {text: '0123', id: 4}
                ],
            },
            {
                id: 5,
                rightAnswerId: 1,
                question: 'Что выведет консоль?',
                answers: [
                    {text: '[AsyncFunction: bar]', id: 1},
                    {text: 'foo', id: 2},
                    {text: '[AsyncFunction: foo]', id: 3},
                    {text: 'bar', id: 4}
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