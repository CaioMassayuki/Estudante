'use strict'

const counter = (state, action) => {
    if (action.type === 'INCREMENT'){
        return state + 1
    }

    if (action.type === 'DECREMENT'){
        return state - 1
    }
    return state
}

console.assert(
    counter(0, { type: 'INCREMENT' }) === 1
)

console.assert(
    counter(1, { type: 'INCREMENT' }) === 2
)

console.assert(
    counter(2, { type: 'DECREMENT' }) === 1
)

console.assert(
    counter(5, { type: 'DECREMENT' }) === 4
)

