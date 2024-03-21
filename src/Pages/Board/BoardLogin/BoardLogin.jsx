import React from 'react'
import {Modal} from 'react-bootstrap'
import app, { db } from '../../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form';

const BoardLogin = () => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(false);
    const [errorFromSubmit,setErrorFromSubmit] = useState("");

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
          setLoading(true);
          await signInWithEmailAndPassword(auth,data.email, data.password);
    
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
  return (
    <Modal.Body>
          <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className='auth-wrapper'>
              <label htmlFor='email'>email</label>
              <input name='email' type='email' id="email" placeholder='email'
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <p>email을 입력해주세요.</p>}

              <label htmlFor='password'>password</label>
              <input name="password" type='text' id='password' placeholder='비밀번호'
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === 'required' && <p>비밀번호를 입력해주세요</p>}
              {errors.password && errors.password.type === 'minLength' && <p>비밀번호를 6자 이상 입력하세요</p>}
            </div>
            <Button variant="secondary" onClick={handleClose}>
            확인
            </Button>

          </form>
        </Modal.Body>
  )
}

export default BoardLogin