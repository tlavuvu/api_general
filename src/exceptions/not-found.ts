import { errorCode, HttpException } from './root'

export class NotFoundException extends HttpException {
  constructor(errormessage: string, errorCode: errorCode) {
    super(errormessage, errorCode, 404, null)
  }
}
