import React, { useState } from 'react';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import '../../Common/ProjectCard/ProjectCard.css';
import ProjectModal from '../ProjectModal';
import Projects from '../../Pages/HomePage/Main/Projects/ProjectItems';
import Typewriter from "typewriter-effect";

const ProjectCard = () => {
    const items = Projects.projects;
    const [showModal, setShowModal] = useState(false); // 모달 상태
    const [selectedProject, setSelectedProject] = useState(null); // 선택된 프로젝트
    const [imageLoading, setImageLoading] = useState(true); // 이미지 로딩 상태

    // 클릭한 카드의 정보를 선택된 프로젝트로 설정하는 함수
    const handleCardClick = (project) => {
        setSelectedProject(project);
        setShowModal(true); // 모달 열기
    };

    return (
        <>
            <Fade cascade={1000} style={{
                fontSize: '30px',
                fontWeight: 'bold',
            }}>{"Project's"}</Fade>
            <Typewriter
                options={{
                strings: ["진행했던 프로젝트 입니다."],
                autoStart: true,
                loop: true,
                delay: 100,
                }}
            />

            <Container className='ProjectContainer'>
                <Fade cascade={9000}>
                    <Row>
                        {items.map((item) => (
                            <Col key={item.id} md={3} style={{ marginBottom: '20px' }}>
                                <Card className='Card'>
                                    {imageLoading && <Spinner animation="border" />}
                                    <Card.Img
                                        onClick={() => handleCardClick(item)}
                                        variant="top"
                                        src={item?.imageURL}
                                        onLoad={() => setImageLoading(false)} // 이미지 로드 성공 시 상태 업데이트
                                        onError={() => setImageLoading(false)} // 이미지 로드 실패 시 상태 업데이트
                                    />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px' }}>{item?.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Fade>
            </Container>
            
            {/* 모달 열기 및 선택된 프로젝트 정보 전달 */}
            {showModal && selectedProject && <ProjectModal setShowModal={setShowModal} project={selectedProject} />}
        </>
    );
};

export default ProjectCard;
