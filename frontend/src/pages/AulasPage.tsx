import { useState } from 'react'

import Layout from '../components/Layout'

import {
  Building2,
  Search,
  Users,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock4
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function AulasPage() {

  const [filter, setFilter] =
    useState('Todos')

  const [searchQuery, setSearchQuery] =
    useState('')

  const rooms = [

    {
      id: 1,
      name: 'Aula B-201',
      type: 'Salón Teórico',
      capacity: 35,
      location: 'Bloque B - Piso 2',
      status: 'Libre',
      currentActivity: '',
      nextFreeTime: ''
    },

    {
      id: 2,
      name: 'Lab Sistemas 1',
      type: 'Laboratorio',
      capacity: 28,
      location: 'Bloque C - Piso 1',
      status: 'Ocupado',
      currentActivity:
        'Programación Avanzada',
      nextFreeTime:
        'Disponible 4:00 PM'
    },

    {
      id: 3,
      name: 'Sala Multimedia',
      type: 'Sala Audiovisual',
      capacity: 50,
      location: 'Bloque A - Piso 3',
      status: 'Reservado',
      currentActivity:
        'Evento Institucional',
      nextFreeTime:
        'Reservado 2:00 PM - 6:00 PM'
    },

    {
      id: 4,
      name: 'Aula C-105',
      type: 'Salón Teórico',
      capacity: 40,
      location: 'Bloque C - Piso 1',
      status: 'Libre',
      currentActivity: '',
      nextFreeTime: ''
    }

  ]

  const filteredRooms =
    rooms.filter((room) => {

      const matchesFilter =
        filter === 'Todos' ||
        room.status === filter

      const matchesSearch =
        room.name
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          ) ||

        room.type
          .toLowerCase()
          .includes(
            searchQuery.toLowerCase()
          )

      return (
        matchesFilter &&
        matchesSearch
      )

    })

  const getStatusBadge = (
    status: string
  ) => {

    switch (status) {

      case 'Libre':

        return (

          <span className="
            flex
            items-center
            gap-1
            bg-green-50
            text-green-600
            px-3
            py-1
            rounded-full
            text-[10px]
            font-black
            uppercase
            tracking-wider
            border
            border-green-100
          ">

            <CheckCircle2
              className="w-3 h-3"
            />

            Disponible

          </span>

        )

      case 'Ocupado':

        return (

          <span className="
            flex
            items-center
            gap-1
            bg-red-50
            text-red-600
            px-3
            py-1
            rounded-full
            text-[10px]
            font-black
            uppercase
            tracking-wider
            border
            border-red-100
          ">

            <XCircle
              className="w-3 h-3"
            />

            Ocupado

          </span>

        )

      case 'Reservado':

        return (

          <span className="
            flex
            items-center
            gap-1
            bg-amber-50
            text-amber-600
            px-3
            py-1
            rounded-full
            text-[10px]
            font-black
            uppercase
            tracking-wider
            border
            border-amber-100
          ">

            <Clock4
              className="w-3 h-3"
            />

            Reservado

          </span>

        )

    }

  }

  return (

    <Layout>

      <div className="
        space-y-6
      ">

        {/* HEADER */}

        <div className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-4
        ">

          <div>

            <h1 className="
              text-3xl
              font-bold
              text-gray-800
              flex
              items-center
              gap-3
            ">

              <Building2
                className="
                  text-blue-500
                "
              />

              Aulas Disponibles

            </h1>

            <p className="
              text-gray-500
              mt-2
            ">

              Consulta el estado
              actual de aulas y
              laboratorios

            </p>

          </div>

          <div className="
            flex
            flex-wrap
            gap-2
          ">

            {[
              'Todos',
              'Libre',
              'Ocupado',
              'Reservado'
            ].map((status) => (

              <button

                key={status}

                onClick={() =>
                  setFilter(status)
                }

                className={`
                  px-4
                  py-2
                  rounded-2xl
                  text-sm
                  font-semibold
                  transition-all
                  ${
                    filter === status
                      ? `
                        bg-[#14213d]
                        text-white
                        shadow-lg
                      `
                      : `
                        bg-white
                        border
                        border-gray-200
                        text-gray-600
                      `
                  }
                `}

              >

                {status}

              </button>

            ))}

          </div>

        </div>

        {/* SEARCH */}

        <div className="
          relative
          max-w-md
        ">

          <Search
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              w-4
              h-4
              text-gray-400
            "
          />

          <input

            type="text"

            placeholder="
              Buscar aula o laboratorio...
            "

            value={searchQuery}

            onChange={(e) =>
              setSearchQuery(
                e.target.value
              )
            }

            className="
              w-full
              pl-12
              pr-6
              py-4
              bg-white
              border
              border-gray-200
              rounded-2xl
              outline-none
              focus:ring-2
              focus:ring-blue-200
            "

          />

        </div>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {filteredRooms.map(
            (room, idx) => (

              <motion.div

                key={room.id}

                initial={{
                  opacity: 0,
                  y: 20
                }}

                animate={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  delay:
                    idx * 0.05
                }}

                className="
                  bg-white
                  rounded-3xl
                  p-6
                  shadow-md
                  border
                  hover:shadow-xl
                  transition-all
                  relative
                  overflow-hidden
                "

              >

                <div className="
                  flex
                  justify-between
                  items-start
                  mb-5
                ">

                  <div className="
                    bg-blue-50
                    p-3
                    rounded-2xl
                    text-blue-500
                  ">

                    <Building2
                      className="
                        w-5
                        h-5
                      "
                    />

                  </div>

                  {getStatusBadge(
                    room.status
                  )}

                </div>

                <div className="
                  space-y-1
                ">

                  <h3 className="
                    text-lg
                    font-bold
                    text-gray-800
                  ">

                    {room.name}

                  </h3>

                  <p className="
                    text-sm
                    text-gray-500
                    font-medium
                  ">

                    {room.type}

                  </p>

                </div>

                <div className="
                  space-y-3
                  mt-5
                ">

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-600
                  ">

                    <Users
                      className="
                        w-4
                        h-4
                        text-gray-400
                      "
                    />

                    {room.capacity}
                    personas

                  </div>

                  <div className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-600
                  ">

                    <MapPin
                      className="
                        w-4
                        h-4
                        text-gray-400
                      "
                    />

                    {room.location}

                  </div>

                </div>

                {room.status !==
                  'Libre' && (

                  <div className={`
                    mt-5
                    p-4
                    rounded-2xl
                    border
                    ${
                      room.status ===
                      'Ocupado'
                        ? `
                          bg-red-50
                          border-red-100
                        `
                        : `
                          bg-amber-50
                          border-amber-100
                        `
                    }
                  `}>

                    <div className="
                      flex
                      items-center
                      gap-2
                      mb-2
                    ">

                      <Calendar
                        className="
                          w-4
                          h-4
                          text-gray-500
                        "
                      />

                      <p className="
                        text-xs
                        font-bold
                        uppercase
                        text-gray-600
                      ">

                        Actividad

                      </p>

                    </div>

                    <p className="
                      text-sm
                      font-semibold
                      text-gray-800
                    ">

                      {
                        room.currentActivity
                      }

                    </p>

                    <div className="
                      flex
                      items-center
                      gap-2
                      mt-3
                    ">

                      <Clock
                        className="
                          w-4
                          h-4
                          text-gray-400
                        "
                      />

                      <p className="
                        text-xs
                        font-semibold
                        text-gray-500
                      ">

                        {
                          room.nextFreeTime
                        }

                      </p>

                    </div>

                  </div>

                )}

                {room.status ===
                  'Libre' && (

                  <div className="
                    mt-5
                    bg-green-50
                    border
                    border-green-100
                    rounded-2xl
                    p-4
                    text-center
                  ">

                    <p className="
                      text-green-700
                      text-sm
                      font-bold
                    ">

                      Aula disponible

                    </p>

                  </div>

                )}

              </motion.div>

            )
          )}

        </div>

        {filteredRooms.length ===
          0 && (

          <div className="
            bg-white
            rounded-3xl
            border
            p-16
            text-center
          ">

            <Search
              className="
                w-12
                h-12
                mx-auto
                text-gray-300
                mb-4
              "
            />

            <h3 className="
              text-lg
              font-bold
              text-gray-700
            ">

              No se encontraron
              aulas

            </h3>

            <p className="
              text-gray-500
              mt-2
            ">

              Intenta con otro
              filtro o búsqueda

            </p>

          </div>

        )}

      </div>

    </Layout>

  )

}