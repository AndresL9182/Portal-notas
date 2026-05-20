import {
  Request,
  Response,
  NextFunction
} from 'express'

import jwt from 'jsonwebtoken'

interface JwtPayload {
  id: string
  correo: string
}

export interface AuthRequest
  extends Request {

  userId?: string

}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  try {

    const authHeader =
      req.headers.authorization

    console.log('HEADER:')
    console.log(authHeader)

    if (!authHeader) {

      return res.status(401).json({
        message: 'Token requerido'
      })

    }

    const token =
      authHeader.replace(
        'Bearer ',
        ''
      )

    console.log('TOKEN:')
    console.log(token)

    const decoded = jwt.verify(
      token,
      'secret123'
    ) as JwtPayload

    console.log('DECODED:')
    console.log(decoded)

    req.userId = decoded.id

    next()

  } catch (error) {

    console.log('ERROR JWT:')
    console.log(error)

    return res.status(401).json({
      message: 'Token inválido'
    })

  }

}