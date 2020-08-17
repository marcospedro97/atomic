import React from 'react';
import PostCard from '../organisms/PostCard';
import Navbar from '../molecules/NavBar';
import './PostsIndexTemplate.sass'

export default function PostsIndexTemplate({ posts }) {
    return(
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                {
                    posts.map(post => {
                        return(
                            <PostCard post={ post } />
                        );
                    })
                }
            </main>
        </div>
    );
}