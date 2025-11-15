import { PartialType } from '@nestjs/mapped-types';
import { CreateScoreDto } from './create-score.dto';

export class DeleteScoreDto extends PartialType(CreateScoreDto) {}
