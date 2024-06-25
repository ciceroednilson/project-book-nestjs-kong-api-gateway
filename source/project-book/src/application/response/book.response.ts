import { BookModel } from "src/domain/model/book.model";

export class BookResponse {
    year?: number | null;
    subscriberId?: string | null;
    responsible?: string | null;
    responsibleName?: string | null;
    bookTitle?: string | null;
    isbn?: string | null;
    bookGenre?: string | null;
    firstEditionCountryName?: string | null;
    publicationType?: string | null;
    authorName?: string | null;
    authorGenre?: string | null;
    authorAge?: string | null;
    authorCountryName?: string | null;
    authorNationality?: string | null;
    authorPrimaryActivityIndicator?: string | null;
    authorFormalEducation?: string | null;
    authorOtherWorksPublicationIndicator?: boolean | null;
    authorPublishedWorksQuantity?: number | null;
    publisherName?: string | null;
    publisherOriginCountry?: string | null;
    publisherHeadquartersLocation?: string | null;
    publisherFoundingYear?: number | null;
    publisherMainLine?: string | null;
    publisherDistributionChannel?: string | null;
    publisherPrintRun?: string | null;
    publisherEditionFinancing?: string | null;
    publisherFinancingGroup?: string | null;
    publisherWebsite?: string | null;
    otherEditionsIndicator?: string | null;
    otherEditionsPublisherName?: string | null;
    otherEditionsPublicationYear?: number | null;
    otherEditionsCountryName?: string | null;
    semifinalistIndicator?: string | null;
    finalistIndicator?: string | null;
    winnerIndicator?: string | null;    

    static fromListModel(list: BookModel[]): BookResponse[] {
        let listBookRes:BookResponse[] = [];
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            listBookRes.push(this.fromModel(element));
        }
        return listBookRes;
    }

    static fromModel(model: BookModel): BookResponse {
        const response = new BookResponse();
        response.year = model.year;
        response.subscriberId = model.subscriberId;
        response.responsible = model.responsible;
        response.responsibleName = model.responsibleName;
        response.bookTitle = model.bookTitle;
        response.isbn = model.isbn;
        response.bookGenre = model.bookGenre;
        response.firstEditionCountryName = model.firstEditionCountryName;
        response.publicationType = model.publicationType;
        response.authorName = model.authorName;
        response.authorGenre = model.authorGenre;
        response.authorAge = model.authorAge;
        response.authorCountryName = model.authorCountryName;
        response.authorNationality = model.authorNationality;
        response.authorPrimaryActivityIndicator = model.authorPrimaryActivityIndicator;
        response.authorFormalEducation = model.authorFormalEducation;
        response.authorOtherWorksPublicationIndicator = model.authorOtherWorksPublicationIndicator;
        response.authorPublishedWorksQuantity = model.authorPublishedWorksQuantity;
        response.publisherName = model.publisherName;
        response.publisherOriginCountry = model.publisherOriginCountry;
        response.publisherHeadquartersLocation = model.publisherHeadquartersLocation;
        response.publisherFoundingYear = model.publisherFoundingYear;
        response.publisherMainLine = model.publisherMainLine;
        response.publisherDistributionChannel = model.publisherDistributionChannel;
        response.publisherPrintRun = model.publisherPrintRun;
        response.publisherEditionFinancing = model.publisherEditionFinancing;
        response.publisherFinancingGroup = model.publisherFinancingGroup;
        response.publisherWebsite = model.publisherWebsite;
        response.otherEditionsIndicator = model.otherEditionsIndicator;
        response.otherEditionsPublisherName = model.otherEditionsPublisherName;
        response.otherEditionsPublicationYear = model.otherEditionsPublicationYear;
        response.otherEditionsCountryName = model.otherEditionsCountryName;
        response.semifinalistIndicator = model.semifinalistIndicator;
        response.finalistIndicator = model.finalistIndicator;
        response.winnerIndicator = model.winnerIndicator;
        return response;
    }
}