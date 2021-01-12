import { LogicTest } from '@app/db/logicTest/logicTest.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { LogicTestService } from './logic-test.service';

@Controller('logic-test')
export class LogicTestController {
  constructor(
    private readonly logicTestService: LogicTestService,
  ){}

  @Get()
  async getAll(): Promise<LogicTest[]>{
    return this.logicTestService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id') id: string,
  ):Promise<LogicTest>{
    return this.logicTestService.findById(id);
  }
}
