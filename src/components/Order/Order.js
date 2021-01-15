import React from 'react';
import './Order.scss';

const order = (props) => {

    const ingredients = [];

    for (let item in props.ingredients ) {
        ingredients.push({
            name: item,
            amount: props.ingredients[item]
        });
    }

    const output = ingredients.map( obj => {
        return <span key={obj.name}>{obj.name} ({obj.amount}) </span>
    });

    return (
        <div className="Order">

            <p> Ingredients: {output} </p>
            <p> Price: <strong> { props.price.toFixed(2) } </strong>  </p>

        </div>
    )
};

export default order;