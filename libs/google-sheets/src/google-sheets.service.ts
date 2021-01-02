import { Inject, Injectable } from '@nestjs/common';
import {
  GoogleSpreadsheetRow,
  GoogleSpreadsheetWorksheet,
} from 'google-spreadsheet';
import { sheets_v4 } from 'googleapis';
import configuration from '@app/config';

export type GSRow =
  | { [header: string]: string | number | boolean }
  | Array<string | number | boolean>;

@Injectable()
export class GoogleSheetsService {
  private values: Array<Array<string>>;
  constructor(
    @Inject('GOOGLE_SHEETS_USERS')
    private readonly sheet: GoogleSpreadsheetWorksheet,
    @Inject('GOOGLE_SHEETS_API') private readonly sheetsApi: sheets_v4.Sheets,
    @Inject('GOOGLE_SHEETS_VIDEOASK')
    private readonly videoAskSheets: GoogleSpreadsheetWorksheet,
  ) {
    this.sheetsApi.spreadsheets.values
      .get({
        spreadsheetId: configuration().google.sheets.videoAsk,
        range: 'A2:T',
      })
      .then((res) => {
        this.values = res.data.values;
      });
  }
  async setHeaders(headers: string[]): Promise<void> {
    return this.sheet.setHeaderRow(headers);
  }

  async addRow(data: GSRow): Promise<GoogleSpreadsheetRow> {
    return this.sheet.addRow(data);
  }

  async addRows(data: Array<GSRow>): Promise<GoogleSpreadsheetRow[]> {
    return this.sheet.addRows(data);
  }

  getVideoAskRowsById(id: string) {
    const row = this.values.find((row) => row[0] === id);
    return row;
  }
}
