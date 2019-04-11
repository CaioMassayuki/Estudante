import React from 'react'

const DataBlock = ({ handleEnterKeyDown, children }) => {
  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      onKeyDown={handleEnterKeyDown}
    >
      {children === Array ? children.map(element => element) : children}
    </div>
  )
}

export default DataBlock
