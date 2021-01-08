import React from 'react';
import './NagivationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
        <ul className="NagivationItems">
            
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            
            <NavigationItem link="/">Checkout</NavigationItem>
            
        </ul>
    
);

export default navigationItems;