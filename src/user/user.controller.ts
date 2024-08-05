import { Controller, Post, Body } from '@nestjs/common';
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
}
