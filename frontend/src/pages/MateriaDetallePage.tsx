import { useParams } from 'react-router-dom'

import Layout from '../components/Layout'

export default function
MateriaDetallePage() {

  const { id } = useParams()

  const tareas = [

    {
      id: 1,
      titulo:
        'Taller #1',
      fecha:
        '2026-05-25',
      estado:
        'Pendiente'
    },

    {
      id: 2,
      titulo:
        'Quiz programación',
      fecha:
        '2026-05-28',
      estado:
        'Entregado'
    },

    {
      id: 3,
      titulo:
        'Proyecto final',
      fecha:
        '2026-06-10',
      estado:
        'Pendiente'
    }

  ]

  return (

    <Layout>

      <h1 className="
        text-4xl
        font-bold
        mb-10
      ">
        Materia {id}
      </h1>

      <div className="
        grid
        md:grid-cols-2
        gap-6
      ">

        {tareas.map(
          (tarea) => (

            <div

              key={tarea.id}

              className="
                bg-white
                p-6
                rounded-2xl
                shadow-lg
              "

            >

              <h2 className="
                text-2xl
                font-bold
              ">
                {tarea.titulo}
              </h2>

              <p className="
                text-gray-500
                mt-2
              ">
                Fecha:
                {tarea.fecha}
              </p>

              <span className="
                inline-block
                mt-4
                px-4
                py-2
                rounded-full
                bg-blue-100
                text-blue-700
              ">
                {tarea.estado}
              </span>

            </div>

          )
        )}

      </div>

    </Layout>

  )

}