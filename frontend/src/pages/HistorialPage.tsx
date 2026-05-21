import { useState } from 'react'

import Layout from '../components/Layout'

import {
  History,
  ChevronRight,
  ArrowLeft,
  GraduationCap
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function HistorialPage() {

  const semesters = [

    {
      id: 1,
      period: '2024-1',
      gpa: 4.5,

      courses: [

        {
          id: 1,
          code: 'BD202',
          name: 'Bases de Datos II',
          teacher: 'Carlos Ramírez',
          grade: 4.7
        },

        {
          id: 2,
          code: 'IS301',
          name: 'Ingeniería Software',
          teacher: 'Laura Gómez',
          grade: 4.3
        }

      ]

    },

    {
      id: 2,
      period: '2024-2',
      gpa: 3.8,

      courses: [

        {
          id: 3,
          code: 'RC201',
          name: 'Redes de Computadores',
          teacher: 'Andrés Pérez',
          grade: 3.9
        },

        {
          id: 4,
          code: 'SO210',
          name: 'Sistemas Operativos',
          teacher: 'María Torres',
          grade: 3.6
        }

      ]

    }

  ]

  const [
    selectedSemester,
    setSelectedSemester
  ] = useState<any>(null)

  const getColor = (grade: number) => {

    if (grade >= 4.0)
      return 'text-green-500'

    if (grade >= 3.0)
      return 'text-blue-500'

    return 'text-red-500'

  }

  /* DETALLE */

  if (selectedSemester) {

    return (

      <Layout>

        <div className="space-y-6">

          <button

            onClick={() =>
              setSelectedSemester(null)
            }

            className="
              flex
              items-center
              gap-2
              text-blue-500
              font-bold
            "

          >

            <ArrowLeft size={18} />

            Volver

          </button>

          {/* HEADER */}

          <div>

            <h1 className="
              text-4xl
              font-bold
              text-slate-800
            ">

              Historial
              {' '}
              {selectedSemester.period}

            </h1>

            <p className="
              text-slate-500
              mt-2
            ">

              Resumen académico del semestre

            </p>

          </div>

          {/* GPA */}

          <div className="
            bg-green-50
            border-l-4
            border-green-500
            p-6
            rounded-3xl
            flex
            items-center
            gap-4
          ">

            <div className="
              bg-green-500
              p-3
              rounded-full
            ">

              <GraduationCap
                className="text-white"
              />

            </div>

            <div>

              <h2 className="
                text-2xl
                font-bold
                text-green-700
              ">

                Promedio:
                {' '}
                {selectedSemester.gpa}

              </h2>

              <p className="
                text-green-600
              ">

                {
                  selectedSemester
                  .courses.length
                }
                {' '}
                materias cursadas

              </p>

            </div>

          </div>

          {/* TABLA */}

          <div className="
            bg-white
            rounded-3xl
            shadow-md
            overflow-hidden
          ">

            <table className="
              w-full
            ">

              <thead className="
                bg-[#1e2d4d]
                text-white
              ">

                <tr>

                  <th className="
                    p-4
                    text-left
                  ">
                    Código
                  </th>

                  <th className="
                    p-4
                    text-left
                  ">
                    Materia
                  </th>

                  <th className="
                    p-4
                    text-left
                  ">
                    Docente
                  </th>

                  <th className="
                    p-4
                    text-left
                  ">
                    Nota
                  </th>

                </tr>

              </thead>

              <tbody>

                {
                  selectedSemester
                  .courses.map(
                    (course: any) => (

                      <tr
                        key={course.id}
                        className="
                          border-b
                        "
                      >

                        <td className="p-4">
                          {course.code}
                        </td>

                        <td className="
                          p-4
                          font-bold
                        ">
                          {course.name}
                        </td>

                        <td className="p-4">
                          {course.teacher}
                        </td>

                        <td className={`
                          p-4
                          font-bold
                          ${getColor(course.grade)}
                        `}>

                          {course.grade}

                        </td>

                      </tr>

                    )
                  )
                }

              </tbody>

            </table>

          </div>

        </div>

      </Layout>

    )

  }

  /* LISTA SEMESTRES */

  return (

    <Layout>

      <div className="
        space-y-6
      ">

        {/* HEADER */}

        <section>

          <div className="
            flex
            items-center
            gap-2
            text-slate-400
            text-xs
            font-semibold
            mb-2
          ">

            <span>Inicio</span>

            <span>•</span>

            <span className="
              text-slate-600
            ">
              Historial Académico
            </span>

          </div>

          <h1 className="
            text-3xl
            font-bold
            text-slate-800
            flex
            items-center
            gap-3
          ">

            <History className="
              w-8
              h-8
              text-blue-500
            " />

            Historial Académico

          </h1>

        </section>

        {/* CARDS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {
            semesters.map(
              (semester, idx) => (

                <motion.div

                  key={semester.id}

                  initial={{
                    opacity: 0,
                    y: 20
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    delay: idx * 0.1
                  }}

                  onClick={() =>
                    setSelectedSemester(
                      semester
                    )
                  }

                  className="
                    bg-white
                    rounded-3xl
                    shadow-md
                    p-6
                    cursor-pointer
                    hover:shadow-xl
                    transition-all
                  "

                >

                  <div className="
                    flex
                    justify-between
                    items-center
                    mb-6
                  ">

                    <div>

                      <p className="
                        text-xs
                        uppercase
                        text-slate-400
                        font-bold
                      ">
                        Semestre
                      </p>

                      <h3 className="
                        text-2xl
                        font-black
                        text-[#1e2d4d]
                      ">

                        {semester.period}

                      </h3>

                    </div>

                    <ChevronRight
                      className="
                        text-slate-400
                      "
                    />

                  </div>

                  <div>

                    <p className={`
                      text-5xl
                      font-black
                      ${getColor(semester.gpa)}
                    `}>

                      {semester.gpa}

                    </p>

                    <p className="
                      text-sm
                      text-slate-500
                      mt-2
                    ">

                      {
                        semester
                        .courses.length
                      }
                      {' '}
                      materias

                    </p>

                  </div>

                </motion.div>

              )
            )
          }

        </div>

      </div>

    </Layout>

  )

}