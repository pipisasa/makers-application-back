"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogicTestModule = void 0;
const db_1 = require("../../../../../libs/db/src");
const common_1 = require("@nestjs/common");
const logic_test_controller_1 = require("./logic-test.controller");
const logic_test_service_1 = require("./logic-test.service");
let LogicTestModule = class LogicTestModule {
};
LogicTestModule = __decorate([
    common_1.Module({
        imports: [db_1.DatabaseModule],
        controllers: [logic_test_controller_1.LogicTestController],
        providers: [logic_test_service_1.LogicTestService, ...db_1.modelsProviders]
    })
], LogicTestModule);
exports.LogicTestModule = LogicTestModule;
//# sourceMappingURL=logic-test.module.js.map