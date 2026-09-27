import { createSlice } from "@reduxjs/toolkit";

export const answerSlice = createSlice({
    name : "answer",
    initialState : {
        userId : null ,
        result : []
    },
    reducers : {
        setUserId : (state , action)=>{
            state.userId = action.payload;
        },
        pushResultAction : (state , action )=>{
            state.result.push(action.payload);
        },
        updateResultAction : ()=>{
            const { trace , checked } = action.payload;
            state.result[trace] = checked;
        },
        resetResultAction : ()=>{
            return {
                userId : null,
                result : []
            }
        }
    }
});

export const {
    setUserId ,
    pushResultAction,
    resetResultAction ,
    updateResultAction
} = answerSlice.actions;

export default answerSlice.reducer;
