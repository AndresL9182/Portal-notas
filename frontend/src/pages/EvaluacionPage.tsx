import { useState } from 'react'

import Layout from '../components/Layout'

import {
  Star,
  CheckCircle2,
  User,
  BookOpen,
  Send,
  TrendingUp,
  Info
} from 'lucide-react'

export default function EvaluacionPage() {

  const [showSuccess, setShowSuccess] =
    useState(false)

  const [selectedTeacher, setSelectedTeacher] =
    useState('1')

  const [ratings, setRatings] =
    useState({
      dominio: 0,
      claridad: 0,
      recursos: 0,
      puntualidad: 0
    })

  const [comment, setComment] =
    useState('')

  const [teachers, setTeachers] =
    useState([

      {
        id: '1',
        teacherName:
          'Carlos Ramírez',
        courseName:
          'Bases de Datos',
        isEvaluated: false
      },

      {
        id: '2',
        teacherName:
          'María López',
        courseName:
          'Programación Web',
        isEvaluated: false
      },

      {
        id: '3',
        teacherName:
          'Andrés Gómez',
        courseName:
          'Ingeniería de Software',
        isEvaluated: true
      }

    ])

  const selected =
    teachers.find(
      t => t.id === selectedTeacher
    )

  const pendingCount =
    teachers.filter(
      t => !t.isEvaluated
    ).length

  const submitEvaluation = () => {

    setTeachers(
      teachers.map(t =>
        t.id === selectedTeacher
          ? {
              ...t,
              isEvaluated: true
            }
          : t
      )
    )

    setShowSuccess(true)

    setTimeout(() => {

      setShowSuccess(false)

    }, 3000)

  }

  const RatingStars = ({
    value,
    onChange,
    label
  }: {
    value: number
    onChange: (
      v: number
    ) => void
    label: string
  }) => (

    <div className="space-y-3">

      <div className="
        flex
        justify-between
        items-center
      ">

        <p className="
          text-xs
          font-bold
          text-gray-500
        ">

          {label}

        </p>

        <span className="
          text-sm
          font-bold
          text-blue-600
        ">

          {value}/5

        </span>

      </div>

      <div className="
        flex
        gap-2
      ">

        {[1, 2, 3, 4, 5].map(
          (star) => (

            <button
              key={star}
              type="button"
              onClick={() =>
                onChange(star)
              }
              className={`
                transition-all
                ${
                  star <= value
                    ? 'text-yellow-400 scale-110'
                    : 'text-gray-300'
                }
              `}
            >

              <Star
                className={`
                  w-7
                  h-7
                  ${
                    star <= value
                      ? 'fill-current'
                      : ''
                  }
                `}
              />

            </button>

          )
        )}

      </div>

    </div>

  )

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

              <TrendingUp
                className="
                  text-blue-500
                "
              />

              Evaluación Docente

            </h1>

            <p className="
              text-gray-500
              mt-2
            ">

              Evalúa el desempeño
              de tus docentes

            </p>

          </div>

          <div className="
            bg-blue-50
            border
            border-blue-100
            px-5
            py-3
            rounded-2xl
            flex
            items-center
            gap-3
          ">

            <div className="
              w-3
              h-3
              rounded-full
              bg-blue-500
              animate-pulse
            " />

            <p className="
              text-sm
              font-bold
              text-blue-700
            ">

              {pendingCount}
              {' '}
              pendientes

            </p>

          </div>

        </div>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-6
        ">

          {/* LEFT */}

          <div className="
            lg:col-span-4
            space-y-4
          ">

            <div className="
              bg-white
              rounded-3xl
              p-6
              shadow-md
              border
              space-y-4
            ">

              <h3 className="
                text-lg
                font-bold
                text-gray-800
              ">

                Tus Docentes

              </h3>

              <div className="
                space-y-3
              ">

                {teachers.map(
                  (teacher) => (

                    <button
                      key={teacher.id}
                      onClick={() =>
                        setSelectedTeacher(
                          teacher.id
                        )
                      }
                      className={`
                        w-full
                        p-4
                        rounded-2xl
                        text-left
                        transition-all
                        flex
                        items-center
                        justify-between
                        ${
                          selectedTeacher ===
                          teacher.id
                            ? 'bg-[#14213d] text-white shadow-lg'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }
                      `}
                    >

                      <div>

                        <p className="
                          text-xs
                          uppercase
                          font-bold
                          opacity-70
                        ">

                          {
                            teacher.courseName
                          }

                        </p>

                        <p className="
                          text-sm
                          font-semibold
                        ">

                          {
                            teacher.teacherName
                          }

                        </p>

                      </div>

                      {teacher.isEvaluated ? (

                        <CheckCircle2
                          className="
                            text-green-400
                          "
                        />

                      ) : (

                        <div className="
                          w-3
                          h-3
                          rounded-full
                          bg-gray-300
                        " />

                      )}

                    </button>

                  )
                )}

              </div>

            </div>

            <div className="
              bg-yellow-50
              border
              border-yellow-100
              rounded-2xl
              p-5
              flex
              gap-3
            ">

              <Info
                className="
                  text-yellow-500
                  shrink-0
                "
              />

              <p className="
                text-sm
                text-yellow-700
                font-medium
              ">

                Tus respuestas son
                completamente anónimas
                y ayudan a mejorar
                la calidad académica.

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="
            lg:col-span-8
          ">

            {selected &&
            !selected.isEvaluated ? (

              <div className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border
                space-y-8
              ">

                <div className="
                  flex
                  items-center
                  gap-4
                ">

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-500
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                  ">

                    <User />

                  </div>

                  <div>

                    <h2 className="
                      text-2xl
                      font-bold
                      text-gray-800
                    ">

                      {
                        selected.teacherName
                      }

                    </h2>

                    <p className="
                      text-gray-500
                      flex
                      items-center
                      gap-2
                      mt-1
                    ">

                      <BookOpen
                        size={16}
                      />

                      {
                        selected.courseName
                      }

                    </p>

                  </div>

                </div>

                <div className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                ">

                  <RatingStars
                    label="
                      Dominio del Tema
                    "
                    value={
                      ratings.dominio
                    }
                    onChange={(
                      v
                    ) =>
                      setRatings({
                        ...ratings,
                        dominio: v
                      })
                    }
                  />

                  <RatingStars
                    label="
                      Claridad
                    "
                    value={
                      ratings.claridad
                    }
                    onChange={(
                      v
                    ) =>
                      setRatings({
                        ...ratings,
                        claridad: v
                      })
                    }
                  />

                  <RatingStars
                    label="
                      Recursos Tecnológicos
                    "
                    value={
                      ratings.recursos
                    }
                    onChange={(
                      v
                    ) =>
                      setRatings({
                        ...ratings,
                        recursos: v
                      })
                    }
                  />

                  <RatingStars
                    label="
                      Puntualidad
                    "
                    value={
                      ratings.puntualidad
                    }
                    onChange={(
                      v
                    ) =>
                      setRatings({
                        ...ratings,
                        puntualidad: v
                      })
                    }
                  />

                </div>

                <div>

                  <label className="
                    text-sm
                    text-gray-500
                    font-bold
                    block
                    mb-3
                  ">

                    Comentario
                    (Opcional)

                  </label>

                  <textarea

                    rows={5}

                    value={comment}

                    onChange={(e) =>
                      setComment(
                        e.target.value
                      )
                    }

                    placeholder="
                      Describe tu experiencia
                      con el docente...
                    "

                    className="
                      w-full
                      p-5
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      resize-none
                    "

                  />

                </div>

                <button

                  onClick={
                    submitEvaluation
                  }

                  className="
                    w-full
                    bg-[#14213d]
                    text-white
                    py-4
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-bold
                    shadow-lg
                    hover:scale-[1.01]
                    transition-all
                  "

                >

                  <Send size={18} />

                  Enviar Evaluación

                </button>

              </div>

            ) : (

              <div className="
                bg-white
                rounded-3xl
                p-12
                shadow-md
                border
                text-center
                space-y-5
              ">

                <div className="
                  w-24
                  h-24
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  mx-auto
                  text-green-600
                ">

                  <CheckCircle2
                    size={50}
                  />

                </div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-gray-800
                ">

                  Docente Evaluado

                </h2>

                <p className="
                  text-gray-500
                ">

                  Ya realizaste esta
                  evaluación correctamente.

                </p>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* ALERTA */}

      {showSuccess && (

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
          z-50
        ">

          <CheckCircle2
            size={18}
          />

          Evaluación enviada correctamente

        </div>

      )}

    </Layout>

  )

}