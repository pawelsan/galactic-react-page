import React from 'react';
import '../styles/Modal.scss';

const Modal = (props) => {
    if (!props.show) {
        return null;
    }
    return (
        <>
            <div id="modal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalLabel">Missing input</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Please insert the first letter
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;