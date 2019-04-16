import React, { useState } from 'react'
import RequestButton from '../../components/RequestButton'
import RequestInput from '../../components/RequestInput'
import RequestView from '../../components/RequestView'
import { getAccessToken } from './request-hub.service'

const RequestHub = () => {
  const [userName, setUserName] = useState(null)
  const [userPass, setUserPass] = useState(null)
  const [userToken, setUserToken] = useState(null)

  const handleGetUserTokenClick = async () => {
    const response = await getAccessToken(userName, userPass)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid blue',
        }}
      >
        <RequestView>Request na API Auth - Retorna um Token</RequestView>
        <RequestInput
          placeholder="Digite o Nome do Usuário"
          text={userName}
          handleChangeInput={setUserName}
        />
        <RequestInput
          placeholder="Digite a Senha do Usuário"
          text={userPass}
          handleChangeInput={setUserPass}
        />
        <RequestButton onClick={}>POST</RequestButton>
      </div>
    </div>
  )
}

export default RequestHub
