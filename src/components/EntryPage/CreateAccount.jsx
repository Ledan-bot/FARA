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
      <form className="flex flex-col space-y-4 items-center w-full" onSubmit={registerUser}>
        <p className="text-daGreenBlue">New Username:</p>
        <input type='text' onChange={e => updateUsername(e.target.value)} className="w-11/12"/>
        <p className="text-daGreenBlue">New Password:</p>
        <input type="text" onChange={e => updatePassword(e.target.value)} className="w-11/12"/>
        <p className="text-daGreenBlue">First Name:</p>
        <input type="text" onChange={e => updateFirstName(e.target.value)} className="w-11/12"/>
        <p className="text-daGreenBlue">Last Name:</p>
        <input type="text" onChange={e => updateLastName(e.target.value)} className="w-11/12"/>
        <p className="text-daGreenBlue">Email:</p>
        <input type="text" onChange={e => updateEmail(e.target.value)} className="w-11/12"/>
        <br></br>
        <button type="submit" className="rounded-full py-3 px-6 bg-daGreen hover:bg-daBlue text-gray-800">Sign Up</button>
      </form>
    </>
  )
}