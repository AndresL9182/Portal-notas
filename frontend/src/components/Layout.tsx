import {
  Link,
  useLocation
} from 'react-router-dom'

import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  User,
  LogOut,
  Bell,
  GraduationCap
} from 'lucide-react'

export default function Layout({
  children
}: any) {

  const location =
    useLocation()

  const user = JSON.parse(
    localStorage.getItem('user') || '{}'
  )

  const logout = () => {

    localStorage.clear()

    window.location.href = '/'

  }

  const menu = [

  {
    name: 'Panel Principal',
    path: '/dashboard',
    icon: LayoutDashboard
  },

  {
  name: 'Materias',
  path: '/materias',
  icon: BookOpen
},

  {
    name: 'Calificaciones',
    path: '/calificaciones',
    icon: BookOpen
  },

  {
    name: 'Historial Académico',
    path: '/historial',
    icon: GraduationCap
  },

  {
    name: 'Horario',
    path: '/horario',
    icon: Calendar
  },

  {
    name: 'Aulas Disponibles',
    path: '/aulas',
    icon: BookOpen
  },

  {
    name: 'Biblioteca Virtual',
    path: '/biblioteca',
    icon: BookOpen
  },

  {
    name: 'Evaluación Docente',
    path: '/evaluacion',
    icon: User
  },

  {
    name: 'Mi Perfil',
    path: '/perfil',
    icon: User
  },

  {
    name: 'PQRS',
    path: '/pqrs',
    icon: Bell
  },

  {
    name: 'Soporte',
    path: '/soporte',
    icon: Bell
  },

  {
    name: 'Manual de Usuario',
    path: '/manual',
    icon: BookOpen
  }

]

  return (

    <div className="
      flex
      min-h-screen
      bg-[#f5f7fb]
    ">

      {/* SIDEBAR */}

      <aside className="
        w-[270px]
        bg-[#14213d]
        text-white
        flex
        flex-col
        justify-between
        p-6
      ">

        <div>

          {/* LOGO */}

          <div className="
            flex
            items-center
            gap-3
            mb-12
          ">

            <div className="
              bg-yellow-400
              p-2
              rounded-xl
            ">

              <GraduationCap size={24} />

            </div>

            <div>

              <h1 className="
                font-bold
                text-lg
              ">
                UNICOMFACAUCA
              </h1>

              <p className="
                text-sm
                text-gray-300
              ">
                Portal Estudiantil
              </p>

            </div>

          </div>

          {/* USER */}

          <div className="
            flex
            items-center
            gap-4
            mb-10
          ">

            <div className="
              w-14
              h-14
              rounded-full
              bg-blue-500
              flex
              items-center
              justify-center
              font-bold
              text-xl
            ">

              {user?.nombre
                ?.charAt(0)}

            </div>

            <div>

              <p className="
                font-semibold
              ">
                {user?.nombre ||
                  'Estudiante'}
              </p>

              <p className="
                text-sm
                text-gray-300
              ">
                Semestre VI
              </p>

            </div>

          </div>

          {/* MENU */}

          <nav className="
            flex
            flex-col
            gap-2
          ">

            {menu.map((item) => {

              const Icon =
                item.icon

              const active =
                location.pathname ===
                item.path

              return (

                <Link

                  key={item.path}

                  to={item.path}

                  className={`
                    flex
                    items-center
                    gap-3
                    p-4
                    rounded-2xl
                    transition-all
                    ${
                      active
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-white/10 text-gray-200'
                    }
                  `}

                >

                  <Icon size={20} />

                  {item.name}

                </Link>

              )

            })}

          </nav>

        </div>

        {/* LOGOUT */}

        <button

          onClick={logout}

          className="
            flex
            items-center
            gap-3
            p-4
            rounded-2xl
            hover:bg-red-500
            transition-all
          "

        >

          <LogOut size={20} />

          Cerrar sesión

        </button>

      </aside>

      {/* MAIN */}

      <main className="
        flex-1
        p-8
      ">

        {/* TOPBAR */}

        <div className="
          flex
          justify-between
          items-center
          mb-8
        ">

          <div>

            <h1 className="
              text-3xl
              font-bold
              text-gray-800
            ">
              Bienvenido 👋
            </h1>

            <p className="
              text-gray-500
            ">
              Portal académico estudiantil
            </p>

          </div>

          <div className="
            flex
            items-center
            gap-5
          ">

            <button className="
              bg-white
              p-3
              rounded-2xl
              shadow-md
            ">

              <Bell size={20} />

            </button>

            <div className="
              bg-white
              px-5
              py-3
              rounded-2xl
              shadow-md
            ">

              jueves, 26 marzo 2026

            </div>

          </div>

        </div>

        {/* CONTENT */}

        {children}

      </main>

    </div>

  )

}