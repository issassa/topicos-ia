import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/list-scenario.use-case';
import { DeleteScenarioUseCase, UpdateScenarioUseCase } from './use-cases';


@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase) 
    {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}
