import React from 'react';
import './OrderSummary.scss';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map( obj => {
        return <li key={obj}> 
                    <span style={{textTransform: 'capitalize'}}>{obj}</span>  : {props.ingredients[obj]} 
                </li>
    });

    return (
        <Aux>

            <h3> Your order </h3>

            <p> A del Burger with the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>

            <p>Continue with checkout </p>

        </Aux>
    )

}

export default orderSummary;