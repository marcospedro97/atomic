import React, { useState, useEffect } from 'react';
import PostsIndexTemplate from '../templates/PostsIndexTemplate';
import api from '../services/api';

export default function PostsIndex() {
    const [ posts, setPosts ] = useState([]);
    
    useEffect(() =>{
        api.get('posts').then(response =>{
            setPosts(response.data);
        });
    }, []);

    return (
        <PostsIndexTemplate posts={ posts }/>
    );
};