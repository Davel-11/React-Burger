import React from 'react';
import './NagivationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    
        <ul className="NagivationItems">
            
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            
            <NavigationItem link="/orders">orders</NavigationItem>
            
        </ul>
    
);

export default navigationItems;