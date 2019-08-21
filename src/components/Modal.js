import React from 'react';
import '../styles/Modal.scss';

const Modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <>
            <div className="modal">
                <h1 className="modal-header">Missing input</h1>
                <div className="modal-main">
                    Please insert the first letter
                </div>
                <div className="modal-footer">
                    <button type="button" className="modal-footer__button" onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </>
    );
}

export default Modal;