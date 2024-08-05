import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BooksModule } from './books/books.module';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

@Module({
  imports: [BooksModule, AdminModule, UserModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestapp')
  ],
  
  //  controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
