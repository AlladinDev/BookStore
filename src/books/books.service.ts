import { Body, Injectable } from '@nestjs/common';
import { booksRepository } from './books.repsitory';
import { getBookDto, booksDto } from './books.dto';
@Injectable()
export class BooksService {
    constructor(private readonly bookRepository: booksRepository) { }
    async getBook({ name, category, edition }: getBookDto) {
        try {
            return this.bookRepository.getBook(name, category, edition)
        }
        catch (err) {
            throw err
        }
    }
    async registerBook(@Body() body: booksDto) {
        try {
            //check if book exists if yes increase its count instead of registering as new document
            const bookExists = await this.bookRepository.getBook(body.name, body.category, body.edition)
            if (bookExists) {
              return  this.bookRepository.increaseBookCount(bookExists)       
            }
            const bookCreated = await this.bookRepository.storeBook(body)
            return bookCreated
        }
        catch (err) {
            throw err
        }

    }
    async deleteBook({ name, category, edition }: getBookDto) {
        try {
            const bookCreated = await this.bookRepository.deleteBook(name, category, edition)
            return bookCreated
        }
        catch (err) {
            throw err
        }
    }
    async getAllBooks() {
        try {
            const books = await this.bookRepository.getAllBooks()
            return books
        }
        catch (err) {
            throw err
        }
    }
   
}
