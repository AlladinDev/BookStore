import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, adminSchema } from './admin.schema';
import { adminRepository } from './adminRepository';
import { BooksModule } from 'src/books/books.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './admin.jwtAuth';

@Module({
  imports: [MongooseModule.forFeature([{ name: Admin.name, schema: adminSchema }]),BooksModule,ConfigModule,JwtModule, PassportModule,],
  controllers: [AdminController],
  providers: [AdminService,adminRepository,JwtStrategy]
})
export class AdminModule {}
