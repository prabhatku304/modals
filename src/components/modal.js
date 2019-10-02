import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const Modal = (props)=>{
    return ReactDOM.createPortal(
        <div>
            Pops is working
        </div>
        ,
        document.querySelector("#modals")
    )
}

export default Modal;