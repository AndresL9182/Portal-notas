import { useState } from 'react'

import Layout from '../components/Layout'

import {
  LifeBuoy,
  Send,
  Clock,
  CheckCircle2,
  Plus,
  Search,
  Phone,
  Mail,
  Globe,
  X,
  ChevronRight
} from 'lucide-react'

import { motion, AnimatePresence } from 'framer-motion'

export default function SoportePage() {

  const [tickets, setTickets] = useState([

    {
      id: 'TICK-001',
      category: 'Técnico',
      priority: 'Alta',
      subject: 'Error al cargar el horario',
      description:
        'El sistema no muestra mi horario académico.',
      status: 'En Progreso',
      createdAt: '19/05/2026 08:30'
    },

    {
      id: 'TICK-002',
      category: 'Acceso/Password',
      priority: 'Media',
      subject: 'Recuperar contraseña',
      description:
        'Olvidé mi contraseña institucional.',
      status: 'Resuelto',
      createdAt: '18/05/2026 14:20'
    }

  ])

  const [showForm, setShowForm] =
    useState(false)

  const [searchQuery, setSearchQuery] =
    useState('')

  const [category, setCategory] =
    useState('Técnico')

  const [priority, setPriority] =
    useState('Media')

  const [subject, setSubject] =
    useState('')

  const [description, setDescription] =
    useState('')

  const [isSubmitting, setIsSubmitting] =
    useState(false)

  const [showSuccess, setShowSuccess] =
    useState(false)

  const faqs = [

    {
      q: '¿Cómo recupero mi clave del correo?',
      a: 'Debes dirigirte a la oficina de sistemas o crear un ticket.'
    },

    {
      q: '¿Dónde veo mis calificaciones finales?',
      a: 'Puedes revisarlas en Historial Académico.'
    },

    {
      q: '¿Cómo solicito un supletorio?',
      a: 'Debes realizar la solicitud ante Registro y Control.'
    }

  ]

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    setIsSubmitting(true)

    setTimeout(() => {

      const newTicket = {

        id: `TICK-00${tickets.length + 1}`,

        category,

        priority,

        subject,

        description,

        status: 'Abierto',

        createdAt:
          new Date().toLocaleString('es-ES')

      }

      setTickets([
        newTicket,
        ...tickets
      ])

      setIsSubmitting(false)

      setShowForm(false)

      setShowSuccess(true)

      setSubject('')

      setDescription('')

      setTimeout(() => {

        setShowSuccess(false)

      }, 3000)

    }, 1500)

  }

  const filteredTickets =
    tickets.filter((ticket) =>

      ticket.subject
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        ) ||

      ticket.id
        .toLowerCase()
        .includes(
          searchQuery.toLowerCase()
        )

    )

  const getPriorityColor = (
    priority: string
  ) => {

    switch (priority) {

      case 'Baja':
        return 'bg-slate-100 text-slate-600'

      case 'Media':
        return 'bg-blue-50 text-blue-600'

      case 'Alta':
        return 'bg-red-50 text-red-600'

      default:
        return 'bg-slate-100 text-slate-600'

    }

  }

  const getStatusIcon = (
    status: string
  ) => {

    switch (status) {

      case 'Abierto':
        return (
          <Clock className="
            w-4
            h-4
            text-amber-500
          " />
        )

      case 'En Progreso':
        return (
          <div className="
            w-4
            h-4
            border-2
            border-blue-500
            border-t-transparent
            rounded-full
            animate-spin
          " />
        )

      case 'Resuelto':
        return (
          <CheckCircle2 className="
            w-4
            h-4
            text-green-500
          " />
        )

      default:
        return null

    }

  }

  return (

    <Layout>

      <div className="
        space-y-8
        pb-12
      ">

        {/* HEADER */}

        <section className="
          flex
          flex-col
          md:flex-row
          md:items-center
          justify-between
          gap-4
        ">

          <div>

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
                Centro de Soporte
              </span>

            </div>

            <h1 className="
              text-2xl
              font-bold
              text-gray-800
              flex
              items-center
              gap-3
            ">

              <LifeBuoy className="
                text-blue-500
              " />

              Soporte y Mesa de Ayuda

            </h1>

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

            Crear Ticket

          </button>

        </section>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        ">

          {/* LEFT */}

          <div className="
            space-y-6
          ">

            {/* CONTACTOS */}

            <div className="
              bg-white
              rounded-3xl
              p-6
              shadow-md
              border
              space-y-6
            ">

              <h3 className="
                text-xs
                font-black
                text-[#14213d]
                uppercase
                tracking-widest
              ">

                Canales de Atención

              </h3>

              <div className="
                space-y-4
              ">

                {[
                  {
                    icon: Phone,
                    label: 'Línea Atención',
                    value: '(602) 8220517'
                  },

                  {
                    icon: Mail,
                    label: 'Correo',
                    value:
                      'sistemas@unicomfacauca.edu.co'
                  },

                  {
                    icon: Globe,
                    label: 'Portal Ayuda',
                    value:
                      'ayuda.unicomfacauca.edu.co'
                  }

                ].map((item, index) => (

                  <div

                    key={index}

                    className="
                      flex
                      items-start
                      gap-3
                      p-4
                      rounded-2xl
                      bg-gray-50
                      border
                    "

                  >

                    <div className="
                      p-2
                      rounded-xl
                      bg-white
                      shadow
                    ">

                      <item.icon
                        size={18}
                        className="
                          text-blue-500
                        "
                      />

                    </div>

                    <div>

                      <p className="
                        text-xs
                        text-gray-400
                        uppercase
                        font-bold
                      ">

                        {item.label}

                      </p>

                      <p className="
                        text-sm
                        font-bold
                        text-gray-700
                      ">

                        {item.value}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* FAQ */}

            <div className="
              bg-white
              rounded-3xl
              p-6
              shadow-md
              border
              space-y-4
            ">

              <h3 className="
                text-xs
                font-black
                text-[#14213d]
                uppercase
                tracking-widest
              ">

                Preguntas Frecuentes

              </h3>

              <div className="
                space-y-3
              ">

                {faqs.map((faq, index) => (

                  <div

                    key={index}

                    className="
                      p-4
                      rounded-2xl
                      bg-gray-50
                      hover:bg-gray-100
                      transition-all
                      cursor-pointer
                    "

                  >

                    <div className="
                      flex
                      items-center
                      justify-between
                    ">

                      <p className="
                        text-sm
                        font-bold
                        text-gray-700
                      ">

                        {faq.q}

                      </p>

                      <ChevronRight
                        size={16}
                        className="
                          text-gray-400
                        "
                      />

                    </div>

                    <p className="
                      text-xs
                      text-gray-500
                      mt-2
                    ">

                      {faq.a}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="
            lg:col-span-2
            space-y-6
          ">

            {/* SEARCH */}

            <div className="
              bg-white
              rounded-3xl
              p-5
              shadow-md
              border
            ">

              <div className="
                relative
              ">

                <Search className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  w-4
                  h-4
                  text-gray-400
                " />

                <input

                  type="text"

                  placeholder="
                    Buscar ticket...
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
                    pr-4
                    py-4
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    outline-none
                  "

                />

              </div>

            </div>

            {/* TICKETS */}

            <div className="
              space-y-4
            ">

              {filteredTickets.map(
                (ticket, index) => (

                <motion.div

                  key={ticket.id}

                  initial={{
                    opacity: 0,
                    y: 15
                  }}

                  animate={{
                    opacity: 1,
                    y: 0
                  }}

                  transition={{
                    delay: index * 0.05
                  }}

                  className="
                    bg-white
                    rounded-3xl
                    p-6
                    shadow-md
                    border
                    hover:shadow-xl
                    transition-all
                  "

                >

                  <div className="
                    flex
                    flex-col
                    md:flex-row
                    gap-6
                  ">

                    <div className="
                      min-w-[120px]
                      bg-gray-50
                      rounded-2xl
                      p-4
                      border
                      text-center
                    ">

                      <p className="
                        text-xs
                        text-gray-400
                        uppercase
                        font-bold
                      ">

                        Categoría

                      </p>

                      <p className="
                        text-sm
                        font-bold
                        text-gray-700
                        mt-1
                      ">

                        {ticket.category}

                      </p>

                      <div className="
                        mt-4
                      ">

                        <span className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-bold
                          ${getPriorityColor(
                            ticket.priority
                          )}
                        `}>

                          {ticket.priority}

                        </span>

                      </div>

                    </div>

                    <div className="
                      flex-1
                      space-y-3
                    ">

                      <div className="
                        flex
                        items-center
                        justify-between
                      ">

                        <div className="
                          flex
                          items-center
                          gap-2
                        ">

                          {getStatusIcon(
                            ticket.status
                          )}

                          <span className="
                            text-xs
                            uppercase
                            font-bold
                            text-gray-600
                          ">

                            {ticket.status}

                          </span>

                        </div>

                        <span className="
                          text-xs
                          text-gray-400
                          font-semibold
                        ">

                          {ticket.id}

                        </span>

                      </div>

                      <h3 className="
                        text-lg
                        font-bold
                        text-[#14213d]
                      ">

                        {ticket.subject}

                      </h3>

                      <p className="
                        text-sm
                        text-gray-500
                      ">

                        {ticket.description}

                      </p>

                      <p className="
                        text-xs
                        text-gray-400
                        font-semibold
                      ">

                        Creado:
                        {' '}
                        {ticket.createdAt}

                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}

      <AnimatePresence>

        {showForm && (

          <div className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            z-50
            flex
            items-center
            justify-center
            p-4
          ">

            <motion.div

              initial={{
                opacity: 0,
                scale: 0.95
              }}

              animate={{
                opacity: 1,
                scale: 1
              }}

              exit={{
                opacity: 0,
                scale: 0.95
              }}

              className="
                bg-white
                rounded-3xl
                w-full
                max-w-2xl
                shadow-2xl
                overflow-hidden
              "

            >

              <div className="
                bg-[#14213d]
                p-8
                text-white
                flex
                items-center
                justify-between
              ">

                <div>

                  <h2 className="
                    text-xl
                    font-bold
                  ">

                    Nuevo Ticket

                  </h2>

                  <p className="
                    text-sm
                    text-gray-300
                    mt-1
                  ">

                    Reporta un problema
                    técnico o académico

                  </p>

                </div>

                <button

                  onClick={() =>
                    setShowForm(false)
                  }

                >

                  <X />

                </button>

              </div>

              <form

                onSubmit={handleSubmit}

                className="
                  p-8
                  space-y-6
                "

              >

                <div className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                ">

                  <div>

                    <label className="
                      text-sm
                      font-semibold
                      text-gray-500
                    ">

                      Categoría

                    </label>

                    <select

                      value={category}

                      onChange={(e) =>
                        setCategory(
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        mt-2
                        p-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                      "

                    >

                      <option>
                        Técnico
                      </option>

                      <option>
                        Académico
                      </option>

                      <option>
                        Acceso/Password
                      </option>

                    </select>

                  </div>

                  <div>

                    <label className="
                      text-sm
                      font-semibold
                      text-gray-500
                    ">

                      Prioridad

                    </label>

                    <select

                      value={priority}

                      onChange={(e) =>
                        setPriority(
                          e.target.value
                        )
                      }

                      className="
                        w-full
                        mt-2
                        p-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                      "

                    >

                      <option>
                        Baja
                      </option>

                      <option>
                        Media
                      </option>

                      <option>
                        Alta
                      </option>

                    </select>

                  </div>

                </div>

                <div>

                  <label className="
                    text-sm
                    font-semibold
                    text-gray-500
                  ">

                    Asunto

                  </label>

                  <input

                    required

                    value={subject}

                    onChange={(e) =>
                      setSubject(
                        e.target.value
                      )
                    }

                    className="
                      w-full
                      mt-2
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      bg-gray-50
                    "

                  />

                </div>

                <div>

                  <label className="
                    text-sm
                    font-semibold
                    text-gray-500
                  ">

                    Descripción

                  </label>

                  <textarea

                    required

                    rows={5}

                    value={description}

                    onChange={(e) =>
                      setDescription(
                        e.target.value
                      )
                    }

                    className="
                      w-full
                      mt-2
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      bg-gray-50
                      resize-none
                    "

                  />

                </div>

                <div className="
                  flex
                  gap-4
                ">

                  <button

                    type="button"

                    onClick={() =>
                      setShowForm(false)
                    }

                    className="
                      flex-1
                      bg-gray-200
                      text-gray-700
                      py-4
                      rounded-2xl
                      font-semibold
                    "

                  >

                    Cancelar

                  </button>

                  <button

                    type="submit"

                    disabled={isSubmitting}

                    className="
                      flex-1
                      bg-[#14213d]
                      text-white
                      py-4
                      rounded-2xl
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                    "

                  >

                    {isSubmitting ? (

                      <div className="
                        w-5
                        h-5
                        border-2
                        border-white/30
                        border-t-white
                        rounded-full
                        animate-spin
                      " />

                    ) : (

                      <>

                        <Send size={18} />

                        Enviar Ticket

                      </>

                    )}

                  </button>

                </div>

              </form>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

      {/* ALERTA */}

      <AnimatePresence>

        {showSuccess && (

          <motion.div

            initial={{
              opacity: 0,
              y: 20
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            exit={{
              opacity: 0,
              y: 20
            }}

            className="
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
              z-50
            "

          >

            <CheckCircle2 size={18} />

            Ticket creado correctamente

          </motion.div>

        )}

      </AnimatePresence>

    </Layout>

  )

}