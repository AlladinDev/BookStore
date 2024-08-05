import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";

@Injectable()
export class UserRepository {
    constructor(
        @InjectModel(User.name)
        private readonly userModel:Model<User>
    ) { }

    async registerUser(body) {
        try {
            const userCreated = await this.userModel.create(body)
            return userCreated.toObject()
        }
        catch (err) {
            throw err
        }
    }

    async getUser() {
        try {

        }
        catch (err) {

        }
    }

    async getAllUsers() {
        try {

        }
        catch (err) {

        }
    }

    async deleteUser() {
        try {

        }
        catch (err) {

        }
    }




}