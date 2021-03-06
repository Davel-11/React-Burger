import React from 'react';
import './BuildControl.scss';

const buildControl = (props) =>  (
    
        <div className="BuildControl">

            <div className="Label">{props.label}</div>

            <button 
                onClick={props.removed} 
                className="Less"
                disabled={props.disabled}
                type="button">
                Less
            </button>

            <button onClick={props.added} className="More">More</button>
            
        </div>
)

export default buildControl;