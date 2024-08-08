import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Books } from "src/books/books.schema";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
        @InjectModel(Books.name)
        private readonly bookModel: Model<Books>,

    ) { }

    async registerUser(body) {
        try {
            const userCreated = await this.userModel.create(body)
            return userCreated.toObject()
        }
        catch (err) {
            throw err
        }
    }

    async getUser(rollNo) {
        try {
            console.log(rollNo)
            const user = await this.userModel.findOne({ rollNo })
            if (!user)
                return user
            return user.toObject()

        }
        catch (err) {
            throw err
        }
    }

    async getAllUsers() {
        try {

        }
        catch (err) {

        }
    }

    async deleteUser() {
        try {

        }
        catch (err) {

        }
    }

    async bookAlreadyBorrowed(rollNo, id): Promise<boolean> {
        try {
            const user = await this.userModel.findOne({
                rollNo,
                booksBorrowed: { $elemMatch: { $eq: id } }
            }).exec();
            if (user)
                return true
            else
                return false
        }
        catch (err) {
            throw err
        }
    }
    async borrowBook(rollNo, category, edition, name) {
        try {
            const book = await this.bookModel.findOneAndUpdate({ name, category, edition }, { $inc: { count: -1 } }, { new: true })
            console.log(book)
            if (!book)
                throw new NotFoundException("No Book Found")
            const user = await this.userModel.findOneAndUpdate({ rollNo }, { $push: { booksBorrowed: book._id } }, { new: true })
            console.log('three')
            return { book, user }
        }
        catch (err) {
            console.log(err)
            throw err
        }
    }
    async submitBorrowedBook(name, category, edition, rollNo) {
        try {
            const book = await this.bookModel.findOneAndUpdate({ name, category, edition }, { $inc: { count: 1 } }, { new: true })
            const user = await this.userModel.findOneAndUpdate({ rollNo }, { $pull: { booksBorrowed: book._id } }, { new: true })
            return { book, user }
        }
        catch (err) {
            console.log(err)
            throw err
        }
    }




}