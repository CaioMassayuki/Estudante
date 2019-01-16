import React, { Component } from 'react';
import './App.css';
import DataTable from './components/datatable'
import DataButton from './components/databutton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      nome: '',
      sobrenome: '',
      idade: '',
      editingId: -1,

    }

    this.handleChange = dataItem => event =>{
      this.setState({
        [dataItem]: event.target.value
      })
    }

    this.handleAddData = () => {
      const newRow = { nome: '', sobrenome: '', idade: '' }
      this.setState({
        data: [...this.state.data, newRow]
      })
    }

    this.handleEdit = index => {
      console.log(index)
      this.setState({
        editingId: index
      })
    }

    this.handleCancel = () => {
      this.setState({
        editingId: -1
      })
    }

    this.handleDelete = rowIndex => {
      this.setState({
        data: this.state.data.filter((row, index) => index !== rowIndex)
      })
    }

    this.handleDone = (index, row) => {
      
      this.setState({
        data: this.state.data.map((row, i) => ( i === index ? { ...row,  } : row))
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
          handleDone={this.handleDone} />
        <DataButton handleAddData={this.handleAddData} />
      </div>
    )
  }
}

export default App;
