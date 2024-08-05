import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Admin {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    address: string;

    @Prop()
    age:number;
 
    @Prop()
    password: string;

    @Prop()
    mobileNumber: number;

}
export const adminSchema = SchemaFactory.createForClass(Admin);