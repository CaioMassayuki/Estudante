'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('Should ToDos be a Function', () => {
  expect(todos).to.be.a('function')
})

it('Should Add a ToDo', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {
      id: 0,
      text: 'Hey'
    }
  })
  const after = [{
    id: 0,
    text: 'Hey',
    completed: false
  }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should Add a New ToDo item', () => {
  const before = deepFreeze([{
    id: 0,
    text: 'Hey',
    completed: false
  }])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: {
      id: 1,
      text: 'Ho'
    }
  })
  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should Toggle first ToDo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])
  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {
      id: 0
    }
  })
  const after = [
    { id: 0, text: 'Hey', completed: true },
    { id: 1, text: 'Ho', completed: false }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should Toggle second ToDo', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: false }
  ])
  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: {
      id: 1
    }
  })
  const after = [
    { id: 0, text: 'Hey', completed: false },
    { id: 1, text: 'Ho', completed: true }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should Return latest State when action is Unknown', () => {
  const before = deepFreeze([
    { id: 0, text: 'Hey', completed: false }
  ])
  const action = deepFreeze({ type: 'UNKNOWN' })
  const after = [{ id: 0, text: 'Hey', completed: false }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('Should Return initialState when state before is Undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(todos(before, action)).to.be.deep.equal(after)
})
