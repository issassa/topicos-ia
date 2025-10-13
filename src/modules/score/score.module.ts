import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './score.service';
import { ScenarioController } from './score.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/shared.modules';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);


@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...useCases, ...repositories, Logger],
})

export class ScenarioModule {}
