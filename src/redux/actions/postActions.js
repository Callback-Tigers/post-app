import { FETCH_POST_REQUEST_STARTED, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from './actionTypes'; 
import axios from "axios";





export const fetchPostRequestStarted = () => {
      console.log("Place 3b")
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
     return async (dispatch) =>{
           console.log("Place 3")
           dispatch(fetchPostRequestStarted())
           console.log("Place 3a")
           try{
           const responce = await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
                console.log("Place 4")
                dispatch(fetchPostSuccess(responce.data))

           }
              catch(err){
                console.log("Place 5")
                dispatch(fetchPostFailure(err.message))
           }

           console.log("Place 6")
             
               
                    
           
     }
}