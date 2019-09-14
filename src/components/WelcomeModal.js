import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        {/* <div className="modal fade" /> */}
        <div className="modal-overlay">
            <div className="welcome-modal" id="modal">
                <div className="" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="welcome-modal__body">
                        <div className="">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="">
                            <p>
                                Witam na mojej pierwszej stronie internetowej
                        </p>
                            <p>Została ona przygotowana z użyciem następujących technologii</p>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;