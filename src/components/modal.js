import React,{Component} from 'react';
import ReactDOM from 'react-dom';

const Modal = (props)=>{
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active ">
            <div className="ui standard modal visible active">
              
                    <div className="header">
                        Delete
                    </div>
                    <div className=" content">
                       <p>hfhkkf jfkjkj</p> deleted succesfully
                    </div>
           
            </div>
           
        </div>,
        document.querySelector("#modal")
        
    )
}

export default Modal;