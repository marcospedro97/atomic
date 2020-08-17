import React from 'react';
import PropTypes from 'prop-types';

export default function SubTitle({ text }){
    return(
        <h3>{ text }</h3>
    );
};

SubTitle.propTypes = {
    text: PropTypes.string.isRequired
};