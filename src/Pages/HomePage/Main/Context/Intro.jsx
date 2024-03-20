import React from 'react'
import {Col} from 'react-bootstrap'
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <Col className='NameTag' style={{
        width:'100px',
        fontSize:'35px',
        fontWeight:'bolder',
        whiteSpace: 'nowrap'
    }}>
    <Typewriter
        options={{
        strings: ["인생은 항상 배우는 것이다."],
        autoStart: true,
        loop: true,
        delay: 100,
        }}
        style={{ fontSize: "60px" }}
      />
    <br/>
    <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("KIM HYE RIN")
              .pauseFor(1000)
              .start();
          }}
        />
      

    </Col>
  )
}

export default Intro