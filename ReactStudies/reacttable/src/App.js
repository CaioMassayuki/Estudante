import React, { Component } from 'react';
import './App.css';
import DataTable from './components/datatable'
import DataButton from './components/databutton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      holdRow: {},
      editingId: -1,

    }

    this.handleChange = (e, name, line) => {
      const { value } = e.target;
      this.setState({
        data: this.state.data.map(
          (row, index) => (index === line ? { ...row, [name]: value } : row)
        )
      })
    }

    this.handleAddData = () => {
      const newRow = { nome: '', sobrenome: '', idade: '' }
      this.setState({
        data: [...this.state.data, newRow]
      })
    }

    this.handleEdit = line => {
      this.setState({
        editingId: line,
        holdRow: this.state.data[line]
      })
    }

    this.handleCancel = line => {
      this.setState({
        data: this.state.data.fill(this.state.holdRow, line, line+1),
        editingId: -1
      })
    }

    this.handleDelete = line => {
      this.setState({
        data: this.state.data.filter((row, index) => index !== line)
      })
    }

    this.handleDone = () => {
      this.setState({
        editingId: -1
      })
    }
  }

  render() {
    return (
      <div>
        <DataTable
          data={this.state.data}
          editingId={this.state.editingId}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleCancel={this.handleCancel}
          handleDone={this.handleDone}
          handleChange={this.handleChange} />
        <DataButton handleAddData={this.handleAddData} />
      </div>
    )
  }
}

export default App;
