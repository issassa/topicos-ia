import { Injectable, Logger } from "@nestjs/common";
import { CreateScoreRepository } from "../repository/create-score.repository";
import { CreateScoreDto } from "../dto/create-score.dto";

@Injectable ()
export class CreateScoreUseCase {
    constructor(
        private readonly CreateScoreRepository: CreateScoreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateScoreDto) {
        try {
            const score = await this.CreateScoreRepository.create(data);
            return score;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}