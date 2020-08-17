import React from 'react';
import PropTypes from 'prop-types';
import './TagText.sass'

export default function TagText({ text }){
    return(
        <h4>{ `${text}` }</h4>
    );
};

TagText.propTypes = {
    text: PropTypes.string.isRequired
}