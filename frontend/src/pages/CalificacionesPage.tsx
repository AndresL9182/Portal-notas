import Layout from '../components/Layout'

import {
  AlertTriangle,
  TrendingUp,
  Book,
  BarChart3,
  GraduationCap,
  BookOpen,
  Calendar
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function CalificacionesPage() {

  const semester = {

    period: 'Semestre VI',

    year: '2026',

    gpa: 4.02,

    courses: [

      {
        id: 1,
        courseCode: 'BD202',
        courseName: 'Bases de Datos II',
        credits: 4,
        teacher: 'Carlos Ramírez',
        average: 4.3
      },

      {
        id: 2,
        courseCode: 'RC301',
        courseName: 'Redes de Computadores',
        credits: 3,
        teacher: 'Laura Gómez',
        average: 3.8
      },

      {
        id: 3,
        courseCode: 'IS401',
        courseName: 'Ingeniería de Software',
        credits: 4,
        teacher: 'Andrés Pérez',
        average: 4.6
      },

      {
        id: 4,
        courseCode: 'SO210',
        courseName: 'Sistemas Operativos',
        credits: 3,
        teacher: 'María Torres',
        average: 2.9
      }

    ]

  }

  const gpa = semester.gpa

  const riskCoursesCount =
    semester.courses.filter(
      c => (c.average || 0) < 3.0
    ).length

  const getStatusConfig = (
    score: number
  ) => {

    if (score < 3.0) {

      return {
        label: 'En riesgo',
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500'
      }

    }

    if (score < 4.0) {

      return {
        label: 'Medio',
        colorClass: 'text-blue-500',
        bgClass: 'bg-blue-500'
      }

    }

    if (score < 4.6) {

      return {
        label: 'Alto',
        colorClass: 'text-green-500',
        bgClass: 'bg-green-500'
      }

    }

    return {
      label: 'Superior',
      colorClass: 'text-yellow-500',
      bgClass: 'bg-yellow-500'
    }

  }

  const getAlertConfig = () => {

    if (gpa < 3.0) {

      return {
        title: 'Riesgo Académico',
        bg: 'bg-red-50',
        border: 'border-red-500',
        iconBg: 'bg-red-500',
        textTitle: 'text-red-700',
        textDesc: 'text-red-600',
        icon: AlertTriangle
      }

    }

    if (gpa < 4.0) {

      return {
        title: 'Rendimiento Medio',
        bg: 'bg-blue-50',
        border: 'border-blue-500',
        iconBg: 'bg-blue-500',
        textTitle: 'text-blue-700',
        textDesc: 'text-blue-600',
        icon: TrendingUp
      }

    }

    if (gpa < 4.6) {

      return {
        title: 'Rendimiento Alto',
        bg: 'bg-green-50',
        border: 'border-green-500',
        iconBg: 'bg-green-500',
        textTitle: 'text-green-700',
        textDesc: 'text-green-600',
        icon: Book
      }

    }

    return {
      title: 'Rendimiento Superior',
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      iconBg: 'bg-yellow-500',
      textTitle: 'text-yellow-700',
      textDesc: 'text-yellow-600',
      icon: Book
    }

  }

  const alert = getAlertConfig()

  return (

    <Layout>

      <div className="space-y-6">

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

            <span>Calificaciones</span>

            <span>•</span>

            <span className="
              text-slate-600
            ">
              Semestre Actual
            </span>

          </div>

          <div className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            justify-between
            gap-4
            mb-8
          ">

            <div className="
              flex
              items-center
              gap-4
            ">

              <div className="
                w-14
                h-14
                bg-[#14213d]
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-lg
              ">

                <BookOpen className="
                  w-7
                  h-7
                  text-yellow-400
                " />

              </div>

              <div>

                <h2 className="
                  text-3xl
                  font-black
                  text-[#1e2d4d]
                ">

                  {semester.period}

                </h2>

                <p className="
                  text-xs
                  font-black
                  text-slate-400
                  uppercase
                  tracking-[0.2em]
                ">

                  {semester.year}

                </p>

              </div>

            </div>

            <div className="
              bg-white
              px-6
              py-3
              rounded-2xl
              border
              border-slate-100
              shadow-sm
              flex
              items-center
              gap-4
            ">

              <div className="
                flex
                items-center
                gap-2
              ">

                <Calendar className="
                  w-4
                  h-4
                  text-blue-500
                " />

                <span className="
                  text-xs
                  font-black
                  text-slate-400
                  uppercase
                ">

                  Semestre Actual

                </span>

              </div>

              <div className="
                w-px
                h-6
                bg-slate-100
              " />

              <div className="
                text-sm
                font-black
                text-blue-500
              ">

                Activo

              </div>

            </div>

          </div>

        </section>

        {/* ALERT */}

        <div className={`
          ${alert.bg}
          border-l-4
          ${alert.border}
          p-4
          rounded-r-2xl
          flex
          items-center
          gap-4
        `}>

          <div className={`
            ${alert.iconBg}
            p-3
            rounded-full
          `}>

            <alert.icon className="
              w-5
              h-5
              text-white
            " />

          </div>

          <div className="flex-1">

            <h3 className={`
              text-lg
              font-bold
              ${alert.textTitle}
            `}>

              {alert.title}

            </h3>

            <p className={`
              text-sm
              ${alert.textDesc}
            `}>

              Promedio actual:
              {' '}
              {gpa.toFixed(2)}
              {' • '}
              {riskCoursesCount}
              {' '}
              materia(s) en riesgo

            </p>

          </div>

        </div>

        {/* SUMMARY */}

        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4
        ">

          {
            [

              {
                label: 'Promedio General',
                value: semester.gpa.toFixed(2),
                icon: TrendingUp,
                color: 'text-green-600',
                bg: 'bg-green-50'
              },

              {
                label: 'Promedio Semestre',
                value: semester.gpa.toFixed(2),
                icon: BarChart3,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },

              {
                label: 'Créditos',
                value:
                  semester.courses.reduce(
                    (acc, c) =>
                      acc + c.credits,
                    0
                  ),
                icon: GraduationCap,
                color: 'text-indigo-600',
                bg: 'bg-indigo-50'
              },

              {
                label: 'Materias',
                value:
                  semester.courses.length,
                icon: BookOpen,
                color: 'text-orange-600',
                bg: 'bg-orange-50'
              }

            ].map((stat, i) => (

              <div

                key={i}

                className={`
                  p-4
                  rounded-3xl
                  border
                  border-slate-100
                  ${stat.bg}
                  flex
                  items-center
                  gap-4
                  shadow-sm
                `}

              >

                <div className={`
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  ${stat.color}
                  shadow-sm
                `}>

                  <stat.icon className="
                    w-6
                    h-6
                  " />

                </div>

                <div>

                  <p className="
                    text-xs
                    font-black
                    uppercase
                    tracking-widest
                    text-slate-400
                  ">

                    {stat.label}

                  </p>

                  <p className={`
                    text-2xl
                    font-black
                    ${stat.color}
                  `}>

                    {stat.value}

                  </p>

                </div>

              </div>

            ))
          }

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

            <thead>

              <tr className="
                bg-[#1e2d4d]
                text-white
                text-xs
                uppercase
              ">

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Código
                </th>

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Materia
                </th>

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Créditos
                </th>

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Docente
                </th>

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Nota
                </th>

                <th className="
                  px-6
                  py-4
                  text-left
                ">
                  Estado
                </th>

              </tr>

            </thead>

            <tbody>

              {
                semester.courses.map(
                  (course, index) => {

                    const status =
                      getStatusConfig(
                        course.average || 0
                      )

                    return (

                      <motion.tr

                        key={course.id}

                        initial={{
                          opacity: 0,
                          y: 10
                        }}

                        animate={{
                          opacity: 1,
                          y: 0
                        }}

                        transition={{
                          delay:
                            index * 0.1
                        }}

                        className="
                          border-b
                          hover:bg-slate-50
                        "

                      >

                        <td className="
                          px-6
                          py-4
                          font-mono
                        ">

                          {course.courseCode}

                        </td>

                        <td className="
                          px-6
                          py-4
                          font-bold
                        ">

                          {course.courseName}

                        </td>

                        <td className="
                          px-6
                          py-4
                        ">

                          {course.credits}

                        </td>

                        <td className="
                          px-6
                          py-4
                        ">

                          {course.teacher}

                        </td>

                        <td className="
                          px-6
                          py-4
                        ">

                          <div className="
                            flex
                            items-center
                            gap-3
                          ">

                            <div className="
                              w-20
                              h-2
                              bg-slate-200
                              rounded-full
                              overflow-hidden
                            ">

                              <div

                                className={`
                                  h-full
                                  rounded-full
                                  ${status.bgClass}
                                `}

                                style={{
                                  width:
                                    `${course.average * 20}%`
                                }}

                              />

                            </div>

                            <span className={`
                              font-black
                              ${status.colorClass}
                            `}>

                              {course.average.toFixed(1)}

                            </span>

                          </div>

                        </td>

                        <td className="
                          px-6
                          py-4
                        ">

                          <span className={`
                            text-xs
                            font-bold
                            uppercase
                            ${status.colorClass}
                          `}>

                            {status.label}

                          </span>

                        </td>

                      </motion.tr>

                    )

                  }
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </Layout>

  )

}