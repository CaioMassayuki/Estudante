'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
            showContent: false
        }
    }
    render() {
        return (
            <div>
                <label>
                    <input type='checkbox' checked={this.state.checked} onChange={(e) => {
                        this.setState({ checked: !this.state.checked }, () => {
                            this.setState({ showContent: this.state.checked })
                        })
                    }} />
                    Mostrar conteúdo
                </label>
                {this.state.showContent && <div>Olha eu aqui!</div>}
            </div>
        )
    }
}

App.defaultProps

export default App