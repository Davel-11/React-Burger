import React from 'react';
import './OrderSummary.scss';

import Aux from '../../../hoc/Aux';

import Button from '../../UI/Button/Button';


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

            <p> Total Price: <strong> Q {props.price.toFixed(2)}  </strong> </p>

            <p>Continue with checkout </p>

            <Button btnType="Danger" clicked={props.purchaseCanceled} >Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued} >Continue</Button>

        </Aux>
    )

}

export default orderSummary;