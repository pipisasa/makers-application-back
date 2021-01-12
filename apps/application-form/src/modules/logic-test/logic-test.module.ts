import { DatabaseModule, modelsProviders } from '@app/db';
import { Module } from '@nestjs/common';
import { LogicTestController } from './logic-test.controller';
import { LogicTestService } from './logic-test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LogicTestController],
  providers: [LogicTestService, ...modelsProviders]
})
export class LogicTestModule {}
