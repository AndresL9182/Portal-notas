import { useEffect, useState } from 'react'

import Layout from '../components/Layout'

import {
  getGoogleCourses
} from '../services/google'

export default function MateriasPage() {

  const [materias, setMaterias] =
    useState<any[]>([])

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

        <h1 className="
          text-3xl
          font-bold
          mb-8
        ">
          Mis Materias
        </h1>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-5
        ">

          {materias.map(
            (materia) => (

              <div

                key={materia.id}

                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  p-5
                "

              >

                <h2 className="
                  text-2xl
                  font-bold
                  text-blue-700
                ">
                  {materia.name}
                </h2>

                <p className="mt-3">
                  ID:
                  {materia.id}
                </p>

                <p>
                  Profesor:
                  {materia.ownerId}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </Layout>

  )

}