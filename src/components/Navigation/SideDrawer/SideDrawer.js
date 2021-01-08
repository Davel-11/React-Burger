import React from 'react';
import './SideDrawer.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NagivationItems';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [ 'SideDrawer', 'Close' ];

    if (props.open) {
        attachedClasses = [ 'SideDrawer', 'Open' ];
    }

    return(

        <Aux>

            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
       
            <div className={attachedClasses.join(' ')}>

                    <div className="Logo">
                        <Logo/>
                    </div>
                    
                    <nav>
                        <NavigationItems />
                    </nav>
            </div>

        </Aux>
    );
};

export default sideDrawer;