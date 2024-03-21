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
  const [loading, setLoading] = useState(false);
  const [errorFromSubmit, setErrorFromSubmit] = useState('');

  const auth = getAuth(app);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(auth.currentUser, {
        displayName: data.email,
        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
      });

      await set(ref(db, `users/${createdUser.user.uid}`), {
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
        text: data.text,
      });

      setIsModalOpen(false);

    } catch (error) {
      console.error(error);
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
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
  }, [auth, dispatch]);

  const handleClose = () =>{
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal show={setIsModalOpen}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className='auth-wrapper'>
              <label htmlFor='email'>email</label>
              <input name='email' type='email' id="email" placeholder='email'
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <p>email을 입력해주세요.</p>}

              <label htmlFor='password'>password</label>
              <input name="password" type='password' id='password' placeholder='비밀번호'
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === 'required' && <p>비밀번호를 입력해주세요</p>}
              {errors.password && errors.password.type === 'minLength' && <p>비밀번호를 4자 이상 만들어주세요</p>}

              

              <label htmlFor='text'>text</label>
              <input type='text' name='text' id='text' placeholder='내용'
                {...register('text', { require: true })}
              />
              {errors.text && errors.text.type === 'required' && <p>텍스트를 입력해주세요.</p>}
              {errorFromSubmit && <p>{errorFromSubmit}</p>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button type='submit' onClick={handleSubmit(onSubmit)} disabled={loading}>
            제출
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BoardModal;
