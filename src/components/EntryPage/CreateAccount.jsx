import React, { useState } from 'react'
import axios from 'axios';

export default function CreateAccount() {
  const [registerUsername, updateRegisterUsername] = useState('');
  const [registerPassword, updateRegisterPassword] = useState('');
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [email, updateEmail] = useState('');

  const registerUser = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
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
      <form className="flex flex-col items-center w-full">
        <p className="text-gray-300">New Username:</p>
        <input type='text' onChange={e => updateRegisterUsername(e.target.value)} className="w-full"/>
        <p className="text-gray-300">New Password:</p>
        <input type="text" onChange={e => updateRegisterPassword(e.target.value)} className="w-full"/>
        <p className="text-gray-300">First Name:</p>
        <input type="text" onChange={e => updateFirstName(e.target.value)} className="w-full"/>
        <p className="text-gray-300">Last Name:</p>
        <input type="text" onChange={e => updateLastName(e.target.value)} className="w-full"/>
        <p className="text-gray-300">Email:</p>
        <input type="text" onChange={e => updateEmail(e.target.value)} className="w-full"/>
      </form>
    </>
  )
}