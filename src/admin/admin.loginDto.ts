import { IsEmail, IsStrongPassword } from 'class-validator'
export class adminLoginDto {
    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}