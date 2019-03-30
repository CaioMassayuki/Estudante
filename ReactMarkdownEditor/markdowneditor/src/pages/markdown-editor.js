import React, { useState } from 'react'
import Textbox from '../components/textbox'
import MarkdownView from '../components/markdown-view'
import { styles } from './markdown-editor.style'
import marked from 'marked'

import 'highlight.js/styles/dracula.css'

const MarkdownEditor = () => {
  const [markdownHtml, setMarkdownHtml] = useState('')

  const handleTextValueChange = event => {
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
