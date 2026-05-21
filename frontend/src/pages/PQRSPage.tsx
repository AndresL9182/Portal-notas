import React, { useState } from 'react'

import Layout from '../components/Layout'

import {
  MessageSquare,
  Send,
  CheckCircle2,
  Plus,
  Search,
  Filter,
  History,
  HelpCircle,
  X
} from 'lucide-react'

export default function PQRSPage() {

  const [showForm, setShowForm] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [subject, setSubject] = useState('')

  const [description, setDescription] = useState('')

  const [type, setType] = useState('Petición')

  const [success, setSuccess] = useState(false)

  const [pqrsList, setPQRSList] = useState([
    {
      id: 'PQRS-001',
      type: 'Petición',
      subject: 'Solicitud certificado estudiantil',
      description: 'Necesito un certificado para prácticas.',
      status: 'En trámite',
      date: '20/05/2026'
    },

    {
      id: 'PQRS-002',
      type: 'Queja',
      subject: 'Problema con plataforma',
      description: 'No puedo acceder al módulo de notas.',
      status: 'Radicado',
      date: '18/05/2026'
    }
  ])

  const filteredList = pqrsList.filter((item) =>
    item.subject
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    const newPQRS = {
      id: `PQRS-00${pqrsList.length + 1}`,
      type,
      subject,
      description,
      status: 'Radicado',
      date: new Date().toLocaleDateString()
    }

    setPQRSList([
      newPQRS,
      ...pqrsList
    ])

    setSubject('')
    setDescription('')
    setShowForm(false)

    setSuccess(true)

    setTimeout(() => {
      setSuccess(false)
    }, 3000)

  }

  return (

    <Layout>

      <div className="space-y-6">

        {/* HEADER */}

        <div className="
          flex
          flex-col
          md:flex-row
          md:items-center
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

              <MessageSquare
                className="text-blue-500"
              />

              PQRS

            </h1>

            <p className="text-gray-500 mt-2">
              Gestión de peticiones,
              quejas, reclamos y sugerencias
            </p>

          </div>

          <button

            onClick={() =>
              setShowForm(true)
            }

            className="
              bg-[#14213d]
              text-white
              px-5
              py-3
              rounded-2xl
              flex
              items-center
              gap-2
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all
            "

          >

            <Plus size={18} />

            Nueva PQRS

          </button>

        </div>

        {/* SEARCH */}

        <div className="
          bg-white
          rounded-2xl
          p-4
          shadow-md
          flex
          flex-col
          md:flex-row
          gap-4
        ">

          <div className="
            relative
            flex-1
          ">

            <Search
              size={18}
              className="
                absolute
                left-4
                top-3.5
                text-gray-400
              "
            />

            <input

              type="text"

              placeholder="Buscar PQRS..."

              value={searchQuery}

              onChange={(e) =>
                setSearchQuery(
                  e.target.value
                )
              }

              className="
                w-full
                pl-12
                pr-4
                py-3
                rounded-xl
                border
                border-gray-200
                outline-none
              "

            />

          </div>

          <button className="
            px-5
            py-3
            rounded-xl
            bg-gray-100
            flex
            items-center
            gap-2
            font-semibold
          ">

            <Filter size={18} />

            Filtrar

          </button>

        </div>

        {/* LIST */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        ">

          {/* LEFT */}

          <div className="
            lg:col-span-2
            space-y-4
          ">

            {filteredList.map((item) => (

              <div

                key={item.id}

                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-md
                  border
                "

              >

                <div className="
                  flex
                  justify-between
                  items-center
                  mb-4
                ">

                  <div>

                    <p className="
                      text-xs
                      text-gray-400
                      font-semibold
                    ">

                      {item.id} • {item.date}

                    </p>

                    <h2 className="
                      text-lg
                      font-bold
                      text-gray-800
                    ">

                      {item.subject}

                    </h2>

                  </div>

                  <span className="
                    bg-blue-100
                    text-blue-600
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                  ">

                    {item.status}

                  </span>

                </div>

                <p className="
                  text-gray-600
                  text-sm
                ">

                  {item.description}

                </p>

              </div>

            ))}

            {filteredList.length === 0 && (

              <div className="
                bg-white
                rounded-2xl
                p-10
                text-center
                shadow-md
              ">

                <History
                  size={40}
                  className="
                    mx-auto
                    text-gray-300
                    mb-4
                  "
                />

                <p className="
                  text-gray-500
                  font-semibold
                ">

                  No hay resultados

                </p>

              </div>

            )}

          </div>

          {/* RIGHT */}

          <div className="
            bg-[#14213d]
            text-white
            rounded-3xl
            p-8
            shadow-xl
            relative
            overflow-hidden
          ">

            <HelpCircle
              size={60}
              className="
                text-white/10
                absolute
                bottom-4
                right-4
              "
            />

            <div className="
              relative
              z-10
            ">

              <h2 className="
                text-2xl
                font-bold
                mb-4
              ">

                Centro de Ayuda

              </h2>

              <p className="
                text-gray-300
                text-sm
                leading-relaxed
              ">

                Aquí puedes radicar solicitudes,
                hacer seguimiento y recibir
                respuestas institucionales.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}

      {showForm && (

        <div className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
        ">

          <div className="
            bg-white
            rounded-3xl
            w-full
            max-w-xl
            p-8
            shadow-2xl
          ">

            <div className="
              flex
              justify-between
              items-center
              mb-6
            ">

              <h2 className="
                text-2xl
                font-bold
                text-gray-800
              ">

                Nueva PQRS

              </h2>

              <button
                onClick={() =>
                  setShowForm(false)
                }
              >

                <X size={22} />

              </button>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <select

                value={type}

                onChange={(e) =>
                  setType(
                    e.target.value
                  )
                }

                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                "

              >

                <option>
                  Petición
                </option>

                <option>
                  Queja
                </option>

                <option>
                  Reclamo
                </option>

                <option>
                  Sugerencia
                </option>

              </select>

              <input

                type="text"

                placeholder="Asunto"

                value={subject}

                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }

                required

                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                "

              />

              <textarea

                placeholder="Descripción"

                value={description}

                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }

                required

                rows={5}

                className="
                  w-full
                  p-4
                  rounded-2xl
                  border
                "

              />

              <button

                type="submit"

                className="
                  w-full
                  bg-[#14213d]
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:scale-[1.02]
                  transition-all
                "

              >

                <Send size={18} />

                Enviar PQRS

              </button>

            </form>

          </div>

        </div>

      )}

      {/* SUCCESS */}

      {success && (

        <div className="
          fixed
          bottom-6
          right-6
          bg-green-500
          text-white
          px-6
          py-4
          rounded-2xl
          shadow-xl
          flex
          items-center
          gap-3
        ">

          <CheckCircle2 size={20} />

          PQRS enviada correctamente

        </div>

      )}

    </Layout>

  )

}