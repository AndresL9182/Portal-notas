import { Request, Response } from 'express'
import prisma from '../prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response) => {
  try {
    const {
      nombre,
      correo,
      password,
      codigo,
      carrera,
      semestre
    } = req.body

    const userExists = await prisma.user.findUnique({
      where: {
        correo
      }
    })

    if (userExists) {
      return res.status(400).json({
        message: 'Usuario ya existe'
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        nombre,
        correo,
        password: hashedPassword,
        codigo,
        carrera,
        semestre
      }
    })

    res.status(201).json(user)

  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Error registrando usuario'
    })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { correo, password } = req.body

    const user = await prisma.user.findUnique({
      where: {
        correo
      }
    })

    if (!user) {
      return res.status(400).json({
        message: 'Usuario no encontrado'
      })
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    )

    if (!validPassword) {
      return res.status(400).json({
        message: 'Contraseña incorrecta'
      })
    }

    const token = jwt.sign(
      {
        id: user.id,
        correo: user.correo
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '7d'
      }
    )

    res.json({
      message: 'Login exitoso',
      token,
      user
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: 'Error login'
    })
  }
}