import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.scss';
import axios from  '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: ''
            },

            loading: false
    };

    orderHandler = (event) => {

        event.preventDefault();

        this.setState({ loading: true });

        // alert('You have continued! ');
        const orderObj = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Davel AG',
                address: 'Germany'
            },
            deliveryMethod: 'Fastest'
        }

        axios.post('/orders.json', orderObj).then( resp => {

            this.setState({ loading: false  });
            this.props.history.push('/');
            console.log('Response is ', resp)

        }).catch( error => {
            
            console.log('Error is', error ) ;
            this.setState({ loading: false });

        });
    }

    render() {

        let form = (
                     <form>
                        <input type="text" name="name" placeholder="Your name" />
                        <input type="email" name="email" placeholder="Your email" />
                        <input type="text" name="street" placeholder="Your street" />
                        <input type="text" name="postal" placeholder="Your postal" />

                        <Button
                            btnType="Success"
                            clicked={this.orderHandler}>
                            Order
                        </Button>
                    </form>
        );

        if (this.state.loading) {
            form = <Spinner/>
        } 

        return (
            <div  className="ContactData">

                 <h4>Enter your Data</h4>

                {form}

            </div>
        )
    }

}

export default ContactData;