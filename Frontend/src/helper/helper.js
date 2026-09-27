import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios";

export function attempts_Number(result){
    return result.filter((r)=> r !== undefined ).length;
}

export function earnPoints_Number(result , answers , point ){
    return result
    .map((element, i )=> answers[i] === element )
    .filter((i)=> i)
    .map((i)=> point)
    .reduce((prev,curr)=> prev + curr , 0);

}

export function CheckUserExist({children}){
    const auth = useSelector((state)=> state.result.userId);
    return auth ? children : <Navigate to={"/"} replace={true}></Navigate>
}

export async function getSeverData(url , callback){
    const data = await axios.get(url)?.data;
    return callback ? callback(data) : data;
}