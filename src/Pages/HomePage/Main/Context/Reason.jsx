import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import './Reason.css';

const Reason = () => {
  return (
    <Container className='IntroduceContainer'>
      <Row className='header'>
      </Row>
      <Row className='RowContainer'>
        <Col xs={3} sm={8} className='Box'>
          <div className='experienceBox'>
            <p className='title'>컴퓨터공학과 졸업</p>
            <p>2014.03 ~2019.07</p>
          </div>
        </Col>

        <Col xs={3} sm={8} className='Box'>
          <div className='experienceBox'>
            <p className='title'>엔글 외주업체 IT회사 QA 팀원</p>
            <p>2019.06 ~2021.06</p>
          </div>
          </Col>
          <Col xs={3} sm={8} className='Box'>
          <div className='experienceBox'>
            <p className='title'>카카오브이엑스 IT회사 QA 팀원</p>
            <p>2021.06 ~2023.09</p>
          </div>
          </Col>
      </Row>
    </Container>
  )
}

export default Reason