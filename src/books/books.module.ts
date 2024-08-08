import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { booksRepository } from './books.repsitory';
import { Books, bookSchema } from './books.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Books.name, schema: bookSchema }])],
  controllers: [BooksController],
  exports: [MongooseModule,BooksService],
  providers: [BooksService, booksRepository]
})
export class BooksModule { }
