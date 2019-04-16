'use strict'

import visibilityFilter, { initialState } from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from './actions'

it('Should be a Function', () => {
  expect(visibilityFilter).to.be.a('function')
})

it('Should show all ToDoItems', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should show only Completed ToDoItems', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should show only Active ToDoItems', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should return lastest state when action is Unknown', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: 'UNKNOWN',
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

it('Should return InitialState when latest state is Undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(visibilityFilter(before, action)).to.be.equal(after)
})
