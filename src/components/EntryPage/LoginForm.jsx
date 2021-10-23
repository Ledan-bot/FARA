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
      <form onSubmit={loginUser} className="flex flex-col items-center space-y-10">
        <h2 className="text-4xl text-daBlueGreen">Login</h2>
        <p className="text-daGreenBlue">Username</p>
        <input type="text"  onChange={e => updateLoginUsername(e.target.value)}  className="h-16 w-11/12"/>
        <p className="text-daGreenBlue">Password</p>
        <input type="password"  onChange={e => updateLoginPassword(e.target.value)} className="h-16 w-11/12" />
        <br/>
        <button className="rounded-full py-3 px-6 bg-daGreen hover:bg-daBlue text-gray-800">Sign in</button>
      </form>
    </>
  )
}