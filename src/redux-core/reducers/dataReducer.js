import { dataActionTypes } from "../actions/dataActions"

const initialState = {
    posts: [],
    todos: [],
    albums: [],
    comments: [],
}

const dataReducer = (state=initialState, action) => {
    switch(action.type){
        case dataActionTypes.SET_POSTS:
            return { ...state, posts: action.payload };
        case dataActionTypes.SET_TODOS:
            return { ...state, todos: action.payload };
        case dataActionTypes.SET_ALBUMS:
            return { ...state, albums: action.payload };
        case dataActionTypes.SET_COMMENTS:
            return { ...state, comments: action.payload };
        case dataActionTypes.DELETE_POST_BY_ID:
            return { 
                ...state,
                posts: state.posts.filter((post) => post.capsule_serial !== action.payload)
                // поверне новий масив з постами, id кожного з яких не = action.payload
            }
        default:
            return state
    }
}

export default dataReducer

// action = {
//     type: //type of needed action,
//     payload: //data
// }