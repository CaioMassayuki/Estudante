'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
    //this.props
    render() {
        return (
            <div>
                {['blue', 'red', 'green'].map((square, index) => (
                    <Square key={index} color={square} />
                ))}
            </div>
        )
    }
}

App.defaultProps

// const App = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Title lastname={15+10}/>
//             </div>
//         )
//     } 
// })

export default App