import {combineReducers , configureStore} from '@reduxjs/toolkit';
import answerSlice from "../slices/answerSlice";
import questionSlice from "../slices/questionSlice";
const rootReducer = combineReducers({
    questions : questionSlice ,
    answers : answerSlice
})

export default configureStore({reducer : rootReducer });