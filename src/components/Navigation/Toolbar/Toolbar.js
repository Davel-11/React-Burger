import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NagivationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    
    <header className="Toolbar">
        
        <div>
            <DrawerToggle clicked={props.clicked} />
        </div>

        <div className="Logo">
            <Logo/>
        </div>

        <nav className="DesktipOnly">
            <NavigationItems/>
        </nav>
        
    </header>
);

export default toolbar;