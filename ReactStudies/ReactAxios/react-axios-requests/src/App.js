import React from 'react'
import { requestConfig } from './config/http-requests'
import RequestHub from './pages/RequestHub'

requestConfig()

const App = () => {
  return (
    <div>
      <RequestHub />
    </div>
  )
}

export default App
