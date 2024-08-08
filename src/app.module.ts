import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BooksModule, AdminModule, UserModule,ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestapp')
  ],
  
  //  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
