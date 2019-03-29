import React from 'react'

const Textview = ({ style, markdownHtml }) => (
  <div style={style.Container}>
    {/* Componente de Markdown */}
    <div style={style.Content} dangerouslySetInnerHTML={{ __html: markdownHtml }} >
    </div>
  </div>
)

export default Textview