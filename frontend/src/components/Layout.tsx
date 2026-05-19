import { Link } from 'react-router-dom'

export default function Layout({
  children
}: any) {

  const user = JSON.parse(
    localStorage.getItem('user') || '{}'
  )

  const logout = () => {

  localStorage.removeItem('token')

  localStorage.removeItem('user')

  window.location.href = '/'

}

  return (

    <div className="flex min-h-screen">

      <aside className="
        w-64
        bg-blue-950
        text-white
        p-5
      ">

        <h1 className="
          text-2xl
          font-bold
          mb-10
        ">
          UNICOMFACAUCA
        </h1>

        <div className="mb-10">

          <p className="font-bold">
            {user.nombre}
          </p>

          <p className="text-sm text-gray-300">
            {user.correo}
          </p>

        </div>

        <nav className="flex flex-col gap-4">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/materias">
            Materias
          </Link>
          <button
  onClick={logout}
  className="
    mt-10
    bg-red-500
    p-3
    rounded-lg
  "
>
  Cerrar sesión
</button>

        </nav>

      </aside>

      <main className="
        flex-1
        p-8
      ">
        {children}
      </main>

    </div>

  )

}