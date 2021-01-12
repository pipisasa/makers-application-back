import { Test, TestingModule } from '@nestjs/testing';
import { LogicTestController } from './logic-test.controller';

describe('LogicTestController', () => {
  let controller: LogicTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogicTestController],
    }).compile();

    controller = module.get<LogicTestController>(LogicTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
