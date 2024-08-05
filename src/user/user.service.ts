import { Body, Injectable } from '@nestjs/common';
import { UserRepository } from './userRepository';
import { userDto } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }


    async registerUser(@Body() body: userDto) {
        try {
            const userCreated = await this.userRepository.registerUser(body)
            return userCreated
        }
        catch (err) {
            throw err
        }
    }
}
