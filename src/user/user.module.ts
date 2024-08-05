import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './userRepository';
import { UserController } from './user.controller';
import { User, userSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
    controllers:[UserController],
    providers:[UserService,UserRepository]
})
export class UserModule {}
