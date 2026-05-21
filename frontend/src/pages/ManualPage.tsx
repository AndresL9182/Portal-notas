import React, { useState } from 'react'

import Layout from '../components/Layout'

import {
  Book,
  Layout as LayoutIcon,
  GraduationCap,
  Calendar,
  Library,
  Star,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

import {
  motion,
  AnimatePresence
} from 'framer-motion'

const MANUAL_SECTIONS = [

  {
    id: 'intro',
    title: 'Primeros Pasos',
    description:
      'Guía de inicio rápido y navegación general del portal.',
    icon: Book,
    color:
      'bg-blue-50 text-blue-600 border-blue-100',
    content: (
      <div className="space-y-4">

        <p className="
          text-sm
          text-slate-600
          leading-relaxed
        ">

          Bienvenido al Portal
          Estudiantil de
          UNICOMFACAUCA.

        </p>

        <div className="
          bg-blue-50
          p-4
          rounded-xl
          border
          border-blue-100
        ">

          <h4 className="
            text-[10px]
            font-black
            text-blue-700
            uppercase
            mb-2
          ">

            Diseño Responsivo

          </h4>

          <p className="
            text-[10px]
            text-blue-600
            font-medium
          ">

            Puedes acceder
            desde PC, tablet
            o celular.

          </p>

        </div>

      </div>
    )
  },

  {
    id: 'dashboard',
    title: 'Panel Principal',
    description:
      'Aprende a interpretar tu progreso académico.',
    icon: LayoutIcon,
    color:
      'bg-indigo-50 text-indigo-600 border-indigo-100',
    content: (
      <div className="space-y-4">

        <ul className="
          list-disc
          list-inside
          text-sm
          text-slate-600
          space-y-2
        ">

          <li>
            Promedio acumulado
          </li>

          <li>
            Materias en riesgo
          </li>

          <li>
            Próximas clases
          </li>

        </ul>

      </div>
    )
  },

  {
    id: 'grades',
    title: 'Gestión de Notas',
    description:
      'Consulta de parciales y promedios.',
    icon: GraduationCap,
    color:
      'bg-emerald-50 text-emerald-600 border-emerald-100',
    content: (
      <div className="space-y-4">

        <p className="
          text-sm
          text-slate-600
        ">

          Consulta todas
          tus notas y
          promedios.

        </p>

      </div>
    )
  },

  {
    id: 'schedule',
    title: 'Horario Escolar',
    description:
      'Visualización de clases y salones.',
    icon: Calendar,
    color:
      'bg-amber-50 text-amber-600 border-amber-100',
    content: (
      <div className="space-y-4">

        <ul className="
          list-disc
          list-inside
          text-sm
          text-slate-600
          space-y-2
        ">

          <li>
            Horarios
          </li>

          <li>
            Salones
          </li>

          <li>
            Recordatorios
          </li>

        </ul>

      </div>
    )
  },

  {
    id: 'library',
    title: 'Biblioteca Virtual',
    description:
      'Acceso a libros y bases de datos.',
    icon: Library,
    color:
      'bg-cyan-50 text-cyan-600 border-cyan-100',
    content: (
      <div className="space-y-4">

        <p className="
          text-sm
          text-slate-600
        ">

          Busca libros,
          artículos y
          recursos académicos.

        </p>

      </div>
    )
  },

  {
    id: 'eval',
    title: 'Evaluación Docente',
    description:
      'Califica a tus docentes.',
    icon: Star,
    color:
      'bg-purple-50 text-purple-600 border-purple-100',
    content: (
      <div className="space-y-4">

        <p className="
          text-sm
          text-slate-600
        ">

          Evalúa el desempeño
          de tus profesores.

        </p>

      </div>
    )
  },

  {
    id: 'pqrs',
    title: 'PQRS y Soporte',
    description:
      'Solicitudes y ayuda técnica.',
    icon: MessageSquare,
    color:
      'bg-pink-50 text-pink-600 border-pink-100',
    content: (
      <div className="space-y-4">

        <p className="
          text-sm
          text-slate-600
        ">

          Envía solicitudes,
          peticiones o reportes.

        </p>

      </div>
    )
  }

]

export default function ManualPage() {

  const [
    selectedId,
    setSelectedId
  ] = useState<string | null>(
    null
  )

  const selectedSection =
    MANUAL_SECTIONS.find(
      s => s.id === selectedId
    )

  return (

    <Layout>

      <div className="
        space-y-8
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

            <span>
              Configuración
            </span>

            <span>•</span>

            <span className="
              text-slate-600
            ">
              Manual
            </span>

          </div>

          <h1 className="
            text-2xl
            font-bold
            text-slate-800
            flex
            items-center
            gap-3
          ">

            <Book className="
              w-6
              h-6
              text-blue-500
            " />

            Manual de Usuario

          </h1>

        </section>

        {/* CARDS */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {
            MANUAL_SECTIONS.map(
              (section, idx) => (

                <motion.button

                  key={section.id}

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

                  onClick={() =>
                    setSelectedId(
                      section.id
                    )
                  }

                  className="
                    bg-white
                    rounded-3xl
                    border
                    border-slate-100
                    p-8
                    text-left
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                  "

                >

                  <div className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    border
                    mb-6
                    ${section.color}
                  `}>

                    <section.icon
                      className="
                        w-7
                        h-7
                      "
                    />

                  </div>

                  <h3 className="
                    text-lg
                    font-black
                    text-[#1e2d4d]
                  ">

                    {section.title}

                  </h3>

                  <p className="
                    text-sm
                    text-slate-500
                    mt-3
                    leading-relaxed
                  ">

                    {section.description}

                  </p>

                  <div className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-blue-500
                    text-xs
                    font-black
                    uppercase
                  ">

                    Abrir

                    <ArrowRight
                      className="
                        w-4
                        h-4
                      "
                    />

                  </div>

                </motion.button>

              )
            )
          }

        </div>

        {/* MODAL */}

        <AnimatePresence>

          {
            selectedId &&
            selectedSection && (

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
                    rounded-[2rem]
                    w-full
                    max-w-2xl
                    overflow-hidden
                    shadow-2xl
                  "

                >

                  {/* HEADER */}

                  <div className="
                    bg-[#1e2d4d]
                    p-10
                    text-white
                  ">

                    <div className="
                      flex
                      items-center
                      gap-5
                    ">

                      <div className={`
                        w-16
                        h-16
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        ${selectedSection.color}
                      `}>

                        <selectedSection.icon
                          className="
                            w-8
                            h-8
                          "
                        />

                      </div>

                      <div>

                        <h2 className="
                          text-2xl
                          font-black
                        ">

                          {
                            selectedSection.title
                          }

                        </h2>

                      </div>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="
                    p-10
                    space-y-8
                  ">

                    {
                      selectedSection.content
                    }

                    <button

                      onClick={() =>
                        setSelectedId(
                          null
                        )
                      }

                      className="
                        w-full
                        py-4
                        bg-[#1e2d4d]
                        text-white
                        rounded-2xl
                        font-black
                        uppercase
                        tracking-widest
                        hover:bg-[#24395f]
                        transition-all
                      "

                    >

                      Entendido

                    </button>

                  </div>

                </motion.div>

              </div>

            )
          }

        </AnimatePresence>

      </div>

    </Layout>

  )

}