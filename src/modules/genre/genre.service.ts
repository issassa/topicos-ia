import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { CreateGenreUseCase } from './use-cases/create-genre.use-case';
import { ListGenreUseCase } from './use-cases/list-genre.use-case';
import { FindOneGenreUseCase } from './use-cases/find-one-genre.use-case';

@Injectable()
export class GenreService {
    constructor(
        private readonly createGenreUseCase: CreateGenreUseCase,
        private readonly listGenreUseCase: ListGenreUseCase,
        private readonly findoneGenreUseCase: FindOneGenreUseCase)
        {}

  create(data: CreateGenreDto) {
    return this.createGenreUseCase.execute(data);
  }

  findAll() {
    return this.listGenreUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneGenreUseCase.execute(id);
  }

}
