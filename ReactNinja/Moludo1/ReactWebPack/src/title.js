'use strict'

import React from 'react'

const Title = React.createClass({
    render: function () {
        return (
            console.log(this),
            <h1>Olá {this.props.name}!</h1>
        )
    }
})

export default Title