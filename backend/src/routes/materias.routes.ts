import { Router } from 'express'

import {
  getMaterias,
  createMateria
} from '../controllers/materias.controller'

import {
  authMiddleware
} from '../middlewares/auth.middleware'

const router = Router()

router.get(
  '/',
  authMiddleware,
  getMaterias
)

router.post(
  '/',
  authMiddleware,
  createMateria
)

export default router