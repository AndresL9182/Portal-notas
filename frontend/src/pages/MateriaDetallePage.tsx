import {
  useEffect,
  useState
} from 'react'

import {
  useParams
} from 'react-router-dom'

import Layout from '../components/Layout'

import {
  getCourseWork
} from '../services/coursework'

export default function
MateriaDetallePage() {

  const { id } =
    useParams()

  const [tareas, setTareas] =
    useState<any[]>([])

  useEffect(() => {

    const load =
      async () => {

        try {

          const data =
            await getCourseWork(
              id || ''
            )

          console.log(data)

          setTareas(
            data.courseWork || []
          )

        } catch (error) {

          console.log(error)

        }

      }

    load()

  }, [id])

  return (

    <Layout>

      <div className="p-8">

        <h1 className="
          text-3xl
          font-bold
          mb-8
        ">
          Tareas
        </h1>

        <div className="
          flex
          flex-col
          gap-5
        ">

          {tareas.map(
            (tarea) => (

              <div

                key={tarea.id}

                className="
                  bg-white
                  shadow-lg
                  rounded-2xl
                  p-5
                "

              >

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  {tarea.title}
                </h2>

                <p className="
                  mt-3
                  text-gray-600
                ">
                  {tarea.description}
                </p>

                <p className="
                  mt-3
                  font-bold
                  text-blue-700
                ">
                  Puntos:
                  {tarea.maxPoints || 0}
                </p>

              </div>

            )
          )}

        </div>

      </div>

    </Layout>

  )

}