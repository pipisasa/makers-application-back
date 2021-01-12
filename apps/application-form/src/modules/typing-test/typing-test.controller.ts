import { TypingTest } from '@app/db/typingTest/typingTest.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { TypingTestService } from './typing-test.service';

@Controller('typing-test')
export class TypingTestController {
  constructor(
    private readonly typingTestService: TypingTestService,
  ){}

  @Get()
  async getAll(): Promise<TypingTest[]>{
    return this.typingTestService.findAll();
  }

  @Get(':id')
  async getById(
    @Param('id') id: string,
  ):Promise<TypingTest>{
    return this.typingTestService.findById(id);
  }
}
