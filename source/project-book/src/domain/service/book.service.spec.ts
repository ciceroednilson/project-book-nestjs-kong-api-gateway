import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { BOOK_REPOSITORY_PORT, BookRepositoryPort } from '../port/book.repository.port';
import { HttpStatus } from '@nestjs/common';
import { BookException } from "../../web/exception/book.exception";

describe('BookService', () => {
  let service: BookService;
  let bookRepositoryPort: BookRepositoryPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: BOOK_REPOSITORY_PORT, 
          useValue: {
            findAll: jest.fn(),
            findByYear: jest.fn(),
            findByGenre: jest.fn(),
            deleteBook: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    bookRepositoryPort = module.get<BookRepositoryPort>(BOOK_REPOSITORY_PORT); 
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of BookModel', async () => {
      const mockResponse: any[] = [];
      jest.spyOn(bookRepositoryPort, 'findAll').mockResolvedValue(mockResponse);
      const result = await service.findAll();
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findByYear', () => {
    it('should return an array of BookModel for a given year', async () => {
      const year = 2023;
      const mockResponse: any[] = [];
      jest.spyOn(bookRepositoryPort, 'findByYear').mockResolvedValue(mockResponse);
      const result = await service.findByYear(year);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('findByGenre', () => {
    it('should return an array of BookModel for a valid genre', async () => {
      const genre = 'Poesia';
      const mockResponse: any[] = [];
      jest.spyOn(bookRepositoryPort, 'findByGenre').mockResolvedValue(mockResponse);
      const result = await service.findByGenre(genre);
      expect(result).toEqual(mockResponse);
    });

    it('should throw BookException for an invalid genre', async () => {
      const invalidGenre = 'Ficção';
      jest.spyOn(bookRepositoryPort, 'findByGenre').mockImplementation(() => {
        throw new Error('Should not reach this point');
      });

      try {
        await service.findByGenre(invalidGenre);
      } catch (error) {
        expect(error).toBeInstanceOf(BookException);
        expect(error.message).toEqual(
          'Invalid Genre!, You can use Dramaturgia, Crônica, Conto, Poesia or Romance',
        );
        expect(error.status).toEqual(HttpStatus.BAD_REQUEST);
      }
    });
  });

  describe('delete', () => {
    it('should delete a book by id', async () => {
      const idToDelete = 1;
      jest.spyOn(bookRepositoryPort, 'deleteBook').mockResolvedValue(undefined);
      await service.delete(idToDelete);
      expect(bookRepositoryPort.deleteBook).toHaveBeenCalledWith(idToDelete);
    });
  });
});
