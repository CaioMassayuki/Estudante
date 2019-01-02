'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
    constructor () {
        super()
        this.state = {
            color: 'green'
        }
    }
    render() {
        return (
            <div className='container'>
                <Square color={this.state.color}/>

                {['red', 'green', 'blue'].map((color) => (
                    <Button 
                     key={color}
                     handleClick={() => this.setState({color})}>
                     {color}
                    </Button>
                ))}
            </div>
        )
    }
}

App.defaultProps

export default App