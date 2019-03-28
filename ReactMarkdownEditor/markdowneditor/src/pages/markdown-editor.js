import React, { useState } from 'react'
import Textbox from '../components/textbox'
import Textview from '../components/textview'
import marked from 'marked'

const styles = {
  markdowneditor: {
    Wrapper: {
      display: 'flex',
      flexDirection: 'row'
    }
  },
  textbox: {
    Container: {
      width: '50vw',
      height: '95vh',
      marginRight: 5,
    },
    Textarea: {
      width: '100%',
      height: '100%',
      padding: 0,
      border: '2px solid #212121',
      resize: 'none',
      fontFamily: 'Times New Roman, Times, serif',
      fontSize: 20,
    }
  },
  textview: {
    Container: {
      width: '50vw',
      height: '95vh',
    },
    Content: {
      width: '100%',
      height: '100%',
      border: '2px solid #212121',
      fontFamily: 'Times New Roman, Times, serif',
      fontSize: 20,
    }
  }
}

const MarkdownEditor = () => {
  const [textValue, setTextValue] = useState('')

  const handleTextValueChange = event => {
    setTextValue(event.target.value)
  }

  return (
    <div style={styles.markdowneditor.Wrapper}>
      {console.log(marked(textValue))}
      <Textbox style={styles.textbox} handleTextValueChange={handleTextValueChange} />
      <Textview style={styles.textview} textValue={textValue} />
    </div>
  )
}

export default MarkdownEditor