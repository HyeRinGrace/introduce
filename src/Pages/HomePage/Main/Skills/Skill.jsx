import React, { Fragment } from 'react';
import '../Skills/Skill.css';
import { Container, Row, Col,Badge } from 'react-bootstrap';
import JsImage from '../../../../assets/JsImage.svg';
import CssImage from '../../../../assets/CssImage.svg';
import HtmlImage from '../../../../assets/HtmlImage.svg';
import ReactImage from '../../../../assets/ReactImage.svg';
import GitImage from '../../../../assets/GitHubImage.svg';
import Vercel from '../../../../assets/VercelImage.svg';
import NpmImage from '../../../../assets/NpmImage.svg';
import ReduxImage from '../../../../assets/ReduxImage.svg';
import ReactQueryImage from '../../../../assets/ReactQueryImage.svg';
import FirebaseImage from '../../../../assets/Firebase.svg';
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";
import BootStrap from '../../../../assets/BootStrap.svg'
import Vue from '../../../../assets/VueImage.svg'
import Type from '../../../../assets/TsImage.svg'

const Skill = () => {
  const assets1 = [JsImage, CssImage, HtmlImage, ReactImage, ReduxImage];
  const assets2 = [ReactQueryImage, NpmImage, FirebaseImage,Vercel,GitImage];
  const assets3 = [Vue,Type ];

  return (
    <>
      <Fade cascade={1000} style={{
        fontSize:'30px',
        fontWeight:'bold',
      }}>{"Skill's"}</Fade>
      <Typewriter
        options={{
        strings: ["보유한 기술들 입니다."],
        autoStart: true,
        loop: true,
        delay: 100,
        }}
        style={{ fontSize: "60px" }}
      />

      <Container className='SkillContainer'>
        <span class="badge bg-dark">자주 사용해 봤던</span>
        <Row>
          <Col className='skills'>
            <Container className="d-flex flex-wrap">
              {assets1.map((item, index) => (
                <Fade duration={7000} key={index} className='ImageContainer' xs={12} sm={4} md={4}> 
                  <img className="SkillImages" src={item} alt={`Skill ${index}`} /> 
                </Fade>
              ))}
            </Container>
            <Container className="d-flex flex-wrap" style={{
              paddingBottom:'30px'
            }}> 
              {assets2.map((item, index) => (
                <Fade duration={5000} key={index} className='ImageContainer' xs={12} sm={4} md={4}> 
                  <img className="SkillImages" src={item} alt={`Skill ${index}`} /> 
                </Fade>
              ))}
            </Container>
            
            <span class="badge bg-dark">자주 사용해보지 못했던</span>
            <Container className="d-flex flex-wrap" style={{
              paddingBottom:'30px'
            }}> 
              {assets3.map((item, index) => (
                <Fade duration={5000} key={index} className='ImageContainer' xs={12} sm={4} md={4}> 
                  <img className="SkillImages" src={item} alt={`Skill ${index}`} /> 
                </Fade>
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
