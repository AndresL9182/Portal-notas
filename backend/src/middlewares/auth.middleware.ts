import {
  Request,
  Response,
  NextFunction
} from 'express'

import jwt from 'jsonwebtoken'

interface JwtPayload {
  id: string
}

export interface AuthRequest extends Request {
  userId?: string
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  const authHeader = req.headers.authorization

  if (!authHeader) {

    return res.status(401).json({
      message: 'Token requerido'
    })

  }

  const token = authHeader.split(' ')[1]

  try {

    const decoded = jwt.verify(
      token,
      'secret123'
    ) as JwtPayload

    req.userId = decoded.id

    next()

  } catch (error) {

    return res.status(401).json({
      message: 'Token inválido'
    })

  }

}