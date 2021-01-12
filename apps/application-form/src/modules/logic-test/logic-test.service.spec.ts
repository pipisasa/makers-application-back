import { Test, TestingModule } from '@nestjs/testing';
import { LogicTestService } from './logic-test.service';

describe('LogicTestService', () => {
  let service: LogicTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogicTestService],
    }).compile();

    service = module.get<LogicTestService>(LogicTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
