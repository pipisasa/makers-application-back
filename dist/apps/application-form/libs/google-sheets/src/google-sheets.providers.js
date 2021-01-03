"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSheetsProviders = void 0;
const config_1 = require("../../config/src");
const google_spreadsheet_1 = require("google-spreadsheet");
const googleapis_1 = require("googleapis");
const config = config_1.default();
const botConf = config.serviceAccountConfig;
exports.googleSheetsProviders = [
    {
        provide: 'GOOGLE_SHEETS_USERS',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const doc = new google_spreadsheet_1.GoogleSpreadsheet(config.google.sheets.application);
            doc.useServiceAccountAuth(config.serviceAccountConfig);
            yield doc.loadInfo();
            return doc.sheetsByIndex[0];
        }),
    },
    {
        provide: 'GOOGLE_SHEETS_VIDEOASK',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const doc = new google_spreadsheet_1.GoogleSpreadsheet(config.google.sheets.videoAsk);
            doc.useServiceAccountAuth(config.serviceAccountConfig);
            yield doc.loadInfo();
            return doc.sheetsByIndex[0];
        }),
    },
    {
        provide: 'GOOGLE_SHEETS_API',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const GClient = new googleapis_1.google.auth.JWT(botConf.client_email, null, botConf.private_key, [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]);
            const sheets = googleapis_1.google.sheets('v4');
            sheets.context._options.auth = GClient;
            return sheets;
        }),
    },
];
//# sourceMappingURL=google-sheets.providers.js.map