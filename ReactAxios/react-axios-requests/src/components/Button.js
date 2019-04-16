import React from 'react'
import { request } from '../config/http-requests'

const handlePost = async (event, setHeader) => {
  console.log(event.target.innerText)
  const response = await request({
    url: `http://10.0.5.178:8762/auth`,
    method: 'post',
    data: {
      username: 'admin',
      password: 'admin'
    }
  })
  setHeader(response.headers.authorization)
  console.log(response)
}

const handleGet = async (event, header, setPaths) => {
  console.log(header)
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/tree`,
    method: 'get',
    headers: { 'Authorization': header },
  })
  setPaths(response.data)
  console.log(response)
}

const handleGetPath = async (event, header, path, setResponseNote) => {
  console.log(header)
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/note?path=${path}`,
    method: 'get',
    headers: { 'Authorization': header },
  })
  setResponseNote(response.data.content)
}

const handlePostNote = async (event, header, note, directory) => {
  console.log(event.target.innerText)
  console.log(header)
  const response = await request({
    url: `http://10.0.5.178:8762/kirby/note`,
    method: 'post',
    headers: { 'Authorization': header },
    data: {
      path: directory,
      content: note
    }
  })
  console.log(response)
}

const handleChangeNote = (event, setNote) => {
  setNote(event.target.value)
}

const handleChangeDirectory = (event, setDirectory) => {
  setDirectory(event.target.value)
}

const handleChangePath = (event, setPathSearch) => {
  setPathSearch(event.target.value)
}

const Button = () => {
  const [header, setHeader] = React.useState(null)
  const [responseNote, setResponseNote] = React.useState('')
  const [note, setNote] = React.useState('teste')
  const [directory, setDirectory] = React.useState('teste')
  const [paths, setPaths] = React.useState(null)
  const [pathsSearch, setPathSearch] = React.useState(null)

  return (
    <>
      <button onClick={event => handlePost(event, setHeader)}> Post </button>
      <button onClick={event => handlePostNote(event, header, note, directory)}> Post Kirby Note </button>
      <input type='text' placeholder='Texto da Nota' onChange={event => handleChangeNote(event, setNote)} />
      <input type='text' placeholder='Diretorio' onChange={event => handleChangeDirectory(event, setDirectory)} />
      <input type='text' placeholder='Path' onChange={event => handleChangePath(event, setPathSearch)} />
      <button onClick={event => handleGet(event, header, setPaths)}> Get </button>
      <button onClick={event => handleGetPath(event, header, pathsSearch, setResponseNote)}> GetPath </button>
      <div>{header}</div>
      <div>{responseNote}</div>
    </>
  )
}

export default Button
