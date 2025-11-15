import { PartialType } from '@nestjs/mapped-types';
import { CreateScenarioDto } from './create-scenario.dto';

export class DeleteScenarioDto extends PartialType(CreateScenarioDto) {}
