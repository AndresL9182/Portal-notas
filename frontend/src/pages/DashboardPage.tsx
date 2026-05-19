import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem('user') || '{}'
  )

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          UniComfacauca
        </h1>

        <nav className="flex flex-col gap-4">

          <button
            className="text-left hover:bg-blue-800 p-3 rounded-lg"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </button>

          <button
            className="text-left hover:bg-blue-800 p-3 rounded-lg"
            onClick={() => navigate('/materias')}
          >
            Materias
          </button>

          <button className="text-left hover:bg-blue-800 p-3 rounded-lg">
            Horarios
          </button>

          <button className="text-left hover:bg-blue-800 p-3 rounded-lg">
            Notas
          </button>

          <button className="text-left hover:bg-blue-800 p-3 rounded-lg">
            Tareas
          </button>

        </nav>

      </aside>

      {/* Contenido */}
      <main className="flex-1 p-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h1 className="text-4xl font-bold mb-4">
            Bienvenido {user.nombre}
          </h1>

          <p className="text-gray-600 mb-2">
            Correo: {user.correo}
          </p>

          <p className="text-gray-600 mb-8">
            Carrera: {user.carrera}
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-blue-100 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-2">
                Materias
              </h2>

              <p>
                Ver materias inscritas
              </p>
            </div>

            <div className="bg-green-100 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-2">
                Horarios
              </h2>

              <p>
                Consultar horarios
              </p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-2">
                Notas
              </h2>

              <p>
                Revisar calificaciones
              </p>
            </div>

          </div>

          <button
            className="mt-10 bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('user')

              window.location.href = '/'
            }}
          >
            Cerrar sesión
          </button>

        </div>

      </main>

    </div>
  )
}