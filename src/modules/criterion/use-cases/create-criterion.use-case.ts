import { Injectable, Logger } from "@nestjs/common";
import { CreateCriterionRepository } from "../repository"; 
import { CreateCriterionDto } from "../dto/create-criterion.dto"; 

@Injectable ()
export class CreateCriterionUseCase {
    constructor(
        private readonly CreateCriterionRepository: CreateCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateCriterionDto) {
        try {
            const criterion = await this.CreateCriterionRepository.create(data);
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}