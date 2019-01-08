'use strict'

import React from 'react'

const Search = ({ handleSearch, isDisabled }) => (
    <div className='search'>
        <input 
            type='search' 
            placeholder='Digite o nome do Usuario do Github'
            disabled={isDisabled}
            onKeyUp={handleSearch}
            />
    </div>
)

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired
}

export default Search