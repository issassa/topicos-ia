import { Injectable, Logger } from "@nestjs/common";
import { DeleteOptionRepository } from "../repository/delete-option.repository"; 

@Injectable ()
export class DeleteOptionUseCase {
    prisma: any;
    constructor(
        private readonly deleteOptionRepository: DeleteOptionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            return await this.deleteOptionRepository.delete(id);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
