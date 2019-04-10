import React from 'react'

const DataBlock = children => {
  return(
  <div>
      {children.children === Array ? children.children.map(element => element) : children.children}
    </div>
  )
}

export default DataBlock
