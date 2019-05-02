import React, { useState } from 'react'
import { getAccessToken, getKirbyDirectories, getKirbyArchives, setNote } from './request-hub.service'

const RequestHub = () => {
  const [userName, setUserName] = useState(null)
  const [userPass, setUserPass] = useState(null)
  const [userToken, setUserToken] = useState(null)

  const [path, setPath] = useState(null)
  const [userDirectories, setUserDirectories] = useState([])

  const [userArchives, setUserArchives] = useState(null)

  const [userNote, setUserNote] = useState(null)
  const [userPath, setUserPath] = useState(null)
  const [status, setStatus] = useState(null)

  function plotChild (children) {
    let arr = []

    const plot = (element, path='') => {
      if(element.children){
        element.children.forEach(child => plot(child, path + element.name + '/'))
      }else{
        arr.push(path + element.name)
      }
    }

    children.forEach(e => plot(e))
    setUserDirectories(arr)
  }

  const handleGetUserTokenClick = async () => {
    const response = await getAccessToken(userName, userPass)
    response && response.headers && response.headers.authorization && setUserToken(response.headers.authorization)
  }

  const handleGetDirectoriesClick = async () => {
    const response = await getKirbyDirectories(userToken)
    console.log(response)
    response && response.data && response.data.children && plotChild(response.data.children)
  }

  const handleGetArchivesClick = async () => {
    const response = await getKirbyArchives(userToken, path)
    response && response.data && response.data.content && setUserArchives(response.data.content)
  }

  const handleSendNoteClick = async () => {
    const response = await setNote(userToken, userNote, userPath)
    response && response.status && setStatus(response.status)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid blue',
          margin: '10px 10px',
          justifyContent: 'center'
        }}
      >
        <div>Request na API Auth - Retorna um Token</div>
        <input
          placeholder="Digite o Nome do Usuário"
          onChange={e => setUserName(e.target.value)}
        />
        <input
          placeholder="Digite a Senha do Usuário"
          onChange={e => setUserPass(e.target.value)}
        />
        <button onClick={() => handleGetUserTokenClick()}>POST</button>
        <div style={{ overflowWrap: 'break-word' }}>{userToken}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid green',
          margin: '10px 10px',
          justifyContent: 'center'
        }}
      >
        <div>Request na API Kirby - Retorna Arvore de Arquivos do Usuário</div>
        <button onClick={() => handleGetDirectoriesClick()}>GET</button>
        <div style={{ overflow: 'auto' }}>
          {userDirectories.map(el => <p>- {el}</p>)}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid orange',
          margin: '10px 10px',
          justifyContent: 'center'
        }}
      >
        <div>Request na API Kirby - Retorna o Arquivo ou Diretório do Usuário</div>
        <input
          placeholder="Digite o Nome do Arquivo"
          onChange={e => setPath(e.target.value)}
        />
        <button onClick={() => handleGetArchivesClick()}>GET</button>
        <div style={{ overflow: 'auto' }}>{userArchives}</div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid purple',
          margin: '10px 10px',
          justifyContent: 'center'
        }}
      >
        <div>Request na API Kirby - Salva o arquivo no servidor</div>
        <input
          placeholder="Digite o Nome do Arquivo"
          onChange={e => setUserPath(e.target.value)}
        />
        <input
          placeholder="Digite a Anotação"
          onChange={e => setUserNote(e.target.value)}
        />
        <button onClick={() => handleSendNoteClick()}>POST</button>
        <div style={{ overflow: 'auto' }}>{status}</div>
      </div>
    </div>
  )
}

export default RequestHub
