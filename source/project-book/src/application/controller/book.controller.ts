import { Controller, Delete, Get, Inject, Param} from '@nestjs/common';
import { BookResponse } from '../response/book.response';
import { BOOK_SERVICE_PORT, BookServicePort } from 'src/domain/port/book.service.port';

@Controller("/book")
export class BookController {
  constructor(
    @Inject(BOOK_SERVICE_PORT)
    private readonly bookServicePort: BookServicePort) {
    }

  @Get(["", "/all"])
  async findAll(): Promise<BookResponse[]> {    
    const listModel = await this.bookServicePort.findAll();
    var response = BookResponse.fromListModel(listModel);
    return response;
  }

  @Get("/:year/year")
  async findByYear(@Param("year") year:number): Promise<BookResponse[]> {    
    const listModel = await this.bookServicePort.findByYear(year);
    var response = BookResponse.fromListModel(listModel);
    return response;
  }
  
  @Get("/:genre/genre")
  async findByGenre(@Param("genre") genre: string): Promise<BookResponse[]> {    
    const listModel = await this.bookServicePort.findByGenre(genre);
    var response = BookResponse.fromListModel(listModel);
    return response;
  }  

  @Delete("/:id/key")
  async delete(@Param("id") id: number) : Promise<void> {
    return this.bookServicePort.delete(id)
  }

}
