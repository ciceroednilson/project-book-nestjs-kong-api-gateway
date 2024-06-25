import { BookModel } from "../model/book.model";

export const BOOK_SERVICE_PORT = "BookServicePort"

export interface BookServicePort {
    findAll() : Promise<BookModel[]>
    findByYear(year: number) : Promise<BookModel[]>
    findByGenre(genre: string) : Promise<BookModel[]>
    delete(id: number) : Promise<void>
}