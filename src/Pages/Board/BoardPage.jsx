import React, { useEffect, useState } from 'react';
import '../Board/BoardPage.css';
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'; // Pagination 추가
import BoardModal from './BoardModal/BoardModal';
import { db } from '../../firebase';
import { onChildAdded, ref } from 'firebase/database';
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const BoardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [messagesPerPage] = useState(5); // 페이지당 메시지 수 상태 추가
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

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  const renderBoarderUserInfo = () => {
    return (
      currentMessages.length > 0 &&
      currentMessages.map((item, index) => (
        <Col key={index}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className='indexBox'>{index + 1}</div>
            <span className='emailBox'>
              <Image src={item.image} style={{ width: '30px', marginRight: '10px', borderRadius:'40px' ,padding:'5px' }} />
              {item.name}
            </span>
            <div className='userBox'>{item.text}</div>
          </div>
        </Col>
      ))
    );
  };

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber); // 페이지를 변경하는 함수

  return (
    <>
      <Fade cascade={1000} style={{
        fontSize: '30px',
        fontWeight: 'bold',
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
      <div className="writeBtn">
        <img className="pencel" src='https://cdn-icons-png.flaticon.com/512/3394/3394365.png' onClick={handleModal} />
      </div>
      <Container className='BoardContainer'>
        <Row>
          <Col>{renderBoarderUserInfo()}</Col>
        </Row>
        {isModalOpen && <BoardModal setIsModalOpen={handleModalClose} />}
        <Pagination className='pagination'>
          {[...Array(Math.ceil(messages.length / messagesPerPage))].map((_, index) => (
            <Pagination.Item key={index} onClick={() => paginate(index + 1)} active={index + 1 === currentPage}>
              {index + 1}
              
            </Pagination.Item>
          ))}
          
        </Pagination>
      </Container>
    </>
  );
};

export default BoardPage;
