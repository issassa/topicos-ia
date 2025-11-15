import { Injectable, Logger } from "@nestjs/common";
import { FindOneCriterionRepository } from "../repository/find-one-criterion.repository"; 

@Injectable ()
export class FindOneCriterionUseCase {
    constructor(
        private readonly findOneCriterionRepository: FindOneCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id : string) {
        try {
            const criterion = await this.findOneCriterionRepository.findOne(id);
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}