'use strict'

import React, { Component } from 'react'
import Button from './button'
class App extends Component {
    render() {
        console.log('render')
        return (
            <div>
                <Button handleClick={() => console.log('clicou')}>
                    Clique em Mim!
                </Button>
            </div>
        )
    }
}

App.defaultProps

export default App