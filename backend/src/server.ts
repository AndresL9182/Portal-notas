import express from 'express'
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import materiasRoutes from './routes/materias.routes'


const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/auth', authRoutes)

app.use('/api/materias', materiasRoutes)



app.listen(3000, () => {
  console.log('Servidor en puerto 3000')
})