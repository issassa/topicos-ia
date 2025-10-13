import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    weigth: number;
    @IsBoolean()
    @IsNotEmpty()
    active: boolean;
}
