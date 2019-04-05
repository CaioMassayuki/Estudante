import React, { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import Prism from "prismjs"

import "../prism.css"
import "./markdown-editor.css"

const MarkdownEditor = () => {
  const [source, setSource] = useState("")

  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div className="container">
      <textarea onChange={e => setSource(e.target.value)} value={source} />
      <ReactMarkdown className="content" source={source} />
    </div>
  )
}

export default MarkdownEditor
