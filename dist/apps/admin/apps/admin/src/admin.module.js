"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AdminBroModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const admin_bro_1 = require("admin-bro");
const nestjs_1 = require("@admin-bro/nestjs");
const SequelizeAdapter = require("@admin-bro/sequelize");
const config_1 = require("../../../libs/config/src");
const google_sheets_1 = require("../../../libs/google-sheets/src");
const db_1 = require("../../../libs/db/src");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const _admin_module_1 = require("./_admin.module");
const admin_resources_1 = require("./admin.resources");
admin_bro_1.default.registerAdapter(SequelizeAdapter);
let AdminBroModule = class AdminBroModule {
};
AdminBroModule = __decorate([
    common_1.Module({
        controllers: [admin_controller_1.AdminController],
        providers: [
            admin_service_1.AdminService,
        ],
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', '..', '..', '..', '..', '..', 'public'),
            }),
            google_sheets_1.GoogleSheetsModule,
            db_1.DatabaseModule,
            nestjs_1.AdminModule.createAdminAsync({
                imports: [
                    _admin_module_1.AdminModuleForService,
                ],
                inject: [
                    admin_service_1.AdminService,
                ],
                useFactory: (adminService) => ({
                    adminBroOptions: {
                        rootPath: '/',
                        resources: admin_resources_1.default,
                        dashboard: {
                            handler: (req) => __awaiter(void 0, void 0, void 0, function* () {
                                var _a, _b;
                                const res = {
                                    sheetId: config_1.default().google.sheets.application,
                                };
                                if (((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.type) === 'GET_SHEET_ID') {
                                    return res;
                                }
                                if (((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.type) === 'SAVE_TO_SHEETS') {
                                    res.data = yield adminService.saveToSheets();
                                    return res;
                                }
                                return Promise.resolve({ message: 'SEND TYPE' });
                            }),
                            component: admin_bro_1.default.bundle('./jsx-components/Dashboard'),
                        },
                        branding: {
                            companyName: 'Makers Application Admin Panel',
                            favicon: '/favicon.png',
                            softwareBrothers: false,
                            logo: '/logo.svg',
                        },
                    },
                }),
            }),
        ],
    })
], AdminBroModule);
exports.AdminBroModule = AdminBroModule;
//# sourceMappingURL=admin.module.js.map