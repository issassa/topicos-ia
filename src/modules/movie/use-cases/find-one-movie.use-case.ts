import { Injectable, Logger } from "@nestjs/common";
import { FindOneMovieRepository } from "../repository/find-one-movie.repository"; 

@Injectable ()
export class FindOneMovieUseCase {
    constructor(
        private readonly findOneMovieRepository: FindOneMovieRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id:string) {
        try {
            const movie = await this.findOneMovieRepository.findOne(id);
            return movie;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}