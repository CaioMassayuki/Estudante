import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Table, TableRow, TableHead, TableBody, TableCell, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done'

const dataRow = (data, editingId, handleEdit, handleDelete, handleCancel, handleDone) => {
    return (
        <TableBody>
            {data.map((row, index) => {
                const currentEditingRow = editingId === index
                return (
                    currentEditingRow ?
                        (
                            <TableRow key={index} selectable='false'>
                                <TableCell><TextField name='name' defaultValue={row.nome}></TextField></TableCell>
                                <TableCell><TextField name='sobrenome' defaultValue={row.sobrenome}></TextField></TableCell>
                                <TableCell><TextField name='idade' defaultValue={row.idade}></TextField></TableCell>
                                <TableCell><DoneIcon onClick={() => handleDone(index, row)} /></TableCell>
                                <TableCell><ClearIcon onClick={() => handleCancel()} /></TableCell>
                            </TableRow>
                        ) :
                        (
                            <TableRow key={index} selectable='false'>
                                <TableCell>{row.nome}</TableCell>
                                <TableCell>{row.sobrenome}</TableCell>
                                <TableCell>{row.idade}</TableCell>
                                <TableCell><EditIcon onClick={() => handleEdit(index)} /></TableCell>
                                <TableCell><DeleteIcon onClick={() => handleDelete(index)} /></TableCell>
                            </TableRow>
                        )
                )
            })}
        </TableBody>
    )
}

const DataTable = ({ data, editingId, handleEdit, handleDelete, handleCancel, handleDone }) => (
    <Paper>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Sobrenome</TableCell>
                    <TableCell>Idade</TableCell>
                </TableRow>
            </TableHead>
            {dataRow(data, editingId, handleEdit, handleDelete, handleCancel, handleDone)}
        </Table>
    </Paper>
)

DataTable.propTypes = {
    data: PropTypes.array.isRequired
}

export default DataTable