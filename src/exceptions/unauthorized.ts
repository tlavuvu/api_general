import { errorCode, HttpException } from './root'

export class UnAuthorizedException extends HttpException {
  constructor(errormessage: string, errorCode: errorCode) {
    super(errormessage, errorCode, 401, null)
  }
}
