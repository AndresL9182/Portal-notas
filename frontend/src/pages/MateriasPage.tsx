import { useEffect, useState } from 'react'

import Layout from '../components/Layout'

import {
  getGoogleCourses
} from '../services/google'

import {
  useNavigate
} from 'react-router-dom'

export default function MateriasPage() {

  const [materias, setMaterias] =
    useState<any[]>([])

  const navigate =
    useNavigate()

  useEffect(() => {

    const loadCourses =
      async () => {

        try {

          const data =
            await getGoogleCourses()

          console.log(data)

          setMaterias(
            data.courses || []
          )

        } catch (error) {

          console.log(error)

        }

      }

    loadCourses()

  }, [])

  return (

    <Layout>

      <div className="p-8">

        <div className="
          flex
          items-center
          justify-between
          mb-8
        ">

          <div>

            <h1 className="
              text-4xl
              font-bold
              text-blue-900
            ">
              Mis Materias
            </h1>

            <p className="
              text-gray-500
              mt-2
            ">
              Materias sincronizadas
              con Google Classroom
            </p>

          </div>

        </div>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        ">

          {materias.map(
            (materia) => (

              <div

                key={materia.id}

                onClick={() =>
                  navigate(
                    `/materias/${materia.id}`
                  )
                }

                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-6
                  cursor-pointer
                  hover:scale-105
                  hover:shadow-2xl
                  transition
                  border
                  border-gray-100
                "

              >

                <div className="
                  flex
                  items-center
                  justify-between
                  mb-4
                ">

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    text-blue-700
                    text-2xl
                    font-bold
                  ">
                    📘
                  </div>

                </div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-blue-900
                ">
                  {materia.name}
                </h2>

                <p className="
                  mt-3
                  text-gray-500
                ">
                  ID:
                  {materia.id}
                </p>

                <p className="
                  mt-1
                  text-gray-500
                ">
                  Profesor:
                  {materia.ownerId}
                </p>

                <button

                  className="
                    mt-6
                    bg-blue-600
                    text-white
                    px-5
                    py-3
                    rounded-2xl
                    w-full
                    font-semibold
                  "

                >
                  Ver tareas
                </button>

              </div>

            )
          )}

        </div>

      </div>

    </Layout>

  )

}