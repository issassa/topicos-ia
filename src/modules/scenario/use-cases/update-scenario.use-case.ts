import { Injectable, Logger } from "@nestjs/common";
import { UpdateScenarioRepository } from "../repository/update-scenario.repository";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";

@Injectable ()
export class UpdateScenarioUseCase {
    constructor(
        private readonly updateScenarioRepository: UpdateScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string, data: UpdateScenarioDto) {
        try {
            return await this.updateScenarioRepository.update(id, data);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
