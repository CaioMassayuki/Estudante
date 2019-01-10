'use strict'

import React from 'react'

const Title = (props /*{name, lastname}*/) => (
    <h1>Olá {`${props.name} ${props.lastname}`}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido',
    lastname: 5
}

// const Title = React.createClass({
//     getDefaultProps: function () {
//         return{
//             name: 'Desconhecido',
//             lastname: 5
//         }
//     },
//     render: function () {
//         return (
//             <h1>Olá {this.props.name + ' ' + this.props.lastname} !</h1>
//         )
//     }
// })

export default Title