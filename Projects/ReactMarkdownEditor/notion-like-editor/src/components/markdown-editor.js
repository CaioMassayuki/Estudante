import React from 'react'
import DataBlock from './DataBlock/datablock'
import TextBlock from './TextBlock/textblock'

const MarkdownEditor = () => {
  const [textBlocks, setTextBlocks] = React.useState([
    { textBlockIndex: 0, textValue: { html: '' } },
  ])

  const handleEnterKeyDown = event => {
    if (event.keyCode === 13) {
      console.log('Enter')
      event.preventDefault()
      setTextBlocks([
        ...textBlocks,
        {
          textBlockIndex: textBlocks.length,
          textValue: {
            html: '',
          },
        },
      ])
      console.log(event.target.focus())
    }
  }

  const handleTextChange = (event, elementIndex) => {
    const newTextValue = {
      textBlockIndex: elementIndex,
      textValue: {
        html: event.target.value,
      },
    }
    setTextBlocks(textBlocks.fill(newTextValue, elementIndex, elementIndex + 1))
  }

  return (
    <DataBlock handleEnterKeyDown={handleEnterKeyDown}>
      {textBlocks.map(element => (
        <TextBlock
          key={element.textBlockIndex}
          textBlockIndex={element.textBlockIndex}
          textValue={element.textValue}
          handleTextChange={handleTextChange}
        />
      ))}
    </DataBlock>
  )
}

export default MarkdownEditor
