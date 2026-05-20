import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'

import DashboardPage from './pages/DashboardPage'

import MateriasPage from './pages/MateriasPage'

import MateriaDetallePage from './pages/MateriaDetallePage'

import HorarioPage from './pages/HorarioPage'

import CalificacionesPage from './pages/CalificacionesPage'

import HistorialPage from './pages/HistorialPage'

import AulasPage from './pages/AulasPage'

import BibliotecaPage from './pages/BibliotecaPage'

import EvaluacionPage from './pages/EvaluacionPage'

import PerfilPage from './pages/PerfilPage'

import PQRSPage from './pages/PQRSPage'

import SoportePage from './pages/SoportePage'

import ManualPage from './pages/ManualPage'

import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* MATERIAS */}

        <Route
          path="/materias"
          element={
            <ProtectedRoute>
              <MateriasPage />
            </ProtectedRoute>
          }
        />

        {/* DETALLE MATERIA */}

        <Route
          path="/materias/:id"
          element={
            <ProtectedRoute>
              <MateriaDetallePage />
            </ProtectedRoute>
          }
        />

        {/* HORARIO */}

        <Route
          path="/horario"
          element={
            <ProtectedRoute>
              <HorarioPage />
            </ProtectedRoute>
          }
        />

        {/* CALIFICACIONES */}

        <Route
          path="/calificaciones"
          element={
            <ProtectedRoute>
              <CalificacionesPage />
            </ProtectedRoute>
          }
        />

        {/* HISTORIAL */}

        <Route
          path="/historial"
          element={
            <ProtectedRoute>
              <HistorialPage />
            </ProtectedRoute>
          }
        />

        {/* AULAS */}

        <Route
          path="/aulas"
          element={
            <ProtectedRoute>
              <AulasPage />
            </ProtectedRoute>
          }
        />

        {/* BIBLIOTECA */}

        <Route
          path="/biblioteca"
          element={
            <ProtectedRoute>
              <BibliotecaPage />
            </ProtectedRoute>
          }
        />

        {/* EVALUACION */}

        <Route
          path="/evaluacion"
          element={
            <ProtectedRoute>
              <EvaluacionPage />
            </ProtectedRoute>
          }
        />

        {/* PERFIL */}

        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <PerfilPage />
            </ProtectedRoute>
          }
        />

        {/* PQRS */}

        <Route
          path="/pqrs"
          element={
            <ProtectedRoute>
              <PQRSPage />
            </ProtectedRoute>
          }
        />

        {/* SOPORTE */}

        <Route
          path="/soporte"
          element={
            <ProtectedRoute>
              <SoportePage />
            </ProtectedRoute>
          }
        />

        {/* MANUAL */}

        <Route
          path="/manual"
          element={
            <ProtectedRoute>
              <ManualPage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App