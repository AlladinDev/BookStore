import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, adminSchema } from './admin.schema';
import { adminRepository } from './adminRepository';
import { BooksModule } from 'src/books/books.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: adminSchema }]),BooksModule],
  controllers: [AdminController],
  providers: [AdminService,adminRepository]
})
export class AdminModule {}
