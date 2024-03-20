import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProjectItems from '../Pages/HomePage/Main/Projects/ProjectItems'

const ProjectModal = ({ setShowModal }) => {
    const [modalOpen, setModalOpen] = useState(true);
    const items = ProjectItems.projects[0];

    console.log(items);

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
             
                <Modal.Title>asdasd</Modal.Title>
           
            </Modal.Header>
            <Modal.Body>
                <p>여기는 설명란</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                {/* You can add additional buttons here */}
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal;
