import React from 'react'
import { requestConfig } from './config/http-requests'
import Button from './components/Button'

requestConfig()

const App = () => {
  return (
    <div>
      <Button>GET</Button>
      <Button>POST</Button>
    </div>
  )
}

export default App
