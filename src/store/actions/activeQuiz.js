import {CHANGE_ANSWER_STATE, FINISH_QUIZ, NEXT_QUESTION} from "./actionTypes";

export const changeAnswerState = (answerState, answers) => ({type: CHANGE_ANSWER_STATE, answerState, answers});
export const finishQuiz = () => ({type: FINISH_QUIZ});
export const nextQuestion = activeQuestion => ({type: NEXT_QUESTION, activeQuestion});

const isFinishedQuiz = (state) => {
    return state.quiz.length === state.activeQuestion + 1;
};

export const onAnswerClick = answerId => (dispatch, getState) => {
    const state = getState();

    const answeringQuestion = state.quiz[state.activeQuestion];
    const SUCCESS = 'success';
    const ERROR = 'error';
    const answers = {...state.answers};

    if (!state.answerState || (state.answerState[Object.keys(state.answerState)[0]] === ERROR)) {

        if (answeringQuestion.rightAnswerId === answerId) {

            if(!answers[answeringQuestion.id]) {
                answers[answeringQuestion.id] = SUCCESS;
            }

            dispatch(changeAnswerState({ [answerId]: SUCCESS }, answers));

            const timeout = window.setTimeout(() => {
                if (isFinishedQuiz(state)) {
                    dispatch(finishQuiz());
                } else {
                    dispatch(nextQuestion(state.activeQuestion));
                }

                window.clearTimeout(timeout);
            }, 700)

        } else {

            if(!answers[answeringQuestion.id]) {
                answers[answeringQuestion.id] = ERROR;
            }

            dispatch(changeAnswerState({ [answerId]: ERROR }, answers));
        }
    }
};