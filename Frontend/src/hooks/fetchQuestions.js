import {useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import * as Action from "../slices/questionSlice";

export const useFetchaQuestion = ()=>{
    const dispatch = useDispatch();
    const [getData , setGetData] = useState({
        isLoading : false ,
        apiData : [],
        serverError : null
    });
    useEffect(()=>{
        setGetData((prev)=>({...prev , isLoading:true}));
        async ()=>{
            try {
                const [{questions ,answers }] = await getServerData(
                `http://localhost:${process.env.PORT || 5000}/api/questions`,
                (data) =>data
            );
            if(questions.length > 0){
                setGetData((prev)=> ({...prev , isLoading : false }));
                setGetData((prev)=>({...prev , apiData : questions }));
            }else {
                throw new Error("No Question Available ");
            }
            } catch (error) {
                setGetData((prev)=>({...prev , isLodaing : false}));
                setGetData((prev)=>({...prev , serverError : error.message}));
            }
        }
    }, [dispatch]);

    return [getData , setGetData];
}
export const MoveNextAction = ()=>{
    try {
        dispatch(Action.moveNextAction());
    } catch (error) {
        console.error("Error moving to next questions :", error );
    }
}
export const MovePrevQuestion = ()=>{
    try {
        dispatch(Action.movePrevAction);
    } catch (error) {
        console.error("Error moving to previous question : ", error );
    }
}