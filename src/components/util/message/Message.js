import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import classnames from 'classnames';

export default function Message(props) {
    console.log('props.messages', props.messages)
    const { serverError } = props.messages;
    console.log('serverError', serverError)
    let message;

    if (serverError) {
        message = serverError.message
    }

    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
        </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            {/* {message &&
                <div className="modal fade" id="messageModal" tabindex="-1" role="dialog" aria-labelledby="messageModalTitle" aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className={classnames("modal-content",
                            {
                                // 'alertDangerClass': props.alert.type == 'DANGER',
                                // 'alertInfoClass': props.alert.type == 'INFO',
                                // 'alertSuccessClass': props.alert.type == 'SUCCESS'
                            })}>
                            <div className="modal-body">
                                <h4 className="text-center font-weight-bold m-0 d-inline-block">
                                    {message}
                                </h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-block font-weight-bold" data-dismiss="modal">
                                    OK
        </button>
                            </div>
                        </div>
                    </div>
                </div>
            } */}
        </>
    )
}
