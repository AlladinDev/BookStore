import {  Injectable } from "@nestjs/common";
import { Books } from "./books.schema";
import mongoose, { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/user/user.schema";
@Injectable()
export class booksRepository {

    constructor(
        @InjectModel(Books.name)
        private readonly bookModel: Model<Books>,  
      
    ) { }
    async storeBook(body: {}) {
        try {
            const book = (await this.bookModel.create(body)).toObject()
            return book
        }
        catch (err) {
            throw err
        }
    }
    async getBook(bookName, category, edition) {
        try {
            const book = await this.bookModel.findOne({ name: bookName, category, edition })
            if (!book)
                return book
            const formattedBookData = book.toObject()
            return formattedBookData

        }
        catch (err) {
            throw err
        }
    }
    async getAllBooks() {
        try {
            const book = await this.bookModel.find()
            return book

        }
        catch (err) {
            throw err
        }
    }
    async deleteBook(bookName, category, edition) {
        try {
            const deletedBook = await this.bookModel.findOneAndDelete({ name: bookName, category, edition })
            if (!deletedBook)
                return deletedBook
            const formattedBook = deletedBook.toObject()
            return formattedBook
        }
        catch (err) {
            throw err
        }
    }
    // async borrowBook(bookName, category, edition, rollNo) {
    //     const session = await mongoose.startSession()
    //     try {
    //         session.startTransaction()
    //         const book = await this.bookModel.findOneAndUpdate({ name: bookName, category, edition }, { $inc: { count: -1 } }, { new: true, session })
    //      //   const user = await this.userModel.findOneAndUpdate({ rollNo }, { $push: { booksBorrowed: book._id } }, { session })
    //        await  session.commitTransaction()
    //        await session.endSession()
    //         return { book, user }
    //     }
    //     catch (err) {
    //        await session.abortTransaction()
    //        await session.endSession()

    //         throw err
    //     }
    // }
    async increaseBookCount({ name, category, edition }) {
        try {
            const bookExists = await this.bookModel.findOne({ name, category, edition })
            bookExists.count++
            await bookExists.save()
            return bookExists
        }
        catch (err) {
            throw err
        }
    }
}