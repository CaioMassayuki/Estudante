'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from './components/markdown-editor'
import { v4 } from 'node-uuid'

import 'normalize.css'
import 'highlight.js/styles/dracula.css'
import './css/style.css'

import('highlight.js').then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      }
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()

    this.clearState = () => ({
       value: '',
       id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if (this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({
          isSaving: false
        })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)
      this.createNew()
    }
    
    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidMount () {
    const value = localStorage.getItem('md')
    this.setState({ value: value || '' })
  }

  componentDidUpdate () {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleSave={this.handleSave}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
      />
    )
  }
}

export default App
