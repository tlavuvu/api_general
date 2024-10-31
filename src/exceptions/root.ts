//message,status and error code,error
export class HttpException extends Error {
  errormessage: String
  errorCode: errorCode
  statusCode: number
  errors: any

  constructor(
    errormessage: string,
    errorCode: errorCode,
    statusCode: number,
    errors: any
  ) {
    super(errormessage)
    this.errormessage = errormessage
    this.errorCode = errorCode
    this.statusCode = statusCode
    this.errors = errors
  }
}

export enum errorCode {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INCORRECT_PASSWORD = 1003,
  UNPROCESSABLE_ENTITY = 1004,
  INTERNAL_EXCEPTION = 1005,
  UNAUTHORIZED = 1006,
}
