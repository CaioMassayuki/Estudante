import React, { useState, useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/languages/javascript'

const MarkdownView = ({ children, className, innerHTML, element }) => {
  const elementRef = useRef()

  useEffect(() => {
    const nodes = elementRef.current.querySelectorAll('pre code')
    console.log(elementRef)
    console.log(innerHTML)
  })

  const props =
    innerHTML ? { dangerouslySetInnerHTML: { __html: children }, className, ref: elementRef }
      :
      { className, ref: elementRef, children }

  return (
    <div {...props} />
  )
}

MarkdownView.defaultProps = {
  innerHTML: false,
}

export default MarkdownView