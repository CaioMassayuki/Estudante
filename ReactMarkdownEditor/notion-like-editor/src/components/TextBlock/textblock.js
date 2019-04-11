import React from 'react'
import ContentEditable from 'react-contenteditable'

const TextBlock = ({ textBlockIndex, textValue, handleTextChange, reference }) => {
  return (
    // TextColor
    <div>
      {/* TextContainer */}
      <div>
        {/* TextEditable */}
        <ContentEditable ref={reference} html={textValue.html} onChange={event => handleTextChange(event, textBlockIndex)}/>
      </div>
    </div>
  )
}

export default TextBlock
