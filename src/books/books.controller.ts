import {  Controller,  Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) { }
    @Get('/getbook')
    async getOneBook(@Query() queryOBj) {
        try {
            const book = await this.bookService.getBook(queryOBj)
            return { book: book }
        }
        catch (err) {
            throw err
        }
    }
    // @Post('/addbook')
    // async registerBook(@Body() body) {
    //     console.log(body)
    //     try {
    //         const book = await this.bookService.registerBook(body)
    //         return { book: book }
    //     }
    //     catch (err) {
    //         throw err
    //     }

    // }
    // @Delete('/deletebook')
    // async deleteBook(@Body() body) {
    //     console.log(body)
    //     try {
    //         const book = await this.bookService.deleteBook(body)
    //         return { book: book }
    //     }
    //     catch (err) {
    //         throw err
    //     }

    // }

    @Get('/getallbooks')
    async getAllBooks() {
        try {
            const book = await this.bookService.getAllBooks()
            return { book: book }
        }
        catch (err) {
            throw err
        }

    }

}
