'use strict'

import { combineReducers } from 'redux'
import todos from '.todos/todos'
import visibilityFilter from './visibility-filter'

export default combineReducers({
  todos,
  visibilityFilter
})
