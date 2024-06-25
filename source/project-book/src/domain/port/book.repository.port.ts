import { BookEntity } from "src/infrastructure/entity/book.entity";

export const BOOK_REPOSITORY_PORT = "BOOK_REPOSITORY_PORT"

export interface BookRepositoryPort {
    findAll(): Promise<BookEntity[]>
    findByYear(year: number): Promise<BookEntity[]>
    findByGenre(genre: string): Promise<BookEntity[]>
    deleteBook(key: number): Promise<void>
}