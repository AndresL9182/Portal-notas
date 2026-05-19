import { Response } from 'express'

import prisma from '../prisma/client'

import {
  AuthRequest
} from '../middlewares/auth.middleware'

export const getMaterias = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const materias = await prisma.materia.findMany({
      where: {
        userId: req.userId
      }
    })

    res.json(materias)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: 'Error obteniendo materias'
    })

  }

}

export const createMateria = async (
  req: AuthRequest,
  res: Response
) => {

  try {

    const {
      nombre,
      docente,
      creditos
    } = req.body

    const materia = await prisma.materia.create({
      data: {
        nombre,
        docente,
        creditos,
        userId: req.userId!
      }
    })

    res.status(201).json(materia)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: 'Error creando materia'
    })

  }

}