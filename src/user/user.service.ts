import { Body, ForbiddenException, Injectable, NotFoundException, Query } from '@nestjs/common';
import { UserRepository } from './userRepository';
import { borrowBookDto, userDto, userRollNoDto } from './user.dto';
import mongoose from 'mongoose';
import { BooksService } from 'src/books/books.service';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly bookService: BooksService
    ) { }


    async registerUser(@Body() body: userDto) {
        try {
            const userExists = await this.userRepository.getUser(body.rollNo)
            if (userExists)
                throw new ForbiddenException('User Already Exists')
            const userCreated = await this.userRepository.registerUser(body)
            return userCreated
        }
        catch (err) {
            throw err
        }
    }
    async getUser({ rollNo }: userRollNoDto) {
        try {
            const user = await this.userRepository.getUser(rollNo)
            return user
        }
        catch (err) {
            throw err
        }
    }
    async borrowBook({ name, category, edition, rollNo }: borrowBookDto) {
        try {
            console.log('hi')
            const bookExists = await this.bookService.getBook({ name, category, edition })
            if(!bookExists)
                throw new NotFoundException("Book Not Found")
            const bookAlreadyBorrowed = await this.userRepository.bookAlreadyBorrowed(rollNo, bookExists._id)
            if (bookAlreadyBorrowed) {
                throw new ForbiddenException("This Book Already Exists With User")
            }
            const result = await this.userRepository.borrowBook(rollNo, category, edition, name)//  
            return result
        }
        catch (err) {
            throw err
        }
    }
    async submitBook({ name, category, edition, rollNo }: borrowBookDto) {
        try {
            const { book, user } = await this.userRepository.submitBorrowedBook(name, category, edition, rollNo)
            return { book, user }
        }
        catch (err) {
            throw err
        }

    }
}
