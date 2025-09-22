import { Injectable, Logger } from "@nestjs/common";
import { CreateOptionRepository } from "../repository"; 
import { CreateOptionDto } from "../dto/create-option.dto"; 

@Injectable ()
export class CreateOptionUseCase {
    constructor(
        private readonly CreateOptionRepository: CreateOptionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateOptionDto) {
        try {
            const option = await this.CreateOptionRepository.create(data);
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}