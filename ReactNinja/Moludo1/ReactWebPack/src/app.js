'use strict'

import React, { Component } from 'react'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
    //this.props
    render() {
        return (
            <div className='container'>
                <LikeButton />
                <SearchButton />
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