import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber, IsUUID, IsBoolean, IsOptional } from "class-validator";

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    year: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    duration: number;

    @IsUUID()  //identificador único universal
    @IsNotEmpty()
    @ApiProperty()
    genreId: string;

    @IsBoolean()  //true ou false
    @IsNotEmpty()
    @ApiProperty()
    @IsOptional()  
    favorite: boolean = false;
}
