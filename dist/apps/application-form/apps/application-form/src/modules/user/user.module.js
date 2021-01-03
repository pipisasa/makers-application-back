"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const google_sheets_1 = require("../../../../../libs/google-sheets/src");
const models_providers_1 = require("../../../../../libs/db/src/models.providers");
const db_1 = require("../../../../../libs/db/src");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [google_sheets_1.GoogleSheetsModule, db_1.DatabaseModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, ...models_providers_1.modelsProviders],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map