import React, {useState} from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [loginUsername, updateLoginUsername] = useState('');
  const [loginPassword, updateLoginPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: 'http://localhost:8666/login'
    })
    .then(({ data }) => {
      if (data === 'Successfully Authenticated') {
        updateCurrentPage('Homepage')
      } else {
        alert(data)
      }
    })
    .catch(err =>  console.log('ERROR:', err))
  }

  return (
    <>
      <form onSubmit={loginUser}>
        <p>Username</p>
        <input type="text" placeholder="Username" onChange={e => updateLoginUsername(e.target.value)} />
        <p>Password</p>
        <input type='password' placeholder="Password" onChange={e => updateLoginPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  )
}