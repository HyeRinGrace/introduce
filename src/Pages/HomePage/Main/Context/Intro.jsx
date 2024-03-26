// Intro.js
import React from 'react';
import { Col } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import '../Context/intro.css';

const Intro = () => {
  return (
    <Col className='NameTag'>
      <Typewriter
        className="Motion"
        options={{
          strings: ["인생은 늘 배움의 연속이다.", "프론트엔드 개발자를 꿈꾸는 김혜린입니다."],
          autoStart: true,
          loop: true,
          delay: 150,
        }}
        style={{ fontSize: "80px" }}
      />
      <br />
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("KIM HYE RIN")
            .pauseFor(1000)
            .start();
        }}
      />
    </Col>
  );
};

export default Intro;
