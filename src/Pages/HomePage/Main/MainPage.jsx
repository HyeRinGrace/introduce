import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from './Image/Image';
import Reason from './Context/Reason';
import Intro from './Context/Intro';
import './MainPage.css';
import Nav from '../../Navbar/Nav';
import Banner from '../Banner/Banner';
import Skill from './Skills/Skill';
import Project from './Projects/Project';
import Bottom from './Bottom/Bottom';
import BoardPage from '../../Board/BoardPage';


const MainPage = () => {
    const [banners, setBanners] = useState(false); // 일단 false로 변경

    // 메뉴 선택 시, 변경해주는 영역
    const [showSkills, setShowSkills] = useState(false); // Skills 컴포넌트 출력 상태 추가
    const [showProject,setShowProject] = useState(false); //프로젝트 컴포넌트 
    const [showBoard,setShowBoard] = useState(false);

    const bannerSetTime = () => {
        setTimeout(() => {
            setBanners(false);
        }, 4000);
    };

    useEffect(() => {
        bannerSetTime();
    }, []);

    const handleShowSkills = () => {
        setShowSkills(true);
        setShowProject(false);
        setShowBoard(false);
    };

    const handleShowProject = () => {
        setShowSkills(false);
        setShowProject(true);
        setShowBoard(false);
    };

    const handleShowBoard = () => {
        setShowSkills(false);
        setShowProject(false);
        setShowBoard(true);
    };

    return (
        <>
            {banners === true ? (
                <Banner />
            ) : (
                <>
                    <Nav setShowSkills={setShowSkills} setShowProject={setShowProject} setShowBoard={setShowBoard} />
                    <Container className="MainContainer">
                        <Row>
                            <Col className="IntroContainer" xs={12} md={8}>
                                {showSkills === false && showProject === false && showBoard === false ? (
                                    <>
                                        <Intro />
                                        <Reason />
                                    </>
                                ) : showSkills === true ? (
                                    <Skill />
                                ) : showProject === true ? (
                                    <Project />
                                ) : (
                                    <BoardPage />
                                )}
                            </Col>
                            <Col xs={6} md={4}>
                                <Image />
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
            <Bottom/>
        </>
    );
};

export default MainPage;
