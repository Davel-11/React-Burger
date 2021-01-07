import React from 'react';
import './BuildControls.scss';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (

    <div className="BuildControls">
        <p>Current Price: <strong> {props.price.toFixed(2)} </strong> </p>
        {
           controls.map( obj => (
                <BuildControl  
                        key={obj.label} 
                        label={obj.label} 
                        added={ () => props.ingredientAdded(obj.type) }
                        removed={ () => props.ingredientRemove(obj.type) }
                        disabled={props.disabled[obj.type]}
                />
           ))
        }
    </div>
);

export default buildControls;