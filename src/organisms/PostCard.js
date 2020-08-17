import React from 'react';
import PropTypes from 'prop-types';
import TagsComponent from '../molecules/TagsComponent';
import Title from '../atoms/postCard/Title';
import SubTitle from '../atoms/postCard/SubTitle';
import PostDate from '../atoms/postCard/PostDate';
import './postCard.sass';

export default function PostCard({ post }) {
  return (
    <article>
      <div class="card_content">
        <PostDate text={ post.date }/>
        <Title text={ post.title } />
        <SubTitle text={ post.subtitle } />
        <TagsComponent tags={ post.tags } />
      </div>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}