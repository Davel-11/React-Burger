import React, { Component } from 'react'
import './Orders.scss';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state = {   
        orders: [],
        loading: true
    };

    componentDidMount() {

        axios.get('/orders.json').then( resp => {

            const tempArray = [];

            for ( let key in resp.data ) {
                tempArray.push( { ...resp.data[key], id: key }  );
            }

            this.setState({loading: false, orders: tempArray  });

        }).catch( err => {

            this.setState({loading: false});

        });

    }

    render() {

        return(
            <div className="Orders">
                {
                    this.state.orders.map( mapObj => {
                        return <Order 
                            key={mapObj.id} 
                            ingredients={mapObj.ingredients}
                            price={+mapObj.price}>
                            </Order>
                    })
                }
            </div>
        );

    }

}

export default withErrorHandler(Orders, axios);