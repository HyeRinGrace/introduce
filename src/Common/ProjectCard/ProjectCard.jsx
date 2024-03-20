import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import '../../Common/ProjectCard/ProjectCard.css';
import ProjectModal from '../ProjectModal';
import Projects from '../../Pages/HomePage/Main/Projects/ProjectItems';

const ProjectCard = () => {
    const items = Projects.projects;
    const [showModal, setShowModal] = useState(false); // 모달 상태

    return (
        <>
            <Fade cascade={1000} style={{
                fontSize: '30px',
                fontWeight: 'bold',
            }}>{"Project's"}</Fade>

            <Container className='ProjectContainer'>
                <Fade damping={9000}>
                    <Row>
                        {items.map((item) => (
                            <Col key={item.id} md={3} style={{ marginBottom: '20px' }}>
                                <Card>
                                    <Card.Img onClick={() => setShowModal(true)} variant="top" src={item.imageURL} />
                                    <Card.Body>
                                        <Card.Title style={{
                                            fontSize: '13px'
                                        }}>{item.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Fade>
            </Container>

            {/* 모달을 렌더링하고 showModal 상태를 전달 */}
            {showModal && <ProjectModal setShowModal={setShowModal} />}
        </>
    )
}

export default ProjectCard;
