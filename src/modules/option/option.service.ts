import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase } from './use-cases/create-option.use-case';
import { ListOptionUseCase } from './use-cases/list-option.use-case';
import { DeleteOptionUseCase, FindOneOptionUseCase, UpdateOptionUseCase } from './use-cases';


@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase, 
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly findoneOptionUseCase: FindOneOptionUseCase) 
    {}

  create(scenarioId: string, data: CreateOptionDto) {
    return this.createOptionUseCase.execute(scenarioId, data);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneOptionUseCase.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}
