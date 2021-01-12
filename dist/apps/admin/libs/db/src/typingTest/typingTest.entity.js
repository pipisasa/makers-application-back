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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypingTest = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let TypingTest = class TypingTest extends sequelize_typescript_1.Model {
};
TypingTest.PROVIDE_NAME = 'TYPING_TESTS_REPOSITORY';
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.STRING(1023)),
    __metadata("design:type", String)
], TypingTest.prototype, "data", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM('en', 'ru') }),
    __metadata("design:type", String)
], TypingTest.prototype, "lang", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], TypingTest.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], TypingTest.prototype, "updatedAt", void 0);
TypingTest = __decorate([
    sequelize_typescript_1.Table
], TypingTest);
exports.TypingTest = TypingTest;
//# sourceMappingURL=typingTest.entity.js.map