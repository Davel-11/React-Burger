import React, { Component } from 'react';
import './OrderSummary.scss';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component  {

    componentWillUpdate() {
        console.log(' [OrderSummary/*  */] componentWillUpdate');
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map( obj => {
            return <li key={obj}> 
                        <span style={{textTransform: 'capitalize'}}>{obj}</span>  : {this.props.ingredients[obj]} 
                    </li>
        });

        return (
            <Aux>

            <h3> Your order </h3>

            <p> A del Burger with the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>

            <p> Total Price: <strong> Q {this.props.price.toFixed(2)}  </strong> </p>

            <p>Continue with checkout </p>

            <Button btnType="Danger" clicked={this.props.purchaseCanceled} >Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued} >Continue</Button>

        </Aux>
        );
    }

}

export default OrderSummary;