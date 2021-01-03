"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.GoogleSheetsService = void 0;
const common_1 = require("@nestjs/common");
const google_spreadsheet_1 = require("google-spreadsheet");
const googleapis_1 = require("googleapis");
const config_1 = require("../../config/src");
let GoogleSheetsService = class GoogleSheetsService {
    constructor(sheet, sheetsApi, videoAskSheets) {
        this.sheet = sheet;
        this.sheetsApi = sheetsApi;
        this.videoAskSheets = videoAskSheets;
        this.sheetsApi.spreadsheets.values
            .get({
            spreadsheetId: config_1.default().google.sheets.videoAsk,
            range: 'A2:T',
        })
            .then((res) => {
            this.values = res.data.values;
        });
    }
    setHeaders(headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sheet.setHeaderRow(headers);
        });
    }
    addRow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sheet.addRow(data);
        });
    }
    addRows(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sheet.addRows(data);
        });
    }
    getVideoAskRowsById(id) {
        const row = this.values.find((row) => row[0] === id);
        return row;
    }
};
GoogleSheetsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('GOOGLE_SHEETS_USERS')),
    __param(1, common_1.Inject('GOOGLE_SHEETS_API')),
    __param(2, common_1.Inject('GOOGLE_SHEETS_VIDEOASK')),
    __metadata("design:paramtypes", [google_spreadsheet_1.GoogleSpreadsheetWorksheet, googleapis_1.sheets_v4.Sheets, google_spreadsheet_1.GoogleSpreadsheetWorksheet])
], GoogleSheetsService);
exports.GoogleSheetsService = GoogleSheetsService;
//# sourceMappingURL=google-sheets.service.js.map