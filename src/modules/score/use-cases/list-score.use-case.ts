import { Injectable, Logger } from "@nestjs/common";
import { ListScoreRepository } from "../repository/list-score.repository";

@Injectable ()
export class ListScoreUseCase {
    constructor(
        private readonly listScoreRepository: ListScoreRepository,
        private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const score = await this.listScoreRepository.list();
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}