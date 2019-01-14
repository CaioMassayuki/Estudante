'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import SaveMessage from './save-message'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='editor-header'>

    <SaveMessage isSaving={isSaving} />

    <Button onClick={handleCreate} kind={'success'}>
      Novo
    </Button>

    <Button onClick={handleRemove} kind={'danger'}>
      Remover
    </Button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
