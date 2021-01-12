"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./modules/user/user.module");
const config_2 = require("../../../libs/config/src");
const db_1 = require("../../../libs/db/src");
const google_sheets_1 = require("../../../libs/google-sheets/src");
const logic_test_module_1 = require("./modules/logic-test/logic-test.module");
const typing_test_module_1 = require("./modules/typing-test/typing-test.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', '..', '..', '..', '..', '..', 'public'),
            }),
            config_1.ConfigModule.forRoot({
                load: [config_2.default],
                isGlobal: true,
            }),
            db_1.DatabaseModule,
            user_module_1.UserModule,
            google_sheets_1.GoogleSheetsModule,
            logic_test_module_1.LogicTestModule,
            typing_test_module_1.TypingTestModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map