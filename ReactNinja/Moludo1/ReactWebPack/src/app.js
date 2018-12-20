'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
    render: function () {
        return (
            <div className='container'>
                <Title />
                <label htmlFor='input'>Input</label>
                <input type='text' id='input'></input>
            </div>
        )
    } 
})

export default App