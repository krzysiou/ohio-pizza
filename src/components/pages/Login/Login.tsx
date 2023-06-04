import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { LoginStyled } from './Login.styles';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = useCallback((setState: Dispatch<SetStateAction<string>>) => (event: React.FormEvent<HTMLInputElement>) => {
    setState(event.currentTarget.value);
  }, []);

  const handleClick = useCallback(async () => {
    const body = {
      username,
      password
    };

    try {
      const { data } = await axios.post('http://localhost:3001/admin/login', body);

      if(data) {
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
      } 
    } catch (error) {
      console.log(error);
    }

  }, [username, password]);

  return (
    <LoginStyled className='login'>
      <div className='login-container'>
        <form action="">
          <div className='input-fields'>
            <div className='input-bundle'>
              <p>Username</p>
              <input type="text" value={username} className='username' placeholder='johndoe' onChange={handleChange(setUsername)} />
            </div>
            <div className='input-bundle'>
              <p>Password</p>
              <input type="password" value={password} className='password' onChange={handleChange(setPassword)} />
            </div>
          </div>
          <button type="button" className='submit' onClick={handleClick}>Log In</button>
        </form>
      </div>
    </LoginStyled>
  );
};

export { Login };
