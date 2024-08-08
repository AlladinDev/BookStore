import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import mongoose, { ObjectId, Types } from 'mongoose'
import { Books } from 'src/books/books.schema'
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


    @Prop({ type: [{ type: Types.ObjectId, ref: 'Book' }] })
    booksBorrowed:Types.ObjectId[]


}
export const userSchema = SchemaFactory.createForClass(User)