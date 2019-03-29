import React, { useState } from 'react'
import Textbox from '../components/textbox'
import MarkdownView from '../components/markdown-view'
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
  const [markdownHtml, setMarkdownHtml] = useState('')

  const handleTextValueChange = event => {
    setTextValue(event.target.value)
    markdownTransformation(event.target.value)
  }

  const markdownTransformation = text => {
    setMarkdownHtml(marked(text))
  }

  return (
    <div style={styles.markdowneditor.Wrapper}>
      <Textbox style={styles.textbox} handleTextValueChange={handleTextValueChange} />
      <MarkdownView innerHTML={true}>
        {markdownHtml}
      </MarkdownView>
    </div>
  )
}

export default MarkdownEditor