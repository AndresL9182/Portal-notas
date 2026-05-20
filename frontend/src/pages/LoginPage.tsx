export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Portal Unicomfacauca
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="w-full bg-black text-white p-3 rounded-lg"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}