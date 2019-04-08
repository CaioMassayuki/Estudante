import React, { useState } from 'react'

const MarkdownEditor = () => {
  const [textValue, setTextValue] = useState('')
  return (
    <div>
      <div
        suppressContentEditableWarning
        contentEditable
        onFocus={e => console.log('focused')}
        onBlur={e => console.log('blur')}
        onKeyDown={e => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            //Validade Text
          }
        }}
        onInput={e => setTextValue(e.target.innerText)}
        innertext={console.log(textValue)}
      />
    </div>
  )
}

export default MarkdownEditor
