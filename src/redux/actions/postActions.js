import { FETCH_POST_REQUEST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actionTypes'; 
import axios from "axios";





export const fetchPostRequestStarted = () => {
    return ({
        type: FETCH_POST_REQUEST_STARTED
    })
}


export const fetchPostSuccess = (data) => {
    return ({
        type: FETCH_POST_SUCCESS,
        payload: data
    })
}

export const fetchPostFailure = (error) => {
    return ({
        type: FETCH_POST_FAILURE,
        payload: error
    })
}



export const fetchPost =()=>{
     return (dispatch) =>{
           dispatch(fetchPostRequestStarted())
           axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
              .then(res=>{
                dispatch(fetchPostSuccess(res.data))
              })
                .catch(err=>{
                    dispatch(fetchPostFailure(err.message))
           })
     }
}