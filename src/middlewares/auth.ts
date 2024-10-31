import { NextFunction, Request, Response } from 'express'
import { UnAuthorizedException } from '../exceptions/unauthorized'
import { errorCode } from '../exceptions/root'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secret'
import { prismaClient } from '..'

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //1. extract token from header
  const token: any = req.headers.authorization
  //2. if token is not present,throw error
  if (!token) {
    next(new UnAuthorizedException('Unauthorized', errorCode.UNAUTHORIZED))
  }
  try {
    //3. if token is present,verify token and extract payload
    const payload: { userId: number } = jwt.verify(token, JWT_SECRET) as any
    //4. get user from payload
    const user = (await prismaClient.user.findFirst({
      where: { id: payload.userId },
    })) as any
    if (!user) {
      next(new UnAuthorizedException('Unauthorized', errorCode.UNAUTHORIZED))
    }
    //5. attach user to current request object
    req.user = user
    next()
  } catch (error) {
    next(new UnAuthorizedException('Unauthorized', errorCode.UNAUTHORIZED))
  }
}

export default authMiddleware
