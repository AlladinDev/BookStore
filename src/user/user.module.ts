import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './userRepository';
import { UserController } from './user.controller';
import { User, userSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from 'src/books/books.module';
@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),BooksModule],
    controllers:[UserController],
    providers:[UserService,UserRepository],
})
export class UserModule {}
