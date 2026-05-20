import { useState } from 'react'

import {
  useNavigate
} from 'react-router-dom'

import {
  useGoogleLogin
} from '@react-oauth/google'

import api from '../services/api'

export default function Login() {

  const [correo, setCorreo] =
    useState('')

  const [password, setPassword] =
    useState('')

  const navigate =
    useNavigate()

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

  const loginGoogle = useGoogleLogin({

    flow: 'implicit',

    scope:
  'openid profile email https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.students.readonly https://www.googleapis.com/auth/classroom.student-submissions.students.readonly',

    prompt: 'consent',

    onSuccess: async (
  tokenResponse
) => {

  console.log(tokenResponse)

  fetch(
    'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' +
    tokenResponse.access_token
  )
  .then(res => res.json())
  .then(data => console.log(data))

  localStorage.setItem(
    'google_access_token',
    tokenResponse.access_token
  )

 setTimeout(() => {

  window.location.href =
    '/materias'

}, 5000)

},
    onError: () => {

      alert(
        'Error Google Login'
      )

    }

  })

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
        rounded-3xl
        shadow-2xl
        w-[400px]
      ">

        <h1 className="
          text-4xl
          font-bold
          text-center
          text-blue-900
          mb-8
        ">
          UNICOMFACAUCA
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
              p-4
              rounded-xl
              border
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
              p-4
              rounded-xl
              border
            "

          />

          <button

            onClick={handleLogin}

            className="
              bg-blue-700
              text-white
              p-4
              rounded-xl
              font-bold
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
              p-4
              rounded-xl
              font-bold
            "

          >
            Continuar con Google
          </button>

        </div>

      </div>

    </div>

  )

}