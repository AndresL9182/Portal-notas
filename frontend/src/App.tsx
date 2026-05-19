import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/DashboardPage'
import MateriasPage from './pages/MateriasPage'

import ProtectedRoute from './components/ProtectedRoute'

import MateriaDetallePage
from './pages/MateriaDetallePage'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/materias"
          element={
            <ProtectedRoute>
              <MateriasPage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/materias/:id"
  element={
    <ProtectedRoute>
      <MateriaDetallePage />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  )
}

export default App