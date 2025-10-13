import { Injectable, Logger } from "@nestjs/common";
import { FindOneScoreRepository } from "../repository/find-one-score.repository";

@Injectable ()
export class FindOneScoreUseCase {
    constructor(
        private readonly findOneScoreRepository: FindOneScoreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id : string) {
        try {
            const score = await this.findOneScoreRepository.findOne(id);
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}