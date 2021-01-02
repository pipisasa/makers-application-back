import configuration from '@app/config';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { google } from 'googleapis';

const config = configuration();
const botConf = config.serviceAccountConfig;

export const googleSheetsProviders = [
  {
    provide: 'GOOGLE_SHEETS_USERS',
    useFactory: async () => {
      const doc = new GoogleSpreadsheet(config.google.sheets.application);
      doc.useServiceAccountAuth(config.serviceAccountConfig);
      await doc.loadInfo(); // loads document properties and worksheets
      // await doc.sheetsByIndex[0].loadHeaderRow();
      return doc.sheetsByIndex[0];
    },
  },
  {
    provide: 'GOOGLE_SHEETS_VIDEOASK',
    useFactory: async () => {
      const doc = new GoogleSpreadsheet(config.google.sheets.videoAsk);
      doc.useServiceAccountAuth(config.serviceAccountConfig);
      await doc.loadInfo(); // loads document properties and worksheets
      // await doc.sheetsByIndex[0].loadHeaderRow();
      return doc.sheetsByIndex[0];
    },
  },
  {
    provide: 'GOOGLE_SHEETS_API',
    useFactory: async () => {
      const GClient = new google.auth.JWT(
        botConf.client_email,
        null,
        botConf.private_key,
        [
          'https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/drive.file',
          'https://www.googleapis.com/auth/spreadsheets',
        ],
      );
      const sheets = google.sheets('v4');
      sheets.context._options.auth = GClient;
      return sheets;
    },
  },
];
