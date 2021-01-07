import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.scss';

const layout = ( props ) => (

    <Aux>
        <div>Toolbar, SideDrawer, BackDrip</div>

        <main className="layout-content">
            {props.children}
        </main>
    </Aux>

);

export default layout;