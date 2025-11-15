import { Injectable, Logger } from "@nestjs/common";
import { CreateGenreRepository } from "../repository/create-genre.repository"; 
import { CreateGenreDto } from "../dto/create-genre.dto"; 

@Injectable ()
export class CreateGenreUseCase {
    constructor(
        private readonly CreateGenreRepository: CreateGenreRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateGenreDto) {
        try {
            const genre = await this.CreateGenreRepository.create(data);
            return genre;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}