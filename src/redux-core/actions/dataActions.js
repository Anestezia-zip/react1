export const dataActionTypes = {
    SET_POSTS: 'SET_POSTS',
    SET_POST: 'SET_POST',
    SET_TODOS: 'SET_TODOS',
    SET_ALBUMS: 'SET_ALBUMS',
    SET_COMMENTS: 'SET_COMMENTS',
    DELETE_POST_BY_ID: 'DELETE_POST_BY_ID'
}

export const dataActions = {
    setPosts: (posts) => ({type: dataActionTypes.SET_POSTS, payload: posts}),
    setPost: (post) => ({type: dataActionTypes.SET_POST, payload: post}),
    setTodos: (todos) => ({type: dataActionTypes.SET_TODOS, payload: todos}),
    setAlbums: (albums) => ({type: dataActionTypes.SET_ALBUMS, payload: albums}),
    setComments: (comments) => ({type: dataActionTypes.SET_COMMENTS, payload: comments}),
    deletePostById: (id) => ({type: dataActionTypes.DELETE_POST_BY_ID, payload: id})
}

// postActions.js
export const fetchPostById = (postId) => async (dispatch) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await response.json();
        // После получения поста, мы можем отправить его в Redux для хранения
        dispatch(dataActions.setPost(post));
    } catch (error) {
        console.error('Failed to fetch post:', error);
    }
};

// commentActions.js
// export const fetchCommentById = (commentId) => async (dispatch) => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
//         const comment = await response.json();
//         // После получения комментария, мы можем отправить его в Redux для хранения
//         dispatch(dataActions.setComment(comment));
//     } catch (error) {
//         console.error('Failed to fetch comment:', error);
//     }
// };
