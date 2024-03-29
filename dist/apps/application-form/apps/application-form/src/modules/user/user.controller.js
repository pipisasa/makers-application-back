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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../../../../libs/db/src/user/user.entity");
const user_dto_1 = require("./dto/user.dto");
const user_service_1 = require("./user.service");
const user_entity_2 = require("./entity/user.entity");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.userService.findAll()).map(item => new user_entity_2.UserEntity(item.toJSON()));
        });
    }
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(body);
            return yield this.userService.findOrCreate(body.email, body.google_uid);
        });
    }
    changeContactData(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.changeContactData(id, body);
        });
    }
    changeTypingSpeed(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.changeTypingSpeed(id, body);
        });
    }
    changeLogicTest(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.changeLogicTest(id, body);
        });
    }
    changePersonalityTest(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.changePersonalityTest(id, body);
        });
    }
    changeVideoAsk(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userService.changeVideoAsk(id, body);
        });
    }
};
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    common_1.Patch(':id/contact-form'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.ChangeUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeContactData", null);
__decorate([
    common_1.Patch(':id/typing-speed'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.ChangeUserTypingSpeedDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeTypingSpeed", null);
__decorate([
    common_1.Patch(':id/logic-test'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.ChangeUserLogicTestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeLogicTest", null);
__decorate([
    common_1.Patch(':id/personality-test'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.ChangeUserPersonalityTestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePersonalityTest", null);
__decorate([
    common_1.Patch(':id/video-ask'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.ChangeUserVideoAskDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changeVideoAsk", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map