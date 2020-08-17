import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ text }){
    return(
        <h2>{ text }</h2>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired
}