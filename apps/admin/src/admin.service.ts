import { headerRows } from '@app/config';
import { User } from '@app/db/user/user.entity';
import { GoogleSheetsService } from '@app/google-sheets';
import { Inject, Injectable } from '@nestjs/common';
import { GoogleSpreadsheetWorksheet } from 'google-spreadsheet';

type GSRow =
  | { [header: string]: string | number | boolean }
  | Array<string | number | boolean>;

@Injectable()
export class AdminService {
  constructor(
    @Inject(User.PROVIDE_NAME) private readonly usersRepository: typeof User,
    private readonly sheetService: GoogleSheetsService,
    @Inject('GOOGLE_SHEETS_USERS') private sheet: GoogleSpreadsheetWorksheet,
  ) {}
  async saveToSheets() {
    const users = await this.usersRepository.findAll();
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
}
