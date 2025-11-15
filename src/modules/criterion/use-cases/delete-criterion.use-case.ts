import { Injectable, Logger } from "@nestjs/common";
import { DeleteCriterionRepository } from "../repository/delete-criterion.repository"; 

@Injectable ()
export class DeleteCriterionUseCase {
    prisma: any;
    constructor(
        private readonly deleteCriterionRepository: DeleteCriterionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            return await this.deleteCriterionRepository.delete(id);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
