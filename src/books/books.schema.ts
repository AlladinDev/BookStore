import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
@Schema()
export class Books {
    @Prop()
    name: string


    @Prop()
    title: string


    @Prop()
    category: string


    @Prop()
    authorName:string


    @Prop()
    edition:string

    @Prop()
    count:number
}
export const bookSchema=SchemaFactory.createForClass(Books)