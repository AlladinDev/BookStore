import { IsNumber, IsString } from 'class-validator'
import { StringifyOptions } from 'querystring'
export class booksDto {
    @IsString()
    name: string

    @IsString()
    authorName: string

    @IsString()
    title: string

    @IsString()
    category: string

    @IsNumber()
    edition: number


    @IsNumber()
    count: number
}

export class getBookDto {
    @IsString()
    name: string

    @IsString()
    category: string


    @IsNumber()
    edition: number

}