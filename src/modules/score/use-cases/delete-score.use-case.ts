import { Injectable, Logger } from "@nestjs/common";
import { DeleteScoreRepository } from "../repository/delete-score.repository";

@Injectable ()
export class DeleteScoreUseCase {
    prisma: any;
    constructor(
        private readonly deleteScoreRepository: DeleteScoreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            return await this.deleteScoreRepository.delete(id);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
