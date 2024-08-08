import { BadRequestException, Body, ForbiddenException, HttpCode, HttpStatus, Injectable, NotFoundException,  Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express'
import { adminDto, emailDto } from './admin.dto';
import { adminRepository } from './adminRepository';
import * as bcrypt from 'bcrypt';
import { adminLoginDto } from './admin.loginDto'
import { getBookDto, booksDto } from 'src/books/books.dto';
import { BooksService } from 'src/books/books.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: adminRepository,
        private readonly bookService: BooksService,
        private readonly configService:ConfigService,
        private readonly jwt:JwtService
    ) { }
    async registerAdmin(body: adminDto) {
        try {
            const adminExists = await this.adminRepository.getAdminData(body.email)
            if (adminExists) {
                throw new ForbiddenException('admin alreay exists')
            }
            body.password = await bcrypt.hash(body.password, 10);
            return this.adminRepository.create(body)
        }
        catch (err) {
            throw err
        }
    }
    async login(body: adminLoginDto):Promise<string>{
        try {

            const adminExists = await this.adminRepository.getAdminData(body.email)
            if (!adminExists)
                throw new NotFoundException('Admin Not Found')
            const passwordMatches = await bcrypt.compare(body.password, adminExists.password)
            if (!passwordMatches)
                throw new BadRequestException("Incorrect Credientials")
           const token='Bearer '+await this.jwt.signAsync({userType:"admin",email:body.email},{secret:this.configService.get('JwtSecretKey')})
           return token
        }
        catch (err) {
            throw err

        }
    }
    async getAdminData({ email }: emailDto): Promise<{}> {
        try {

            const { password, _id, __v, ...necessaryData } = await this.adminRepository.getAdminData(email)
            return necessaryData
        }
        catch (err) {
            throw err
        }
    }
    async addBook(body: booksDto) {
        try {
            const bookRegistered = await this.bookService.registerBook(body)
            return { book: bookRegistered }
        }
        catch (err) {
            throw err
        }
    }
    async deleteBook({name,category,edition}:getBookDto) {
        try {
            const bookDeleted = await this.bookService.deleteBook({name,category,edition})
            return { book: bookDeleted }
        }
        catch (err) {
            throw err
        }


    }
    async getAllBooks() {
        try {
            const books=await this.bookService.getAllBooks()
            return {books:books}

        }
        catch (err) {
            throw err
        }
    }
}


