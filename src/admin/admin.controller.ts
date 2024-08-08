import { Body, Controller, Delete, Get, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express'
import { JwtAuthGuard } from './admin.guard';

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService

    ) { }
    @Post('register')
    async createAdmin(@Body() body) {
        console.log(body)
        return await this.adminService.registerAdmin(body)
    }

    @UseGuards(JwtAuthGuard)
    @Get('getadmin')
    async getAdmin(@Query() emailQuery) {
        return await this.adminService.getAdminData(emailQuery)
    }
    @Post('login')
    async login(@Body() body, @Res({ passthrough: true }) Res: Response): Promise<{}> {
        const token = await this.adminService.login(body)
        console.log(token)
        Res.set("Authorization", token)
        console.log('pass')
        return { message: 'Admin Authenticated' }
    }
    @UseGuards(JwtAuthGuard)
    @Post('addbook')
    async addBook(@Body() body) {
        return await this.adminService.addBook(body)

    }
    @UseGuards(JwtAuthGuard)
    @Delete('deletebook')
    async deleteBook(@Body() body) {
        return await this.adminService.deleteBook(body)
    }

}
