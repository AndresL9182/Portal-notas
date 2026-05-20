import Layout from '../components/Layout'

import {
  Calendar,
  Clock,
  MapPin,
  PencilLine,
  AlertCircle
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function HorarioPage() {

  const schedule = [

    {
      id: 1,
      day: 'Lunes',
      courseName:
        'Bases de Datos II',
      time:
        '6:00 PM - 8:00 PM',
      classroom:
        'Aula 202',
      teacher:
        'Carlos Ramírez',
      note:
        'Entrega trabajo final'
    },

    {
      id: 2,
      day: 'Martes',
      courseName:
        'Ingeniería Software',
      time:
        '8:00 PM - 10:00 PM',
      classroom:
        'Aula 305',
      teacher:
        'Laura Gómez'
    },

    {
      id: 3,
      day: 'Miércoles',
      courseName:
        'Redes de Computadores',
      time:
        '6:00 PM - 8:00 PM',
      classroom:
        'Laboratorio Redes',
      teacher:
        'Andrés Pérez'
    },

    {
      id: 4,
      day: 'Jueves',
      courseName:
        'Sistemas Operativos',
      time:
        '8:00 PM - 10:00 PM',
      classroom:
        'Sala 4',
      teacher:
        'María Torres',
      note:
        'Quiz próximo jueves'
    }

  ]

  const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
  ]

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

            <span className="
              text-slate-600
            ">
              Horario de Clases
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

            <Calendar className="
              w-8
              h-8
              text-blue-500
            " />

            Horario Nocturno

          </h1>

        </section>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
          gap-6
        ">

          {days.map((day, idx) => {

            const dayClasses =
              schedule.filter(
                s => s.day === day
              )

            return (

              <motion.div

                key={day}

                initial={{
                  opacity: 0,
                  y: 10
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay: idx * 0.1
                }}

                className="
                  space-y-4
                "

              >

                {/* DIA */}

                <div className="
                  bg-[#1e2d4d]
                  text-white
                  py-3
                  px-4
                  rounded-2xl
                  text-xs
                  font-black
                  uppercase
                  tracking-widest
                  text-center
                ">

                  {day}

                </div>

                {/* CLASES */}

                <div className="
                  space-y-4
                ">

                  {dayClasses.length > 0 ? (

                    dayClasses.map(
                      (item) => (

                        <div

                          key={item.id}

                          className="
                            bg-white
                            rounded-3xl
                            shadow-md
                            p-5
                            space-y-4
                            border
                            border-transparent
                            hover:border-blue-400
                            transition-all
                          "

                        >

                          <div className="
                            flex
                            justify-between
                            items-start
                          ">

                            <h4 className="
                              text-sm
                              font-black
                              text-[#1e2d4d]
                              leading-tight
                            ">

                              {item.courseName}

                            </h4>

                          </div>

                          {/* INFO */}

                          <div className="
                            space-y-2
                          ">

                            <div className="
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-slate-500
                              font-bold
                            ">

                              <Clock className="
                                w-4
                                h-4
                              " />

                              {item.time}

                            </div>

                            <div className="
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-slate-500
                              font-bold
                            ">

                              <MapPin className="
                                w-4
                                h-4
                              " />

                              {item.classroom}

                            </div>

                            <div className="
                              flex
                              items-center
                              gap-2
                              text-xs
                              text-slate-400
                              italic
                            ">

                              <PencilLine className="
                                w-4
                                h-4
                              " />

                              {item.teacher}

                            </div>

                          </div>

                          {/* NOTE */}

                          {item.note && (

                            <div className="
                              bg-amber-50
                              p-3
                              rounded-xl
                              border
                              border-amber-100
                              flex
                              gap-2
                            ">

                              <AlertCircle className="
                                w-4
                                h-4
                                text-amber-500
                                shrink-0
                                mt-0.5
                              " />

                              <p className="
                                text-xs
                                text-amber-700
                                font-bold
                                leading-tight
                              ">

                                {item.note}

                              </p>

                            </div>

                          )}

                        </div>

                      )
                    )

                  ) : (

                    <div className="
                      h-24
                      border-2
                      border-dashed
                      border-slate-200
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      text-xs
                      font-bold
                      text-slate-300
                      bg-white
                    ">

                      Sin clases

                    </div>

                  )}

                </div>

              </motion.div>

            )

          })}

        </div>

      </div>

    </Layout>

  )

}