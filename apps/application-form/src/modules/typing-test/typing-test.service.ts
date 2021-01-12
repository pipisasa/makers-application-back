import { TypingTest } from '@app/db/typingTest/typingTest.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class TypingTestService {
  constructor(
    @Inject(TypingTest.PROVIDE_NAME) private readonly typingTestRepo: typeof TypingTest,
  ){}

  async findAll(): Promise<TypingTest[]>{
    const typingTests = await this.typingTestRepo.findAll();
    return typingTests;
  }

  async findById(id: string): Promise<TypingTest>{
    return this.typingTestRepo.findByPk(id);
  }
}
