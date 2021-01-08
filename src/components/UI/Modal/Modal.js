import React from 'react';
import './Modal.scss'

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (

    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>

        <div className="Modal"
            style={{
                transform: props.show ? 'TranslateY(0)' : "TranslateY(-100vh)",
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>

);

export default modal;