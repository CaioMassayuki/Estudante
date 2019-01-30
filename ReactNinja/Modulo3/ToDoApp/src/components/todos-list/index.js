'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/action-creators'
import * as filterActions from 'reducers/todos/actions'

const getVisibleTodos = (todos, activeFilter) => {
  return {
    [filterAction.SHOW_ALL]: todos,
    [filterAction.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [filterAction.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed)
  }[activeFilter]
}

const TodosList = ({ todos, activeFilter, handleToggleTodo }) = (
  <ul>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFitler
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)

