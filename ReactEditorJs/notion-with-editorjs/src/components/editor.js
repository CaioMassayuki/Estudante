import React from 'react'
import EditorJs from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed'
import Link from '@editorjs/link'
import SimpleImage from '@editorjs/simple-image'
import Quote from '@editorjs/quote'
import Code from '@editorjs/inline-code'

const editor = new EditorJs({
  holderId: 'editorjs',
  tools: {
    header: {
      class: Header,
      shortcut: 'CMD+SHIFT+H',
    },
    linkTool: {
      class: Link,
      shortcut: 'CMD+SHIFT+I',
    },
    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
    },
    image: SimpleImage,
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          imgur: true,
          codepen: true,
          'twitch-video': true,
        },
      },
    },
    inlineCode: {
      class: Code,
      shortcut: 'CMD+SHIFT+M',
    },
  },
})

const Editor = () => {
  return <div style={{ background: 'rgb(64,64,64)', color: 'white' }} id="editorjs" />
}

export default Editor
