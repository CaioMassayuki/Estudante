import React from 'react'
import Input from './request-input.style'

const RequestInput = ({ placeholder, text, handleChangeInput }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={event => handleChangeInput(event.target.value)}
    />
  )
}

export default RequestInput
