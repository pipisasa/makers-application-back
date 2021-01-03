"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModuleForService = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const google_sheets_1 = require("../../../libs/google-sheets/src");
const db_1 = require("../../../libs/db/src");
let AdminModuleForService = class AdminModuleForService {
};
AdminModuleForService = __decorate([
    common_1.Module({
        controllers: [admin_controller_1.AdminController],
        providers: [
            admin_service_1.AdminService,
        ],
        imports: [
            google_sheets_1.GoogleSheetsModule,
            db_1.DatabaseModule,
        ],
        exports: [
            admin_service_1.AdminService
        ]
    })
], AdminModuleForService);
exports.AdminModuleForService = AdminModuleForService;
//# sourceMappingURL=_admin.module.js.map