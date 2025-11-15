import { Injectable, Logger } from "@nestjs/common";
import { FavoriteMovieRepository } from "../repository/favorite-movie.repository";

@Injectable ()
export class FavoriteMovieUseCase {
    constructor(
        private readonly favoriteMovieRepository: FavoriteMovieRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id: string) {
        try {
            return await this.favoriteMovieRepository.favorite(id);
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}

