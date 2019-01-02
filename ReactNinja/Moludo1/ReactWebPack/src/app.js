'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            text: 'Caio'
        }
    }
    render() {
        return (
            <div className='container' onClick={() => this.setState({
                text: 'AAAAAAAAAA'
            })}>
                {this.state.text}
            </div>
        )
    }
}

App.defaultProps

export default App