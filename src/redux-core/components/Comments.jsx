import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppRoutes } from '../../Routing/AppRoutes';
import { dataActions } from '../actions/dataActions';
import { Link, Outlet } from 'react-router-dom';

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.data.comments)

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
                dispatch(dataActions.setComments(res.data));
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            }
        };

        fetchComments();
    }, [dispatch]);

    return (
        <div style={{ backgroundColor: "lightseagreen", padding: "10px" }}>
            <h2>Comments</h2>
            <div style={{display: 'flex'}}>
                <ul>
                    {comments.slice(0, 15).map((comment) => (
                        <li key={comment.id}>
                            <Link to={`/comments/${comment.id}`}>{comment.name}</Link>
                            <p><strong>{comment.email}</strong>: {comment.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Comments;
