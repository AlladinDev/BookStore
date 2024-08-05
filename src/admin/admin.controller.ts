import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { AdminService } from './admin.service';


@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService

    ) { }
    @Post('register')
    async createAdmin(@Body() body) {
        console.log(body)
        return await this.adminService.registerAdmin(body)
    }
    @Get('getadmin')
    async getAdmin(@Query() emailQuery) {
        return await this.adminService.getAdminData(emailQuery)
    }
    @Post('login')
    async login(@Body() body) {
        return await this.adminService.login(body)
    }

    @Post('addbook')
    async addBook(@Body() body) {
        return await this.adminService.addBook(body)
    }

    @Delete('deletebook')
    async deleteBook(@Body() body) {
        return await this.adminService.deleteBook(body)
    }
   
}
