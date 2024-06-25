import { BookEntity } from "src/infrastructure/entity/book.entity";
import { BookModel } from "../model/book.model";

export class BookMapper {

    static fromListEntity(list: BookEntity[]): BookModel[] {
        let listBookModel:BookModel[] = [];
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            listBookModel.push(this.fromEntity(element))
        }
        return listBookModel;
    }

    static fromEntity(entity: BookEntity): BookModel {
        const bookModel = new BookModel();
        bookModel.year = entity.year;
        bookModel.subscriberId = entity.subscriberId;
        bookModel.responsible = entity.responsible;
        bookModel.responsibleName = entity.responsibleName;
        bookModel.bookTitle = entity.bookTitle;
        bookModel.isbn = entity.isbn;
        bookModel.bookGenre = entity.bookGenre;
        bookModel.firstEditionCountryName = entity.firstEditionCountryName;
        bookModel.publicationType = entity.publicationType;
        bookModel.authorName = entity.authorName;
        bookModel.authorGenre = entity.authorGenre;
        bookModel.authorAge = entity.authorAge;
        bookModel.authorCountryName = entity.authorCountryName;
        bookModel.authorNationality = entity.authorNationality;
        bookModel.authorPrimaryActivityIndicator = entity.authorPrimaryActivityIndicator;
        bookModel.authorFormalEducation = entity.authorFormalEducation;
        bookModel.authorOtherWorksPublicationIndicator = entity.authorOtherWorksPublicationIndicator;
        bookModel.authorPublishedWorksQuantity = entity.authorPublishedWorksQuantity;
        bookModel.publisherName = entity.publisherName;
        bookModel.publisherOriginCountry = entity.publisherOriginCountry;
        bookModel.publisherHeadquartersLocation = entity.publisherHeadquartersLocation;
        bookModel.publisherFoundingYear = entity.publisherFoundingYear;
        bookModel.publisherMainLine = entity.publisherMainLine;
        bookModel.publisherDistributionChannel = entity.publisherDistributionChannel;
        bookModel.publisherPrintRun = entity.publisherPrintRun;
        bookModel.publisherEditionFinancing = entity.publisherEditionFinancing;
        bookModel.publisherFinancingGroup = entity.publisherFinancingGroup;
        bookModel.publisherWebsite = entity.publisherWebsite;
        bookModel.otherEditionsIndicator = entity.otherEditionsIndicator;
        bookModel.otherEditionsPublisherName = entity.otherEditionsPublisherName;
        bookModel.otherEditionsPublicationYear = entity.otherEditionsPublicationYear;
        bookModel.otherEditionsCountryName = entity.otherEditionsCountryName;
        bookModel.semifinalistIndicator = entity.semifinalistIndicator;
        bookModel.finalistIndicator = entity.finalistIndicator;
        bookModel.winnerIndicator = entity.winnerIndicator;
        return bookModel;
    }

}