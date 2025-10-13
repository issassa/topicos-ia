import { PartialType } from '@nestjs/mapped-types';
import { CreateCriterionDto } from './create-criterion.dto';

export class DeleteScenarioDto extends PartialType(CreateCriterionDto) {}
