import { NextFunction, Request, Response } from 'express'
import { errorCode, HttpException } from '../exceptions/root'

export const errorMiddleware = (
  error: HttpException,
  red: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    message: error.errormessage,
    errorCode: error.errorCode,
    error: error.errors,
  })
}
