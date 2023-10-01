import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import postReducer from './reducers/postReducer';


const store = createStore(postReducer, applyMiddleware(thunk));

// postReducer()

export default store;


//

// dispatch(fetchPost()); // function 


// postReducer(state , ()=>{})