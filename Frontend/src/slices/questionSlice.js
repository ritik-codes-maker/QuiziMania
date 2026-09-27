import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name : "questions",
    initialState : {
        queue : [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state , action)=>{
            let {question , answers } = action.payload;
            return {
                ...state ,
                queue : question,
                answers
            }
        },
        moveNextAction : (state)=>{
            return {
                ...state , 
                trace : state.trace + 1 
            }
        },
        movePrevAction : ()=>{
            return {
                ...state,
                trace : state.trace -1
            }
        },
        resetAllAction : ()=>{
            return {
                queue : [],
                answers : [],
                trace : 0
            }
        }
    }
});

export const {
    startExamAction,
    moveNextAction,
    movePrevAction ,
    resetAllAction
} = questionSlice.actions;

export default questionSlice.reducer;
