import { HttpException, HttpStatus } from "@nestjs/common";

export class BookException extends HttpException {

    private httpCode: number;

    constructor(text: string, httpstatus: HttpStatus) {
        super(text, httpstatus);
      }
}
