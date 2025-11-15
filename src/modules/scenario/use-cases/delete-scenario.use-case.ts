import { Injectable, Logger } from "@nestjs/common";
import { DeleteScenarioRepository } from "../repository/delete-scenario.repository";

@Injectable ()
export class DeleteScenarioUseCase {
    prisma: any;
    constructor(
        private readonly deleteScenarioRepository: DeleteScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            return await this.deleteScenarioRepository.delete(id);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
