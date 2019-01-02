'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
    //this.props
    render() {
        return (
            <div className='container' onClick={(e) => {
                alert('clicou')
            }}>
                <Square />
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