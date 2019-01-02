'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
    <button className='main-b' onClick={handleClick}>
        {children}
    </button>
)

export default Button