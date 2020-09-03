import {
    CHANGE_ANSWER_STATE,
    FETCHED_QUIZZES,
    FINISH_QUIZ,
    NEXT_QUESTION,
    PROCESS_QUIZ_ERROR,
    QUIZ_RETRY
} from "../actions/actionTypes";

/* answerState: { [id]: 'success' } либо answerState: { [id]: 'error' } */
const initialState = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    answers: {},
    quiz: [],
    hadQuizState: false,
    error: null,
}

const handlers = {

    [QUIZ_RETRY]: state => ({
        ...state,
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        answers: {},
    }),

    [PROCESS_QUIZ_ERROR]: (state, action) => ({
        ...state,
        hadQuizState: false,
        error: action.error
    }),

    [FETCHED_QUIZZES]: (state, action) => ({
        ...state,
        hadQuizState: true,
        quiz: action.quizzes
    }),

    [CHANGE_ANSWER_STATE]: (state, action) => ({
        ...state,
        answerState: action.answerState,
        answers: action.answers
    }),

    [FINISH_QUIZ]: state => ({
        ...state,
        isFinished: true
    }),

    [NEXT_QUESTION]: (state, action) => ({
        ...state,
        answerState: null,
        activeQuestion: action.activeQuestion + 1,
    }),

    DEFAULT: state => state
}

const rootReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

export default rootReducer;