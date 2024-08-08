import { Controller, Post,Get, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }


    @Post('register')
    async registerUser(@Body() body) {
        try {
            const userCreated = await this.userService.registerUser(body)
            return { user: userCreated }
        }
        catch (err) {
            throw err
        }
    }

    @Get('getuser')
    async getUser(@Query() queryObj) {
        try {
            const user = await this.userService.getUser(queryObj)
            return {  user }
        }
        catch (err) {
            throw err
        }
    }
    @Post('borrowbook')
    async borrowBook(@Body() body) {
        try {
          return await this.userService.borrowBook(body)
            
        }
        catch (err) {
            throw err
        }
    }
    @Post('submitbook')
    async submitBook(@Body() body) {
        try {
            const {book,user} = await this.userService.submitBook(body)
            return {  book,user }
        }
        catch (err) {
            throw err
        }
    }
}
