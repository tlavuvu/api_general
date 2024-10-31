import { HttpException } from './root'

export class UnprocessableEntity extends HttpException {
  constructor(error: any, errormessage: string, errorCode: number) {
    super(errormessage, errorCode, 422, error)
  }
}
