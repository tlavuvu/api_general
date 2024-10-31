import { NextFunction, Request, Response } from 'express'
import { errorCode, HttpException } from './exceptions/root'
import { internalException } from './exceptions/internal-exception'

export const errorHandler = (method: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next)
    } catch (error: any) {
      let exception: HttpException
      if (error instanceof HttpException) {
        exception = error
      } else {
        exception = new internalException(
          'Something went wrong!',
          error,
          errorCode.INTERNAL_EXCEPTION
        )
      }
      next(exception)
    }
  }
}
