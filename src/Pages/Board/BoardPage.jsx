import React, { useEffect, useState } from 'react';
import '../Board/BoardPage.css';
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap'; // Pagination 추가
import BoardModal from './BoardModal/BoardModal';
import { db } from '../../firebase';
import { onChildAdded, ref } from 'firebase/database';
import { Fade } from "react-awesome-reveal";
import Typewriter from "typewriter-effect";

const BoardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 오픈 상태 함수
  const [messages, setMessages] = useState([]); //message를 담을 배열 상태 함수 선언
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [messagesPerPage] = useState(5); // 페이지당 메시지 수 상태 추가
  const userRef = ref(db, 'users'); // ref 참조 (db를, '어떤 데이터베이스')

  useEffect(() => {
    addMessageRoomsListeners();
  }, []);

  // addMessageRoomsListeners는 데이터베이스에 있는 값들을 가져오는 함수이다.
  const addMessageRoomsListeners = () => {
    const messageArray = []; // 빈 배열을 하나 만들어주고, 이유 (본질적인 배열에 영향을 없게 하기 위해서)
    onChildAdded(userRef, dataSnapshot => { //onChildAdded와 dataSnapshot(firebase 함수) 를 통해 빈배열에 push 해준다. 무엇을? 데이터베이스 value값을
      messageArray.push(dataSnapshot.val());
      setMessages([...messageArray]); // 그리고, 얕은 복사를 통해 넣어준다. 
    });
  };

  // 여기는 페이지 네이션 부분
  const indexOfLastMessage = currentPage * messagesPerPage; //마지막 페이지
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage; //첫번째 페이지
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage); //현재페이지

  //화면에 render해줄 함수 배열로 데이터를 받았으니 우리는 map을 통하여 return해준다.
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

  // 모달 오픈 함수
  const handleModal = () => {
    setIsModalOpen(true);
  };

  // 모달 클로즈 함수
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
