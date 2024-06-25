import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("tb_livros_oceanos_mapeados")
export class BookEntity {

    @PrimaryColumn({ name: 'id' })    
    id?: number;

    @Column({ name: 'ano' })
    year?: number | null;
    
    @Column({ name: 'id_inscrito' })
    subscriberId?: string | null;
    
    @Column({ name: 'responsavel' })
    responsible?: string | null;
    
    @Column({ name: 'nome_responsavel' })
    responsibleName?: string | null;

    @Column({ name: 'titulo_livro' })
    bookTitle?: string | null;

    @Column({ name: 'isbn' })
    isbn?: string | null;

    @Column({ name: 'genero_livro' })
    bookGenre?: string | null;

    @Column({ name: 'nome_pais_primeira_edicao' })
    firstEditionCountryName?: string | null;

    @Column({ name: 'tipo_publicacao' })
    publicationType?: string | null;

    @Column({ name: 'autor_nome' })
    authorName?: string | null;

    @Column({ name: 'autor_genero' })
    authorGenre?: string | null;

    @Column({ name: 'autor_idade' })
    authorAge?: string | null;

    @Column({ name: 'autor_nome_pais' })
    authorCountryName?: string | null;

    @Column({ name: 'autor_nacionalidade' })
    authorNationality?: string | null;

    @Column({ name: 'autor_indicador_atividade_economica_principal' })
    authorPrimaryActivityIndicator?: string | null;

    @Column({ name: 'autor_educacao_formal' })
    authorFormalEducation?: string | null;

    @Column({ name: 'autor_indicador_publicacao_outras_obras' })
    authorOtherWorksPublicationIndicator?: boolean | null;

    @Column({ name: 'autor_quantidade_obras_publicadas' })
    authorPublishedWorksQuantity?: number | null;

    @Column({ name: 'editora_nome' })
    publisherName?: string | null;

    @Column({ name: 'editora_pais_origem' })
    publisherOriginCountry?: string | null;

    @Column({ name: 'editora_local_sede' })
    publisherHeadquartersLocation?: string | null;

    @Column({ name: 'editora_ano_criacao' })
    publisherFoundingYear?: number | null;

    @Column({ name: 'editora_linha_predominante' })
    publisherMainLine?: string | null;

    @Column({ name: 'editora_canal_distribuicao' })
    publisherDistributionChannel?: string | null;

    @Column({ name: 'editora_tiragem_edicao' })
    publisherPrintRun?: string | null;

    @Column({ name: 'editora_financiamento_edicao' })
    publisherEditionFinancing?: string | null;

    @Column({ name: 'editora_grupo_financiamento' })
    publisherFinancingGroup?: string | null;

    @Column({ name: 'editora_site' })
    publisherWebsite?: string | null;

    @Column({ name: 'indicador_outras_edicoes' })
    otherEditionsIndicator?: string | null;

    @Column({ name: 'outras_edicoes_nome_editora' })
    otherEditionsPublisherName?: string | null;

    @Column({ name: 'outras_edicoes_ano_publicacao' })
    otherEditionsPublicationYear?: number | null;

    @Column({ name: 'outras_edicoes_nome_pais' })
    otherEditionsCountryName?: string | null;

    @Column({ name: 'indicador_semifinalista' })
    semifinalistIndicator?: string | null;

    @Column({ name: 'indicador_finalista' })
    finalistIndicator?: string | null;

    @Column({ name: 'indicador_vencedor' })
    winnerIndicator?: string | null;    
}