import { Injectable } from "@nestjs/common";
import { BookEntity } from "../entity/book.entity";
import { DataSource, Repository } from "typeorm";
import { BookRepositoryPort } from "src/domain/port/book.repository.port";

@Injectable()
export class BookRepository extends Repository<BookEntity> implements BookRepositoryPort {

    private dataSourceRepo:DataSource;

    constructor(private dataSource: DataSource) {        
        super(BookEntity, dataSource.createEntityManager());
        this.dataSourceRepo = dataSource;
    }

    async findAll(): Promise<BookEntity[]> {
        return super.find();
    }
    
    async findByYear(year: number) : Promise<BookEntity[]> {
        return this.dataSourceRepo.getRepository(BookEntity)
        .createQueryBuilder("tb_livros_oceanos_mapeados")
        .where("tb_livros_oceanos_mapeados.ano = :year", { year: year })
        .getMany()
    }

    async findByGenre(genre: string) : Promise<BookEntity[]> {
        return this.dataSourceRepo.getRepository(BookEntity)
        .createQueryBuilder("tb_livros_oceanos_mapeados")
        .where("tb_livros_oceanos_mapeados.genero_livro = :genre", { genre: genre })
        .getMany()        
    }    

    async deleteBook(key: number): Promise<void> {        
        this.dataSourceRepo.getRepository(BookEntity)
        .createQueryBuilder()
        .delete()
        .where("id = :id", { id: key })
        .execute();
    }
}