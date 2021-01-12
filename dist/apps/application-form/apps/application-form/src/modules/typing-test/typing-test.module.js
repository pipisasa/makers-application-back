"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypingTestModule = void 0;
const db_1 = require("../../../../../libs/db/src");
const common_1 = require("@nestjs/common");
const typing_test_controller_1 = require("./typing-test.controller");
const typing_test_service_1 = require("./typing-test.service");
let TypingTestModule = class TypingTestModule {
};
TypingTestModule = __decorate([
    common_1.Module({
        imports: [db_1.DatabaseModule],
        controllers: [typing_test_controller_1.TypingTestController],
        providers: [typing_test_service_1.TypingTestService, ...db_1.modelsProviders]
    })
], TypingTestModule);
exports.TypingTestModule = TypingTestModule;
//# sourceMappingURL=typing-test.module.js.map