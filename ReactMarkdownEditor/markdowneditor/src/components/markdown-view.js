import React, { useState, useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/highlight'

const AVAILABLE_LANGUAGES = ['javascript', 'java', 'css', 'html', 'c#', 'python']

const MarkdownView = ({ children, className, innerHTML }) => {
  const elementRef = useRef()
  const [languages, setLanguages] = useState([])

  const validateLanguage = language => {
    return AVAILABLE_LANGUAGES.find(validLang => validLang === language)
  }

  const validateLanguageExistence = language => {
    return !languages.find(validLang => validLang === language)
  }
  
  useEffect(() => {
    const nodes = elementRef.current.querySelectorAll('pre code')
    const newLanguages = languages

    nodes.forEach(node => {
      const nodeLang = node.className.replace(/^language-/gmi, '')
      if (validateLanguage(nodeLang) && validateLanguageExistence(nodeLang)) {
        newLanguages.push(nodeLang)
        setLanguages(newLanguages)
        hljs.registerLanguage(nodeLang, require(`highlight.js/lib/languages/${nodeLang}`))
      }
      // Arrumar esse Highlight Block
      hljs.highlightBlock(node)
    })
  })

  const props =
    innerHTML ? { dangerouslySetInnerHTML: { __html: children }, className, ref: elementRef }
      :
      { className, ref: elementRef, children }

  return (
    <div {...props}></div>
  )
}

MarkdownView.defaultProps = {
  innerHTML: false,
}

export default MarkdownView