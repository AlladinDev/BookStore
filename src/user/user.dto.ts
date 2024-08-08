import { IsNumber, IsPhoneNumber, IsString } from 'class-validator'
export class userDto {
    @IsString()
    name: string

    @IsString()
    classEnrolled: string


    @IsString()
    department: string


    @IsNumber()
    age: number

    @IsNumber()
    rollNo: number


    @IsPhoneNumber()
    mobileNumber: number


    @IsString()
    address: string

}
export class userRollNoDto {
    @IsNumber()
    rollNo: number

}
export class borrowBookDto {
    @IsNumber()
    rollNo: number

    @IsString()
    name: string


    @IsString()
    category: string

    @IsNumber()
    edition: number

}