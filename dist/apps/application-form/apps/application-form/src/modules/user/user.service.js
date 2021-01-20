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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const google_spreadsheet_1 = require("google-spreadsheet");
const user_entity_1 = require("../../../../../libs/db/src/user/user.entity");
const google_sheets_1 = require("../../../../../libs/google-sheets/src");
const config_1 = require("../../../../../libs/config/src");
const logicTest_entity_1 = require("../../../../../libs/db/src/logicTest/logicTest.entity");
let UserService = class UserService {
    constructor(usersRepository, logicTestRepository, sheetService, sheet) {
        this.usersRepository = usersRepository;
        this.logicTestRepository = logicTestRepository;
        this.sheetService = sheetService;
        this.sheet = sheet;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersRepository.findAll();
            return users;
        });
    }
    saveToSheets() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.findAll();
            yield this.sheet.clear();
            yield this.sheet.setHeaderRow(config_1.headerRows);
            yield this.sheet.addRows(users.map((item) => {
                var _a;
                return Object.assign({ video: (_a = this.sheetService.getVideoAskRowsById(item.video_ask_contact_id)) === null || _a === void 0 ? void 0 : _a[4] }, item.toJSON());
            }));
            return users;
        });
    }
    findOrCreate(email, google_uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const candidate = yield this.usersRepository.findByPk(google_uid);
            if (candidate)
                return candidate;
            const newUser = new this.usersRepository({ email, _id: google_uid });
            yield newUser.save();
            return newUser;
        });
    }
    changeContactData(id, changeUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.usersRepository.update(changeUserDto, {
                returning: true, where: { _id: id }
            });
            return res[1][0];
        });
    }
    changeTypingSpeed(id, changeUserTypingSpeed) {
        return __awaiter(this, void 0, void 0, function* () {
            const [, [user]] = yield this.usersRepository.update(changeUserTypingSpeed, {
                returning: true, where: { _id: id }
            });
            return user;
        });
    }
    changeLogicTest(id, { logic_test_data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const logicTests = yield this.logicTestRepository.findAll();
            const logicTestData = {};
            logic_test_data.forEach(item => logicTestData[item.id] = item);
            const logic_test_correct_answers = logicTests.reduce((a, b) => {
                let isCorrect = b.correct_answers.split(';').sort().join(';') === logicTestData[b.id].answers.map(i => i.title).sort().join(';');
                return a + (isCorrect ? 1 : 0);
            }, 0);
            const [, [user]] = yield this.usersRepository.update({
                logic_test_data,
                logic_test_correct_answers
            }, {
                returning: true, where: { _id: id }
            });
            return user;
        });
    }
    changePersonalityTest(id, { personality_test_data }) {
        return __awaiter(this, void 0, void 0, function* () {
            const [, [user]] = yield this.usersRepository.update({ personality_test_data }, {
                returning: true, where: { _id: id }
            });
            return user;
        });
    }
    changeVideoAsk(id, { video_ask_contact_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const [, [user]] = yield this.usersRepository.update({ video_ask_contact_id }, {
                returning: true, where: { _id: id }
            });
            return user;
        });
    }
    saveVideoaskData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const video_ask_contact_id = data.contact.contact_id;
            yield this.usersRepository.update({ videoask_data: data.contact }, {
                returning: true, where: { video_ask_contact_id }
            });
        });
    }
    setCompleteForm(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [, [user]] = yield this.usersRepository.update({ is_completed: true }, {
                returning: true, where: { _id: id }
            });
            return user;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.usersRepository.destroy({ where: { _id: id } });
            return res;
        });
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(user_entity_1.User.PROVIDE_NAME)),
    __param(1, common_1.Inject(logicTest_entity_1.LogicTest.PROVIDE_NAME)),
    __param(3, common_1.Inject('GOOGLE_SHEETS_USERS')),
    __metadata("design:paramtypes", [Object, Object, google_sheets_1.GoogleSheetsService,
        google_spreadsheet_1.GoogleSpreadsheetWorksheet])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map