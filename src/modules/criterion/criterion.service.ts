import { Injectable } from '@nestjs/common';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';
import { CreateCriterionUseCase } from './use-cases/create-criterion.use-case';
import { ListCriterionUseCase } from './use-cases/list-criterion.use-case';
import { DeleteCriterionUseCase, FindOneCriterionUseCase, UpdateCriterionUseCase } from './use-cases';


@Injectable()
export class CriterionService {
  constructor(private readonly createCriterionUseCase: CreateCriterionUseCase, 
    private readonly listCriterionUseCase: ListCriterionUseCase,
    private readonly deleteCriterionUseCase: DeleteCriterionUseCase,
    private readonly updateCriterionUseCase: UpdateCriterionUseCase,
    private readonly findoneCriterionUseCase: FindOneCriterionUseCase) 
    {}

  create(data: CreateCriterionDto) {
    return this.createCriterionUseCase.execute(data);
  }

  findAll() {
    return this.listCriterionUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneCriterionUseCase.execute(id);
  }

  update(id: string, updateCriterionDto: UpdateCriterionDto) {
    return this.updateCriterionUseCase.execute(id, updateCriterionDto);
  }

  remove(id: string) {
    return this.deleteCriterionUseCase.execute(id);
  }
}
