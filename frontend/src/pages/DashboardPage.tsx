import Layout from '../components/Layout'

import {
  BookOpen,
  GraduationCap,
  TrendingUp,
  CalendarDays,
  AlertTriangle
} from 'lucide-react'

export default function DashboardPage() {

  const materias = [

    {
      nombre: 'Bases de Datos II',
      nota: 4.3,
      color: 'bg-green-500',
      estado: 'ALTO'
    },

    {
      nombre: 'Redes de Computadores',
      nota: 3.8,
      color: 'bg-blue-500',
      estado: 'MEDIO'
    },

    {
      nombre: 'Ingeniería de Software',
      nota: 4.6,
      color: 'bg-orange-500',
      estado: 'SUPERIOR'
    },

    {
      nombre: 'Sistemas Operativos',
      nota: 2.9,
      color: 'bg-red-500',
      estado: 'EN RIESGO'
    }

  ]

  return (

    <Layout>

      {/* ALERTA */}

      <div className="
        bg-green-100
        border-l-4
        border-green-500
        p-5
        rounded-2xl
        flex
        items-center
        gap-4
        mb-8
      ">

        <div className="
          bg-green-500
          p-3
          rounded-full
          text-white
        ">

          <TrendingUp size={24} />

        </div>

        <div>

          <h2 className="
            font-bold
            text-green-800
            text-lg
          ">
            Rendimiento Alto
          </h2>

          <p className="
            text-green-700
          ">
            Promedio actual: 4.02
            • 1 materia(s) en riesgo
          </p>

        </div>

      </div>

      {/* CARDS */}

      <div className="
        grid
        md:grid-cols-4
        gap-6
        mb-8
      ">

        {/* CARD */}

        <div className="
          bg-white
          p-6
          rounded-3xl
          shadow-md
        ">

          <div className="
            flex
            justify-between
            items-center
            mb-5
          ">

            <div className="
              bg-green-100
              p-3
              rounded-2xl
            ">

              <TrendingUp
                className="text-green-600"
              />

            </div>

          </div>

          <p className="
            text-gray-400
            text-sm
            uppercase
            font-semibold
          ">
            Promedio Actual
          </p>

          <h2 className="
            text-4xl
            font-bold
            text-green-600
            mt-2
          ">
            4.02
          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          p-6
          rounded-3xl
          shadow-md
        ">

          <div className="
            bg-blue-100
            p-3
            rounded-2xl
            w-fit
            mb-5
          ">

            <GraduationCap
              className="text-blue-600"
            />

          </div>

          <p className="
            text-gray-400
            text-sm
            uppercase
            font-semibold
          ">
            Créditos Cursados
          </p>

          <h2 className="
            text-4xl
            font-bold
            text-blue-600
            mt-2
          ">
            112
          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          p-6
          rounded-3xl
          shadow-md
        ">

          <div className="
            bg-purple-100
            p-3
            rounded-2xl
            w-fit
            mb-5
          ">

            <BookOpen
              className="text-purple-600"
            />

          </div>

          <p className="
            text-gray-400
            text-sm
            uppercase
            font-semibold
          ">
            Materias Activas
          </p>

          <h2 className="
            text-4xl
            font-bold
            text-purple-600
            mt-2
          ">
            4
          </h2>

        </div>

        {/* CARD */}

        <div className="
          bg-white
          p-6
          rounded-3xl
          shadow-md
        ">

          <div className="
            bg-orange-100
            p-3
            rounded-2xl
            w-fit
            mb-5
          ">

            <CalendarDays
              className="text-orange-600"
            />

          </div>

          <p className="
            text-gray-400
            text-sm
            uppercase
            font-semibold
          ">
            Semestre
          </p>

          <h2 className="
            text-4xl
            font-bold
            text-orange-500
            mt-2
          ">
            VI
          </h2>

        </div>

      </div>

      {/* GRID CENTRAL */}

      <div className="
        grid
        lg:grid-cols-2
        gap-8
      ">

        {/* MATERIAS */}

        <div className="
          bg-white
          rounded-3xl
          shadow-md
          p-8
        ">

          <h2 className="
            text-2xl
            font-bold
            mb-8
          ">
            Materias del Semestre
          </h2>

          <div className="
            flex
            flex-col
            gap-8
          ">

            {materias.map(
              (materia) => (

                <div
                  key={materia.nombre}
                >

                  <div className="
                    flex
                    justify-between
                    mb-2
                  ">

                    <div>

                      <h3 className="
                        font-semibold
                      ">
                        {materia.nombre}
                      </h3>

                    </div>

                    <div className="
                      text-right
                    ">

                      <p className="
                        text-sm
                        font-bold
                      ">
                        {materia.estado}
                      </p>

                      <p className="
                        font-bold
                      ">
                        {materia.nota}
                      </p>

                    </div>

                  </div>

                  <div className="
                    w-full
                    h-3
                    bg-gray-200
                    rounded-full
                    overflow-hidden
                  ">

                    <div
                      className={`
                        h-full
                        ${materia.color}
                      `}
                      style={{
                        width:
                          `${materia.nota * 20}%`
                      }}
                    />

                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* PROXIMAS CLASES */}

        <div className="
          flex
          flex-col
          gap-6
        ">

          <div className="
            bg-white
            rounded-3xl
            shadow-md
            p-8
          ">

            <h2 className="
              text-2xl
              font-bold
              mb-8
            ">
              Próximas Clases Hoy
            </h2>

            <div className="
              flex
              flex-col
              gap-6
            ">

              {/* ITEM */}

              <div className="
                flex
                gap-5
              ">

                <div className="
                  bg-blue-100
                  text-blue-700
                  px-4
                  py-3
                  rounded-2xl
                  text-sm
                  font-bold
                  min-w-[120px]
                  text-center
                ">

                  6:00 PM
                  <br />
                  8:00 PM

                </div>

                <div>

                  <h3 className="
                    font-bold
                    text-lg
                  ">
                    Bases de Datos II
                  </h3>

                  <p className="
                    text-gray-500
                  ">
                    Aula 202
                  </p>

                  <p className="
                    text-orange-500
                    text-sm
                    mt-1
                  ">
                    • Recuerda entregar el trabajo final
                  </p>

                </div>

              </div>

              {/* ITEM */}

              <div className="
                flex
                gap-5
              ">

                <div className="
                  bg-blue-100
                  text-blue-700
                  px-4
                  py-3
                  rounded-2xl
                  text-sm
                  font-bold
                  min-w-[120px]
                  text-center
                ">

                  8:00 PM
                  <br />
                  10:00 PM

                </div>

                <div>

                  <h3 className="
                    font-bold
                    text-lg
                  ">
                    Ingeniería de Software
                  </h3>

                  <p className="
                    text-gray-500
                  ">
                    Aula 305
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* TIP */}

          <div className="
            bg-blue-100
            border
            border-blue-200
            rounded-3xl
            p-6
            flex
            gap-4
            items-start
          ">

            <div className="
              bg-blue-500
              text-white
              p-3
              rounded-2xl
            ">

              <AlertTriangle size={20} />

            </div>

            <div>

              <h3 className="
                font-bold
                text-blue-800
              ">
                Tip del día
              </h3>

              <p className="
                text-blue-700
                mt-1
              ">
                Recuerda que tienes una
                evaluación de Redes el
                próximo jueves.
              </p>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  )

}