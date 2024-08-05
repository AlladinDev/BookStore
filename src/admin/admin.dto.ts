import { IsEmail, IsNotEmpty, IsStrongPassword, IsString, IsPhoneNumber, IsNumber, isEmail } from 'class-validator';

export class adminDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    address: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    mobileNumber: number;
}
export class emailDto {

    @IsEmail()
    email: string
}