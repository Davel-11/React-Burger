import React from  'react';
import './Button.scss';

const button = (props) => (

    <button
        className={['Button', props.btnType].join(' ')}
        // className="Button Success"
        onClick={props.clicked}
    >
        {props.children}
    </button>
)

export default button;