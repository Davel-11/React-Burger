import React from 'react';
import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transIngre = Object.keys(props.ingredients).map( obj => {
        
        return [...Array( props.ingredients[obj])].map( (_, i) => {
            
            return <BurgerIngredient key={obj+i} type={obj} />

        })
    }).reduce( ( prev, next ) => {
        return prev.concat(next);
    }, [] );

    console.log(transIngre);

    if(transIngre.length === 0) {
        transIngre = <p> Please add Ingre </p>
    }

    return (
        <div className="Burger" >
                <BurgerIngredient type="bread-top" />
                    {transIngre}
                <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;