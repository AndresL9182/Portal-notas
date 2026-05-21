import { useState } from 'react'

import Layout from '../components/Layout'

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Edit,
  Save,
  X,
  GraduationCap
} from 'lucide-react'

export default function PerfilPage() {

  const [editing, setEditing] =
    useState(false)

  const [showSuccess, setShowSuccess] =
    useState(false)

  const [userData, setUserData] =
    useState({

      nombre: 'Andrés Ladino',

      correo:
        'andresladino@unicomfacauca.edu.co',

      telefono:
        '3001234567',

      direccion:
        'Popayán, Cauca',

      carrera:
        'Ingeniería de Sistemas',

      semestre:
        'VI',

      documento:
        '1234567890',

      nacimiento:
        '10/08/20xx'

    })

  const saveChanges = () => {

    setEditing(false)

    setShowSuccess(true)

    setTimeout(() => {

      setShowSuccess(false)

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

              <User className="
                text-blue-500
              " />

              Mi Perfil

            </h1>

            <p className="
              text-gray-500
              mt-2
            ">

              Información académica
              y personal del estudiante

            </p>

          </div>

          {!editing ? (

            <button

              onClick={() =>
                setEditing(true)
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

              <Edit size={18} />

              Editar Perfil

            </button>

          ) : (

            <div className="
              flex
              gap-3
            ">

              <button

                onClick={() =>
                  setEditing(false)
                }

                className="
                  bg-gray-200
                  text-gray-700
                  px-5
                  py-3
                  rounded-2xl
                  flex
                  items-center
                  gap-2
                  font-semibold
                "

              >

                <X size={18} />

                Cancelar

              </button>

              <button

                onClick={saveChanges}

                className="
                  bg-green-600
                  text-white
                  px-5
                  py-3
                  rounded-2xl
                  flex
                  items-center
                  gap-2
                  font-semibold
                  shadow-lg
                "

              >

                <Save size={18} />

                Guardar

              </button>

            </div>

          )}

        </div>

        {/* GRID */}

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
        ">

          {/* LEFT */}

          <div className="
            bg-white
            rounded-3xl
            p-8
            shadow-md
            border
            text-center
          ">

            <div className="
              w-28
              h-28
              rounded-full
              bg-[#14213d]
              mx-auto
              flex
              items-center
              justify-center
              text-white
              text-4xl
              font-bold
              shadow-xl
            ">

              {userData.nombre
                .charAt(0)}

            </div>

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
              mt-5
            ">

              {userData.nombre}

            </h2>

            <p className="
              text-gray-500
              mt-1
            ">

              {userData.carrera}

            </p>

            <div className="
              mt-4
              inline-flex
              items-center
              gap-2
              bg-blue-100
              text-blue-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            ">

              <ShieldCheck size={16} />

              Estudiante Activo

            </div>

            <div className="
              mt-8
              space-y-4
              text-left
            ">

              <div>

                <p className="
                  text-xs
                  text-gray-400
                  uppercase
                  font-bold
                ">

                  Semestre

                </p>

                <p className="
                  text-gray-700
                  font-semibold
                ">

                  {userData.semestre}

                </p>

              </div>

              <div>

                <p className="
                  text-xs
                  text-gray-400
                  uppercase
                  font-bold
                ">

                  Documento

                </p>

                <p className="
                  text-gray-700
                  font-semibold
                ">

                  {userData.documento}

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="
            lg:col-span-2
            bg-white
            rounded-3xl
            p-8
            shadow-md
            border
            space-y-8
          ">

            <div>

              <h3 className="
                text-lg
                font-bold
                text-gray-800
                flex
                items-center
                gap-2
                mb-6
              ">

                <GraduationCap
                  className="
                    text-blue-500
                  "
                />

                Información Personal

              </h3>

              <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              ">

                {/* CORREO */}

                <div>

                  <label className="
                    text-sm
                    text-gray-500
                    font-semibold
                    flex
                    items-center
                    gap-2
                    mb-2
                  ">

                    <Mail size={16} />

                    Correo

                  </label>

                  <input

                    disabled={!editing}

                    value={userData.correo}

                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        correo:
                          e.target.value
                      })
                    }

                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      disabled:bg-gray-100
                    "

                  />

                </div>

                {/* TELEFONO */}

                <div>

                  <label className="
                    text-sm
                    text-gray-500
                    font-semibold
                    flex
                    items-center
                    gap-2
                    mb-2
                  ">

                    <Phone size={16} />

                    Teléfono

                  </label>

                  <input

                    disabled={!editing}

                    value={userData.telefono}

                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        telefono:
                          e.target.value
                      })
                    }

                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      disabled:bg-gray-100
                    "

                  />

                </div>

                {/* DIRECCION */}

                <div className="
                  md:col-span-2
                ">

                  <label className="
                    text-sm
                    text-gray-500
                    font-semibold
                    flex
                    items-center
                    gap-2
                    mb-2
                  ">

                    <MapPin size={16} />

                    Dirección

                  </label>

                  <input

                    disabled={!editing}

                    value={userData.direccion}

                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        direccion:
                          e.target.value
                      })
                    }

                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      disabled:bg-gray-100
                    "

                  />

                </div>

                {/* NACIMIENTO */}

                <div>

                  <label className="
                    text-sm
                    text-gray-500
                    font-semibold
                    flex
                    items-center
                    gap-2
                    mb-2
                  ">

                    <Calendar size={16} />

                    Fecha Nacimiento

                  </label>

                  <input

                    disabled={!editing}

                    value={userData.nacimiento}

                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        nacimiento:
                          e.target.value
                      })
                    }

                    className="
                      w-full
                      p-4
                      rounded-2xl
                      border
                      border-gray-200
                      outline-none
                      disabled:bg-gray-100
                    "

                  />

                </div>

              </div>

            </div>

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

          <Save size={18} />

          Perfil actualizado correctamente

        </div>

      )}

    </Layout>

  )

}