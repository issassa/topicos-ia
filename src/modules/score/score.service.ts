import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { CreateScoreUseCase } from './use-cases/create-score.use-case';
import { ListScoreUseCase } from './use-cases/list-score.use-case';
import { DeleteScoreUseCase, FindOneScoreUseCase, UpdateScoreUseCase } from './use-cases';


@Injectable()
export class ScoreService {
  constructor(private readonly createScoreUseCase: CreateScoreUseCase, 
    private readonly listScoreUseCase: ListScoreUseCase,
    private readonly deleteScoreUseCase: DeleteScoreUseCase,
    private readonly updateScoreUseCase: UpdateScoreUseCase,
    private readonly findoneScoreUseCase: FindOneScoreUseCase) 
    {}

  create(data: CreateScoreDto) {
    return this.createScoreUseCase.execute(data);
  }

  findAll() {
    return this.listScoreUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneScoreUseCase.execute(id);
  }

  update(id: string, updateScoreDto: UpdateScoreDto) {
    return this.updateScoreUseCase.execute(id, updateScoreDto);
  }

  remove(id: string) {
    return this.deleteScoreUseCase.execute(id);
  }
}
