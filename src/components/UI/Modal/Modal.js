import React from 'react';
import './Modal.scss'

const modal = (props) => (
    <div className="Modal"
        style={{
            transform: props.show ? 'TranslateY(0)' : "TranslateY(-100vh)",
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;