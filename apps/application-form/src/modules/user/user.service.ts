import { Inject, Injectable } from '@nestjs/common';
import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';

import { User } from '@app/db/user/user.entity';
import { GoogleSheetsService } from '@app/google-sheets';
import {
  ChangeUserDto,
  ChangeUserLogicTestDto,
  ChangeUserPersonalityTestDto,
  ChangeUserTypingSpeedDto,
  ChangeUserVideoAskDto,
  TestItemDto,
} from './dto/user.dto';
import { headerRows } from '@app/config';
import { LogicTest } from '@app/db/logicTest/logicTest.entity';
import { VideoaskResponseDto } from './dto/videoaskData.dto';

type GSRow =
  | { [header: string]: string | number | boolean }
  | Array<string | number | boolean>;

@Injectable()
export class UserService {
  constructor(
    @Inject(User.PROVIDE_NAME) private readonly usersRepository: typeof User,
    @Inject(LogicTest.PROVIDE_NAME) private readonly logicTestRepository: typeof LogicTest,
    private readonly sheetService: GoogleSheetsService,
    @Inject('GOOGLE_SHEETS_USERS') private sheet: GoogleSpreadsheetWorksheet,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async saveToSheets(): Promise<User[]> {
    const users = await this.findAll();
    await this.sheet.clear();
    await this.sheet.setHeaderRow(headerRows);
    await this.sheet.addRows(
      users.map((item) => {
        return {
          video: this.sheetService.getVideoAskRowsById(
            item.video_ask_contact_id,
          )?.[4],
          ...item.toJSON(),
        };
      }) as GSRow[],
    );
    return users;
  }

  async findOrCreate(email: string, google_uid: string): Promise<User> {
    const candidate = await this.usersRepository.findByPk(google_uid);
    if (candidate) return candidate;
    const newUser = new this.usersRepository({ email, _id: google_uid });
    await newUser.save();
    return newUser;
  }

  async changeContactData(
    id: any,
    changeUserDto: ChangeUserDto,
  ): Promise<User> {
    const res = await this.usersRepository.update(changeUserDto, {
      returning: true, where: { _id: id }
    });
    return res[1][0];
  }

  async changeTypingSpeed(
    id: any,
    changeUserTypingSpeed: ChangeUserTypingSpeedDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      changeUserTypingSpeed,
      {
        returning: true, where: { _id: id }
      },
    );
    return user;
  }

  async changeLogicTest(
    id: any,
    {logic_test_data}: ChangeUserLogicTestDto,
  ): Promise<User> {

    const logicTests = await this.logicTestRepository.findAll();

    // const logic_test_correct_answers:number = logicTests.reduce((a, b)=>{
    //   return a + (b.correct_answers.split(";").filter(item=>item!="").includes(logic_test_data[b.id]) ? 1 : 0)
    // }, 0)

    const logicTestData:{
      [key: string]: TestItemDto
    } = {};
    logic_test_data.forEach(item=>logicTestData[item.id]=item);

    const logic_test_correct_answers:number = logicTests.reduce((a,b)=>{
      // let isCorrect = logicTestData[b.id].answers.every(answer => new RegExp(`^|\\;${answer.title}$|\\;`,'gi').test(b.correct_answers));
      let isCorrect = b.correct_answers.split(';').sort().join(';') === logicTestData[b.id].answers.map(i=>i.title).sort().join(';');
      return a + (isCorrect ? 1 : 0);
    }, 0);

    const [, [user]] = await this.usersRepository.update(
      {
        logic_test_data,
        logic_test_correct_answers
      },
      {
        returning: true, where: { _id: id }
      },
    );
    return user;
  }

  async changePersonalityTest(
    id: any,
    {personality_test_data}: ChangeUserPersonalityTestDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      {personality_test_data},
      {
        returning: true, where: { _id: id }
      },
    );
    return user;
  }

  async changeVideoAsk(
    id: any,
    {video_ask_contact_id}: ChangeUserVideoAskDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      {video_ask_contact_id},
      {
        returning: true, where: { _id: id }
      },
    );
    return user;
  }

  async saveVideoaskData(
    data: VideoaskResponseDto,
  ):Promise<void>{
    const video_ask_contact_id = data.contact.contact_id;
    await this.usersRepository.update(
      {videoask_data: data.contact},
      {
        returning: true, where: { video_ask_contact_id }
      },
    );
  }

  async setCompleteForm(id: string):Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      {is_completed: true},
      {
        returning: true, where: { _id: id }
      },
    );
    return user;
  }

  async deleteUser(id: any) {
    const res = await this.usersRepository.destroy({ where: { _id: id } });
    return res;
  }
}
