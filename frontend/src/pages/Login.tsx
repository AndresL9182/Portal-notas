import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  useGoogleLogin
} from '@react-oauth/google'

import api from '../services/api'

export default function Login() {

  const [correo, setCorreo] =
    useState('')

  const [password, setPassword] =
    useState('')

  const navigate = useNavigate()

  const loginGoogle =
    useGoogleLogin({

      scope:
        'openid profile email https://www.googleapis.com/auth/classroom.courses.readonly',

      onSuccess: async (
        tokenResponse
      ) => {

        console.log(
          tokenResponse
        )

        localStorage.setItem(
          'google_access_token',
          tokenResponse.access_token
        )

        localStorage.setItem(
          'token',
          tokenResponse.access_token
        )

        localStorage.setItem(
          'user',
          JSON.stringify({
            nombre:
              'Usuario Google'
          })
        )

        window.location.href =
          '/dashboard'

      },

      onError: () => {

        console.log(
          'Google Login Failed'
        )

      }

    })

  const handleLogin =
    async () => {

      try {

        const response =
          await api.post(
            '/auth/login',
            {
              correo,
              password
            }
          )

        localStorage.setItem(
          'token',
          response.data.token
        )

        localStorage.setItem(
          'user',
          JSON.stringify(
            response.data.user
          )
        )

        navigate('/dashboard')

      } catch (error) {

        console.log(error)

        alert('Error login')

      }

    }

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    ">

      <div className="
        bg-white
        p-10
        rounded-2xl
        shadow-xl
        w-[400px]
      ">

        <h1 className="
          text-3xl
          font-bold
          mb-8
          text-center
        ">
          Portal Estudiantil
        </h1>

        <div className="
          flex
          flex-col
          gap-4
        ">

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) =>
              setCorreo(
                e.target.value
              )
            }
            className="
              border
              p-3
              rounded-lg
            "
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="
              border
              p-3
              rounded-lg
            "
          />

          <button
            onClick={handleLogin}
            className="
              bg-blue-600
              text-white
              p-3
              rounded-lg
              font-bold
              hover:bg-blue-700
            "
          >
            Ingresar
          </button>

          <button

            onClick={() =>
              loginGoogle()
            }

            className="
              bg-red-500
              text-white
              p-3
              rounded-lg
              font-bold
              hover:bg-red-600
            "

          >

            Continuar con Google

          </button>

        </div>

      </div>

    </div>

  )

}