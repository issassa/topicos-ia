import { Injectable, Logger } from "@nestjs/common";
import { UpdateCriterionRepository } from "../repository"; 
import { UpdateCriterionDto } from "../dto/update-criterion.dto";

@Injectable ()
export class UpdateCriterionUseCase {
    constructor(
        private readonly updateCriterionRepository: UpdateCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string, data: UpdateCriterionDto) {
        try {
            return await this.updateCriterionRepository.update(id, data);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
