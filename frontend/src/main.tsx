import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'

import {
  GoogleOAuthProvider
} from '@react-oauth/google'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(

  <React.StrictMode>

    <GoogleOAuthProvider
      clientId="270618544805-c8krstot7d147oudfbppigs2c05qafrv.apps.googleusercontent.com"
    >

      <App />

    </GoogleOAuthProvider>

  </React.StrictMode>

)