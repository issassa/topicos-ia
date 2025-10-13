import { Injectable, Logger } from "@nestjs/common";
import { ListCriterionRepository } from "../repository"; 

@Injectable ()
export class ListCriterionUseCase {
    constructor(
        private readonly listCriterionRepository: ListCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const criterion = await this.listCriterionRepository.list();
            return criterion;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}