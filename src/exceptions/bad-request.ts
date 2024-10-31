import { errorCode, HttpException } from "./root";

export class BadRequestsException extends HttpException{
    constructor(errormessage:string,errorCode:errorCode){
        super(errormessage,errorCode,400,null)

    }
}