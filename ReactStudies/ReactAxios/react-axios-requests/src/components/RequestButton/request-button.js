import React from 'react'
import Button from './request-button.style'

const RequestButton = ({ children, handleRequestButtonClick }) => {
  return (
    <Button onClick={() => handleRequestButtonClick()}>{children}</Button>
  )
}

export default RequestButton
