import axios from "axios";
import { dataActions } from "../redux-core/actions/dataActions";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',  
})

export const PostServices = {
    getAlbums: async (dispatch) => {
        try {
            let res = await instance.get('albums');
            dispatch(dataActions.setAlbums(res.data));
        } catch {}
    },
    getTodos: async (dispatch) => {
        try {
            let res = await instance.get('todos');
            dispatch(dataActions.setTodos(res.data));
        } catch {}
    },
    getComments: async (dispatch) => {
        try {
            let res = await instance.get('comments');
            dispatch(dataActions.setComments(res.data));
        } catch {}
    }
}