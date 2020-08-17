import React from 'react';
import PropTypes from 'prop-types';

export default function PostDate({ text }){
    return(
        <h4>{ text }</h4>
    );
};

PostDate.propTypes = {
    text: PropTypes.string.isRequired
}