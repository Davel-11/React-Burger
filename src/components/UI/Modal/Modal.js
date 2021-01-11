import React, { Component } from 'react';
import './Modal.scss'

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate( nextProps, nextState ) {

        if ( nextProps.show !== this.props.show || nextProps.children !== this.props.children ) {
            return true;
        } else {
            return false;
        }

    }

    componentWillUpdate() {
        console.log(' [Modal]  componentWillUpdate');
    }


    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        
                <div className="Modal"
                    style={{
                        transform: this.props.show ? 'TranslateY(0)' : "TranslateY(-100vh)",
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }


};

export default Modal;