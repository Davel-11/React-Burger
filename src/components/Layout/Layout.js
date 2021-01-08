import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component  {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    showDrawerHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar clicked={this.showDrawerHandler}></Toolbar>

                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />

                <main className="layout-content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }

};

export default Layout;