"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSheetsModule = void 0;
const common_1 = require("@nestjs/common");
const google_sheets_providers_1 = require("./google-sheets.providers");
const google_sheets_service_1 = require("./google-sheets.service");
let GoogleSheetsModule = class GoogleSheetsModule {
};
GoogleSheetsModule = __decorate([
    common_1.Module({
        providers: [...google_sheets_providers_1.googleSheetsProviders, google_sheets_service_1.GoogleSheetsService],
        exports: [...google_sheets_providers_1.googleSheetsProviders, google_sheets_service_1.GoogleSheetsService],
    })
], GoogleSheetsModule);
exports.GoogleSheetsModule = GoogleSheetsModule;
//# sourceMappingURL=google-sheets.module.js.map