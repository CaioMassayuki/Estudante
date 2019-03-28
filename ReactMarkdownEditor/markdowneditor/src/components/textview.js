import React from 'react'

const Textview = ({ style, textValue }) => (
  <div style={style.Container}>
    {/* Componente de Markdown */}
    <div style={style.Content}>
      {textValue}
    </div>
  </div>
)

export default Textview