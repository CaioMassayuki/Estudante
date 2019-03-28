import React from 'react'

const Textbox = ({ style, handleTextValueChange }) => (
  <div style={style.Container}>
    <textarea style={style.Textarea} onChange={handleTextValueChange} />
  </div>
)

export default Textbox