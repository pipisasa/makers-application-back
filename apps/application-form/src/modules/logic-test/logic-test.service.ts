import { LogicTest } from '@app/db/logicTest/logicTest.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class LogicTestService {
  constructor(
    @Inject(LogicTest.PROVIDE_NAME) private readonly logicTestRepo: typeof LogicTest,
  ){}

  async findAll(): Promise<LogicTest[]>{
    const logicTests = await this.logicTestRepo.findAll();
    return logicTests;
  }

  async findById(id: string): Promise<LogicTest>{
    return this.logicTestRepo.findByPk(id);
  }
}
