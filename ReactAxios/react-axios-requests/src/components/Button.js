import React from 'react'
import { request } from '../config/http-requests'

const handleRequest = async event => {
  console.log(event.target.innerText)
  const response = await request({
    url: `https://api.github.com/users/CaioMassayuki`,
    method: event.target.innerText,
  })
  console.log(response)
}

const Button = ({ children }) => {
  return <button onClick={handleRequest}> {children} </button>
}

export default Button
