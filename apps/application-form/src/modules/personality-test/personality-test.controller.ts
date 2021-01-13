import { PersonalityTest } from '@app/db/personalityTest/personalityTest.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { PersonalityTestService } from './personality-test.service';

@Controller('personality-test')
export class PersonalityTestController {
  constructor(
    private readonly personalityTestService: PersonalityTestService,
  ){}

  @Get()
  async getAll():Promise<PersonalityTest[]>{
    return this.personalityTestService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id') id: string,
  ):Promise<PersonalityTest>{
    return this.personalityTestService.findById(id);
  }
  
}
