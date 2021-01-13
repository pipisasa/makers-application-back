import { DatabaseModule, modelsProviders } from '@app/db';
import { Module } from '@nestjs/common';
import { PersonalityTestController } from './personality-test.controller';
import { PersonalityTestService } from './personality-test.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonalityTestController],
  providers: [PersonalityTestService, ...modelsProviders]
})
export class PersonalityTestModule {}
