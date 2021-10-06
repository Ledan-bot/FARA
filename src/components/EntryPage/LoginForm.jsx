import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
  const [loginUsername, updateLoginUsername] = useState('');
  const [loginPassword, updateLoginPassword] = useState('');

  let history = useHistory();

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
    .then(({data}) => {
      console.log('Data:', data)
      if (data === 'Successfully Authenticated') {
        history.push('/search')
      } else {
        alert(data)
      }
    })
    .catch(err =>  console.log('ERROR:', err))
  }

  return (
    <>
      <form onSubmit={loginUser} className="flex flex-col items-center">
        <p className="text-gray-300">Username</p>
        <input type="text" placeholder="Username" onChange={e => updateLoginUsername(e.target.value)}  className="w-11/12"/>
        <p className="text-gray-300">Password</p>
        <input type='password' placeholder="Password" onChange={e => updateLoginPassword(e.target.value)} className="w-11/12" />
        <br/>
        <button className="rounded-full py-3 px-6 bg-gray-300 hover:bg-purple-700 text-gray-800">Login</button>
      </form>
    </>
  )
}