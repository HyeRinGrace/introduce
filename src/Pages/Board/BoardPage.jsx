import React from 'react'
import {getAuth} from 'firebase/auth';
import app from '../../firebase';

const BoardPage = () => {

    getAuth(app);
  return (
    <div>
        <h3>게시판</h3>
        <input type='text'placeholder='이름'></input>
        <input type='password'placeholder='비밀번호'></input>
    </div>
  )
}

export default BoardPage