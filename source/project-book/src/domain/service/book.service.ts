import { BookModel } from "../model/book.model";
import { BookServicePort } from "../port/book.service.port";
import { BookMapper } from "../mapper/book.mapper";
import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { BOOK_REPOSITORY_PORT, BookRepositoryPort } from "../port/book.repository.port";
import { BookException } from "../../web/exception/book.exception";

@Injectable()
export class BookService implements BookServicePort {
    constructor(
        @Inject(BOOK_REPOSITORY_PORT)
        private readonly bookRepositoryPort: BookRepositoryPort) {
    }

    async findAll() : Promise<BookModel[]> {
        var listBookEntity = await this.bookRepositoryPort.findAll();
        var list = BookMapper.fromListEntity(listBookEntity);
        return list;
    }    

    async findByYear(year: number) : Promise<BookModel[]> {
        var listBookEntity = await this.bookRepositoryPort.findByYear(year);
        var list = BookMapper.fromListEntity(listBookEntity);
        return list;
    }    

    async findByGenre(genre: string) : Promise<BookModel[]> {
        var listGenre = ["Dramaturgia", "Crônica", "Conto", "Poesia", "Romance"];        
        if(listGenre.includes(genre) == false) {
            throw new BookException(
                "Invalid Genre!, You can use Dramaturgia, Crônica, Conto, Poesia or Romance", 
                HttpStatus.BAD_REQUEST
            );
        }                
        var listBookEntity = await this.bookRepositoryPort.findByGenre(genre);
        var list = BookMapper.fromListEntity(listBookEntity);
        return list;
    }    

    async delete(id: number) : Promise<void> {
       return await this.bookRepositoryPort.deleteBook(id)   
    }
}