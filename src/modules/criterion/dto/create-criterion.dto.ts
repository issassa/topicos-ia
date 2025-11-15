import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    weigth: number;
    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty()
    active: boolean;
}
