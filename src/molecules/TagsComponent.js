import React from 'react';
import PropTypes from 'prop-types';
import { FiTag } from 'react-icons/fi'
import TagText from '../atoms/postCard/TagText'
import './TagsComponent.sass';

export default function TagsComponent({ tags }){
  return (
    <div class='tag_component'>
      <FiTag />
      {
        tags.map(t => {
          return(
            <TagText text={t} />
          );
        })
      }
    </div>
  );
};

TagsComponent.propTypes = {
  tags: PropTypes.array.isRequired
};