import React, { useEffect, useState } from 'react';
import '../Board/BoardPage.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import BoardModal from './BoardModal/BoardModal';
import { useSelector } from 'react-redux';
import { db } from '../../firebase';
import { onChildAdded, ref } from 'firebase/database';
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const BoardPage = ({ createdUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const userRef = ref(db, 'users');

  useEffect(() => {
    addMessageRoomsListeners();
  }, []);

  const addMessageRoomsListeners = () => {
    const messageArray = [];
    onChildAdded(userRef, dataSnapshot => {
      messageArray.push(dataSnapshot.val());
      setMessages([...messageArray]);
    });
  };

  const renderMessages = () => {
    return (
      messages.length > 0 &&
      messages.map((item, index) => (
        <Col className='MessageBox' key={index}>{item.text}</Col>
      ))
    );
  };

  const renderID = () => {
    return (
      messages.length > 0 &&
      messages.map((item, index) => (
        <Col className='IdBox' key={index}>{item.name}</Col>
      ))
    );
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Fade cascade={1000} style={{
        fontSize:'30px',
        fontWeight:'bold',
      }}>{"Board"}
      </Fade>
      <Typewriter
        options={{
        strings: ["피드백 부탁드립니다! 그리고 제 포트폴리오 봐주셔서 감사합니다."],
        autoStart: true,
        loop: true,
        delay: 100,
        }}
        style={{ fontSize: "60px" }}
      />
    <Container className='BoardContainer'>
      <button onClick={handleModal}>글쓰기</button>
      <Row>
        <Col>
          <div className='IdBox'>{renderID()}</div>
        </Col>
        <Col>
          <div className='MessageBox'>{renderMessages()}</div>
        </Col>
      </Row>
      {isModalOpen && <BoardModal setIsModalOpen={handleModalClose} />}
    </Container>
    </>
  );
};

export default BoardPage;
