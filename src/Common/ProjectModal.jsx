import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProjectModal = ({ setShowModal, project }) => {
    const [modalOpen, setModalOpen] = useState(true);

    console.log(project)

    return (
        <Modal
            show={modalOpen}
            onHide={() => setShowModal(false)}
            ariaHideApp={false}
            contentLabel="Project Modal"
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img style={{
                  width:'800px',
                }}src={project.imageURL}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectModal;
