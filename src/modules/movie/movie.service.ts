import { Injectable } from '@nestjs/common';
import { CreateMovieUseCase } from './use-cases/create-movie.use-case';
import { ListMovieUseCase } from './use-cases/list-movie.use-case';
import { FindOneMovieUseCase } from './use-cases/find-one-movie.use-case';
import { FavoriteMovieUseCase } from './use-cases/favorite-movie.use-case';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
    constructor(
        private readonly createMovieUseCase: CreateMovieUseCase,
        private readonly listMovieUseCase: ListMovieUseCase,
        private readonly findoneMovieUseCase: FindOneMovieUseCase,
        private readonly favoriteMovieUseCase: FavoriteMovieUseCase)
        {}

  create(data: CreateMovieDto) {
    return this.createMovieUseCase.execute(data);
  }

  findAll() {
    return this.listMovieUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneMovieUseCase.execute(id);
  }

  favorite(id:string) {
    return this.favoriteMovieUseCase.execute(id);
  }

}
