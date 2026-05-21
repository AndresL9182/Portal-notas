import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {
  res.send('API funcionando')
})

app.listen(3000, () => {
  console.log('Servidor en puerto 3000')
})