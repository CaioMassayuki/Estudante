'use strict'

import React, { Component } from 'react'

class App extends Component {
    constructor () {
        super()
        this.state = {
            value: 'Controlled Component',
            checked: false,
            radioCheck: false
        }
    }
    render() {
        return (
            <div>
                <form>
                    {/* Controlled TextBox Component */}
                    <input type='text' value={this.state.value} onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        })
                    }}/>
                    <label>
                        {/* Controlled CheckBox Component */}
                        <input type='checkbox' checked={this.state.checked} onChange={(e) => {
                            this.setState({
                                checked: e.target.checked
                            })
                        }} />
                        Controlled Component
                    </label>
                    <label>
                        {/* Controlled Radio Component */}
                        <input type='radio' name='r' value={1} checked={this.state.radioCheck} onChange={(e) => {
                            this.setState({
                                radioCheck: e.target.radioCheck
                            })
                        }} />
                        Controlled Component
                    </label>
                    <label>
                        {/* Controlled Radio Component */}
                        <input type='radio' name='r' value={2} checked={this.state.radioCheck} onChange={(e) => {
                            this.setState({
                                radioCheck: e.target.radioCheck
                            })
                        }} />
                        Controlled Component
                    </label>
                    <br />

                    {/* Uncontrolled TextBox Component */}
                    <input type='text' defaultValue='Uncontrolled Component' />
                    <label>
                        {/* Uncontrolled CheckBox Component */}
                        <input type='checkbox' defaultChecked={true} />
                        Uncontrolled Component
                    </label>
                    {/* Uncontrolled Radio Component */}
                    <input type='radio' name='d' value={1} defaultChecked /> Uncontrolled Component
                    <input type='radio' name='d' value={2}  />Uncontrolled Component
                </form>
            </div>
        )
    }
}

App.defaultProps

export default App