import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable ()
export class CreateScenarioUseCase {
    constructor(
        private readonly CreateScenarioRepository: CreateScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateScenarioDto) {
        try {
            const scenario = await this.CreateScenarioRepository.create(data);
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}