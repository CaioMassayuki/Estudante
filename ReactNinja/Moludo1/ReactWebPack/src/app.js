'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
    //this.props
    render() {
        return (
            <div>
                <Title lastname={15 + 10} />
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