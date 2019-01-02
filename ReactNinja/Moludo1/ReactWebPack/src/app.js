'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
    //this.props
    render() {
        return (
            <div className='container'>
                <Button> 
                    <span>Texto</span>    
                    outro texto
                 </Button>
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