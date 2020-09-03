import axios from "axios";
import {FETCHED_QUIZZES, PROCESS_QUIZ_ERROR} from "./actionTypes";

export const processQuizError = error => ({type: PROCESS_QUIZ_ERROR, error});

export const fetchedQuizzes = quizzes => ({type: FETCHED_QUIZZES, quizzes});

export const getData = () => async dispatch => {
    try {
        const quiz = await axios.get('https://quiz-o-frontend.firebaseio.com/quiz/-MFvk33VE5f7pDHlCHPt.json');
        dispatch(fetchedQuizzes(quiz.data));
    } catch (error) {
        dispatch(processQuizError(error));
    }
}
