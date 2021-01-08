import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component  {

    state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
      } ,
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        
        const sum = Object.keys(ingredients).map( obj => {
            return ingredients[obj];
        }).reduce( (prev, next) => {
            return prev + next;
        }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        
        // Inmutable
        const updatedIngedients = {...this.state.ingredients};
        updatedIngedients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngedients });
        this.updatePurchaseState(updatedIngedients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount  <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        
        // Inmutable
        const updatedIngedients = {...this.state.ingredients};
        updatedIngedients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngedients });
        this.updatePurchaseState(updatedIngedients);
    }

    purchaseHander = () => {
        this.setState({purchasing: true});
    }

    render() {

        const disableInfo = {...this.state.ingredients}

        for ( let key in disableInfo ) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
                <Aux>

                    <Modal show={this.state.purchasing}>
                        <OrderSummary  ingredients={this.state.ingredients}></OrderSummary>
                    </Modal>

                    <Burger ingredients={this.state.ingredients} />
                    
                    <BuildControls 
                        ordered={this.purchaseHander}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disableInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        
                     />
                </Aux>
        );  
    }
}

export default BurgerBuilder;

// constructor(props) { 
//     super(props);
//     this.state = {...}
//  }