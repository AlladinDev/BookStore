import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { Admin } from './admin.schema';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class adminRepository {
    constructor(
        @InjectModel(Admin.name)
        private adminModel: Model<Admin>,
    ) { }
    async create(body): Promise<{}> {
        try {
            return await this.adminModel.create(body)
        }
        catch (err) {
            console.log(err)
        }
    }
    async getAdminData(email):
        Promise<null | { email: '', password: '', __v: '', _id: '' }> {
        try {
            const adminData = this.adminModel.findOne({ email: email })
            return (await adminData).toObject()
        }
        catch (err) {
            console.log(err)
        }

    }

}