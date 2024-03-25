import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import app, { db } from '../../../firebase';
import md5 from 'md5';
import { ref, set } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/userSlice';
import './BoardModal.css';

const BoardModal = ({ setIsModalOpen }) => {
  const [loading, setLoading] = useState(false); // 제출 버튼 상태값
  const [errorFromSubmit, setErrorFromSubmit] = useState(''); // 에러메세지에 대한 상태값

  const auth = getAuth(app); // data 베이스 연동하기 위해 firebase.js 에서 가져옴
  const { register, formState: { errors }, handleSubmit } = useForm(); // 유효성 검사를 위해 useForm 사용
  const dispatch = useDispatch(); // redux 사용을 위해 dispatch 선언

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // firebase에 이메일과 패스워드로 인증하겠다.
      const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);
      
      // update 할것들 (data 비어있는 것들)
      await updateProfile(auth.currentUser, {
        displayName: data.email,
        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
      });

      // db에 세팅해주는 작업 (데이터 베이스에 정보 저장)
      await set(ref(db, `users/${createdUser.user.uid}`), {
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
        text: data.text,
      });
      // 모달 닫기
      setIsModalOpen(false);

    } catch (error) {
      console.error(error);
      setErrorFromSubmit(error.message);
      // 3000 = 3초가 지나면 에러메세지 사라지게
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  // 모달이 마운트 될때, useEffect를 통해 변화를 감지해줌(옵저버 감시자역할 (onAuthStateChanged))
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { //Firebase에서는   Auth 서비스를 따로 두어서  그걸 통해서 훨씬 강한 인증과 Oauth(소셜 로그인)등 여러  가지 방법으로 로그인 하는걸 쉽게 구현해 두어서  Auth 서비스와  User 데이테베이스 모두에 정보를 넣어주어야 한다. onAuthStateChanged 함수의 인자에는 사용자의 인증 상태가 바뀔 때 호출하고 싶은 콜백 함수를 넣습니다. 콜백 함수를 등록하면 앞으로 인증 상태가 바뀔 때마다 매번 이 콜백 함수를 호출한다.
      if (user) {
        dispatch( // dispatch를 이용하여 setUser에 다시 정보를 넣어줌
          setUser({
            uid: user.uid,
            displayName: user.displayName ? user.displayName : '',
            photoURL: user.photoURL ? user.photoURL : '',
            text: user.text ? user.text : ''
          })
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, dispatch]); //auth와 dispatch의 값이 변경될때 유의해달라

  const handleClose = () =>{
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal show={setIsModalOpen} onHide={setIsModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className='auth-wrapper'>
              <label htmlFor='email'>이메일</label>
              <input name='email' type='email' id="email" placeholder='이메일을 입력해주세요.'
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <p style={{color:'red', fontSize:'13px'}}>email을 입력해주세요.</p>}

              <label htmlFor='password'>비밀번호</label>
              <input name="password" type='password' id='password' placeholder='비밀번호를 입력해주세요.'
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === 'required' && <p style={{color:'red', fontSize:'13px'}}>비밀번호를 입력해주세요</p>}
              {errors.password && errors.password.type === 'minLength' && <p style={{color:'red', fontSize:'13px'}}>비밀번호를 6자 이상 만들어주세요</p>}

              

              <label htmlFor='text'>내용</label>
              <input type='text' name='text' id='text' placeholder='내용을 입력해주세요.'
                {...register('text', { require: true, minLength:1 })}
              />
              {errors.text && errors.text.type === 'required' && <p>텍스트를 입력해주세요.</p>}
              {errors.text && errors.text.type === 'minLength'&& <p>텍스트를 입력해주세요.</p>}
              {errorFromSubmit && <p>{errorFromSubmit}</p>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button type='submit' onClick={handleSubmit(onSubmit)} disabled={loading}>
            등록
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BoardModal;
