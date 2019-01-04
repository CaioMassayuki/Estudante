'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <form>
                {/* Controlled TextArea Component */}
                <textarea value='aaaaaaa'></textarea>
                {/* Uncontrolled TextArea Component */}
                <textarea defaultValue='textArea value'/>
            </form>
        )
    }
}

App.defaultProps

export default App