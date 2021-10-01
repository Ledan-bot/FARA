import React, { useState } from 'react'
import axios from 'axios';

export default function CreateAccount() {
  const [Username, updateUsername] = useState('');
  const [Password, updatePassword] = useState('');
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [email, updateEmail] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      data: {
        username: Username,
        password: Password,
        firstName: firstName,
        lastName: lastName,
        email: email
      },
      withCredentials: true,
      url: 'http://localhost:8666/register'
    })
    .then(res => console.log(res))
    .catch(err => console.log('ERROR:', err))
  }

  return (
    <>
      <form className="flex flex-col items-center w-full" onSubmit={registerUser}>
        <p className="text-gray-300">New Username:</p>
        <input type='text' onChange={e => updateUsername(e.target.value)} className="w-11/12"/>
        <p className="text-gray-300">New Password:</p>
        <input type="text" onChange={e => updatePassword(e.target.value)} className="w-11/12"/>
        <p className="text-gray-300">First Name:</p>
        <input type="text" onChange={e => updateFirstName(e.target.value)} className="w-11/12"/>
        <p className="text-gray-300">Last Name:</p>
        <input type="text" onChange={e => updateLastName(e.target.value)} className="w-11/12"/>
        <p className="text-gray-300">Email:</p>
        <input type="text" onChange={e => updateEmail(e.target.value)} className="w-11/12"/>
        <br></br>
        <button type="submit" className="rounded-full py-3 px-6 bg-gray-300 hover:bg-purple-700 text-gray-900">Create Account</button>
      </form>
    </>
  )
}