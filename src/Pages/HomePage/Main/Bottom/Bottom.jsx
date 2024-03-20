import React from 'react'
import '../Bottom/Bottom.css';
import {Container,Col,Row} from 'react-bootstrap';

const Bottom = () => {
  return (
    <Container className='BottomContainer'>
        <Row>
            <Col>
                <p className='bottomFont1'>Copyrigh © 2024 HyeRinKim, Inc.</p>
                <p className='bottomFont2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kdjsanh0217@naver.com</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Bottom