import React, {Component} from 'react';
import './Checkout.scss';
import CheckoutSummary from  '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: { }
    }

    componentDidMount() {
        const query = new URLSearchParams( this.props.location.search );

        const ingredients = {};

        for ( let param of query.entries() ) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients})
    }

    checkoutCancelledHandler = () => {
            this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }   

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}> 
                </CheckoutSummary>
            </div>
        )
    }

}

export default Checkout;
