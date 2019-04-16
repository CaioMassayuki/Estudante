'use strict'

import React, { Component } from 'react'

class Plugin extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick () {
        console.log('Clicou no Botão')
    }

    render() {
        return (
            <div>
                <input type='text'>A</input>
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}

export default Plugin