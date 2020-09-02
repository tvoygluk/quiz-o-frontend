import {QUIZ_RETRY} from "../actions/actionTypes";

const initialState = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    answers: {},
    quiz: [],
    hadQuizState: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUIZ_RETRY:
            return {
                ...state,
                isFinished: false,
                activeQuestion: 0,
                answerState: null,
                answers: {},
            }
        default:
            return state
    }

}

export default rootReducer;