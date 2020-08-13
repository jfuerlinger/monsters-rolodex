import React from 'react';

import './message.styles.css';

export const Message = (props) => (
    <div className="message">
        <h2>{props.title}</h2>
        <p> {props.message}</p>
    </div>
)