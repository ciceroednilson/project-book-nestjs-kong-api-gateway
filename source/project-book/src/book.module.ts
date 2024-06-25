import { Module } from '@nestjs/common';
import { BookController } from './application/controller/book.controller';
import { BookEntity } from './infrastructure/entity/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookService } from './domain/service/book.service';
import { BookRepository } from './infrastructure/repository/book.repository';
import { BOOK_REPOSITORY_PORT } from './domain/port/book.repository.port';
import { BOOK_SERVICE_PORT } from './domain/port/book.service.port';
import { ErrorFilter } from './web/filter/error.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.22.230.227',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'db_labs_systems',
      entities: [BookEntity],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([BookEntity]),
  ],
  controllers: [BookController],
  providers: [
    {useClass: BookService, provide: BOOK_SERVICE_PORT},     
    {useClass: BookRepository, provide: BOOK_REPOSITORY_PORT},
    {useClass: ErrorFilter, provide: APP_FILTER}
  ],
  exports: [BOOK_SERVICE_PORT, BOOK_REPOSITORY_PORT]
})
export class BookModule {}
