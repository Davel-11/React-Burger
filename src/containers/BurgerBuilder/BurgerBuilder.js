import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSumary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component  {

    state = {
      ingredients: {}, 
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }

    componentDidMount() {

        axios.get('https://react-davel-db-default-rtdb.firebaseio.com/ingredients.json').then ( resp => {
            
             this.setState({ ingredients: resp.data });

        }).catch( error => {
                this.setState({error: true});
        });
        
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

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});   
    }

    purchaseContinueHandler = () => {

        this.setState({ loading: true });

        // alert('You have continued! ');
        const orderObj = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Davel AG',
                address: 'Germany'
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', orderObj).then( resp => {

            this.setState({ loading: false, purchasing: false  });
            console.log('Response is ', resp)

        }).catch( error => {
            
            console.log('Error is', error ) ;
            this.setState({ loading: false, purchasing: false });

        });

    }

    render() {

        const disableInfo = {...this.state.ingredients}

        for ( let key in disableInfo ) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        let orderSummary = {};

        let burger =  this.state.error ? <p>Ing cant not be loaded!</p> :  <Spinner></Spinner> ;

        if ( this.state.ingredients ) {

            burger = (
                <Aux>
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

            orderSummary =  <OrderSummary  
                                ingredients={this.state.ingredients}
                                purchaseCanceled={this.purchaseCancelHandler}
                                purchaseContinued={this.purchaseContinueHandler}
                                price={ this.state.totalPrice}>
                            </OrderSummary>
        }
        
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
                <Aux>

                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                        {orderSummary}
                    </Modal>

                    {burger}

                </Aux>
        );  
    }
}

export default withErrorHandler(BurgerBuilder,  axios);

// constructor(props) { 
//     super(props);
//     this.state = {...}
//  }