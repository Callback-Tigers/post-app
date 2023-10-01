import React,{useEffect} from "react";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
// import { fetchPostFailure, fetchPostRequestStarted, fetchPostSuccess } from "../redux/actions/postActions";
import {fetchPost} from "../redux/actions/postActions";

const Post = () => {

    const {loader, data, error} = useSelector(state => state);
    console.log("Place 7", data)

    const dispatch = useDispatch();

    useEffect(()=>{
        
        console.log("Place 1")
        dispatch(fetchPost());
        console.log("Place 2")
           
        
        
    },[dispatch])


    return(
        <div>
               {
                data && data.map(post => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
               }
        </div>
    )
}

export default Post;



// dispatch(fetchPostRequestStarted()); 
              // dispatching action
              // dispatch({type: "FETCH_POST_REQUEST_STARTED"});
              
        //  async function getPosts(){
        //     try{
        //        const posts =  await axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        //        dispatch(fetchPostSuccess(posts.data));
        //     }
        //     catch(err){
        //         dispatch(fetchPostFailure(err.message));
        //     }
        // }

        // getPosts();