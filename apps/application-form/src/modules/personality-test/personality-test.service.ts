import { PersonalityTest } from '@app/db/personalityTest/personalityTest.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class PersonalityTestService {
  constructor(
    @Inject(PersonalityTest.PROVIDE_NAME) private readonly personalityTestRepo: typeof PersonalityTest,
  ){}

  async findAll():Promise<PersonalityTest[]>{
    return this.personalityTestRepo.findAll();
  }

  async findById(id: string):Promise<PersonalityTest>{
    return this.personalityTestRepo.findByPk(id)
  }
}
