import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
@Schema()
export class User {
    @Prop()
    name: string


    @Prop()
    classEnrolled: string


    @Prop()
    department: string


    @Prop()
    age: number

    @Prop()
    rollNo: number


    @Prop()
    mobileNumber: number


    @Prop()
    address: string


    @Prop()
    booksBorrowed: []


}
export const userSchema = SchemaFactory.createForClass(User)