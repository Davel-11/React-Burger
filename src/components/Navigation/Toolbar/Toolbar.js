import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NagivationItems';

const toolbar = (props) => (
    
    <header className="Toolbar">
        
        <div>Menu</div>

        <div className="Logo">
            <Logo/>
        </div>

        <nav className="DesktipOnly">
            <NavigationItems/>
        </nav>
        
    </header>
);

export default toolbar;