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
} from './dto/user.dto';
import { headerRows } from '@app/config';

type GSRow =
  | { [header: string]: string | number | boolean }
  | Array<string | number | boolean>;

@Injectable()
export class UserService {
  constructor(
    @Inject(User.PROVIDE_NAME) private readonly usersRepository: typeof User,
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
    const candidate = await this.usersRepository.findOne({
      where: { email, google_uid },
    });
    if (candidate) return candidate;
    const newUser = new this.usersRepository({ email, google_uid });
    await newUser.save();
    return newUser;
  }

  async changeContactData(
    id: any,
    changeUserDto: ChangeUserDto,
  ): Promise<User> {
    const res = await this.usersRepository.update(changeUserDto, {
      returning: true, where: { id }
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
        returning: true, where: { id }
      },
    );
    return user;
  }

  async changeLogicTest(
    id: any,
    changeUserLogicTestDto: ChangeUserLogicTestDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      changeUserLogicTestDto,
      {
        returning: true, where: { id }
      },
    );
    return user;
  }

  async changePersonalityTest(
    id: any,
    changeUserPersonalityTestDto: ChangeUserPersonalityTestDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      changeUserPersonalityTestDto,
      {
        returning: true, where: { id }
      },
    );
    return user;
  }

  async changeVideoAsk(
    id: any,
    changeUserVideoAskDto: ChangeUserVideoAskDto,
  ): Promise<User> {
    const [, [user]] = await this.usersRepository.update(
      changeUserVideoAskDto,
      {
        returning: true, where: { id }
      },
    );
    return user;
  }

  async deleteUser(id: any) {
    const res = await this.usersRepository.destroy({ where: { id } });
    return res;
  }
}
