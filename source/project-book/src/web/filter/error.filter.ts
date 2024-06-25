import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { BookException } from '../exception/book.exception';

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
  catch(error: BookException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    response.status(error.getStatus()).json({
      status: error.getStatus(),
      message: error.message,
    });
  }
}