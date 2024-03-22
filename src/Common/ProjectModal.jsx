import React, { useState } from 'react';
import { Modal, Button, Row, Col,OverlayTrigger,Tooltip } from 'react-bootstrap';
import '../Common/ProjectModal.css';

const ProjectModal = ({ setShowModal, project }) => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <Modal className='Modal'
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
            <Row className='ImageBox justify-content-center'>
                    <Col xs="auto">            
                         <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <img
                                className='ProjectImage'
                                style={{
                                    width: '400px',
                                    borderRadius: '10px',
                                }}
                                src={project.imageURL}
                                alt="Project Image"
                                />
                        </a>
                    </Col>
                    <p className='ImageInfo'>이미지 클릭 시, 해당 페이지로 이동됩니다.</p>
                </Row>
                <div className='ContextXContainer'>
                    <Row className='ContextBox'>
                        <Col xs={3} style={{ fontWeight: 'bold' }}>사용한 스킬 :</Col>
                        <Col className="skills" xs={6}>{project.skills}</Col>
                    </Row>
                    <Row className='ContextBox'>
                        <Col xs={3} style={{ fontWeight: 'bold' }}>프로젝트 진행중 문제 :</Col>
                        <Col xs={6}>{project.problem}</Col>
                    </Row>
                    <Row className='ContextBox'> 
                        <Col xs={3} style={{ fontWeight: 'bold' }}>해결 방법 :</Col>
                        <Col xs={6}>{project.solution}</Col>
                    </Row>
                </div>
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
