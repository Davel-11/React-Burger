import React from 'react';
import './SideDrawer.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NagivationItems';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    return(

        <Aux>

            <Backdrop show></Backdrop>
       
            <div className="sideDrawer">

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