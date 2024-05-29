import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCommentById, fetchPostById } from '../actions/dataActions';

const CommentDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const comment = useSelector((state) => state.data.comments.find(c => c.id === parseInt(id)));
    // const post = useSelector((state) => state.data.posts.find(p => p.id === comment?.postId)); // Убедитесь, что используете ?. для избежания ошибок, если comment пустой
    const post = useSelector((state) => state.data.post)

    useEffect(() => {
        if (comment) {
            dispatch(fetchPostById(comment.postId));
        }
    }, [dispatch, comment]);

    console.log('Comment:', comment);
    console.log('Post:', post);

    // useEffect(() => {
    //     if (!comment) {
    //         dispatch(fetchCommentById(id));
    //     }
    // }, [dispatch, comment, id]);

    return (
        <div>
            <h1>Comment Detail</h1>
            {comment && (
                <div>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </div>
            )}
            {post && (
                <div>
                    <h3>Post</h3>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default CommentDetail;
