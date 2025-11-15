import { Injectable, Logger } from "@nestjs/common";
import { CreateMovieRepository } from "../repository/create-movie.repository"; 
import { CreateMovieDto } from "../dto/create-movie.dto"; 

@Injectable ()
export class CreateMovieUseCase {
    constructor(
        private readonly CreateMovieRepository: CreateMovieRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateMovieDto) {
        try {
            const movie = await this.CreateMovieRepository.create(data);
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}