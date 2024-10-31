import { HttpException } from "./root";

export class internalException extends HttpException{
    constructor(errormessage:string,errors:any,errorCode:number){
        super(errormessage,errorCode,500,errors)
    }
}