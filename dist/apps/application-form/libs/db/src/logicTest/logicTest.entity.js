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
exports.LogicTest = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let LogicTest = class LogicTest extends sequelize_typescript_1.Model {
};
LogicTest.PROVIDE_NAME = 'LOGIC_TESTS_REPOSITORY';
__decorate([
    sequelize_typescript_1.Default('radio'),
    sequelize_typescript_1.Column({ allowNull: true, type: sequelize_typescript_1.DataType.ENUM('radio', 'checkbox', 'range') }),
    __metadata("design:type", String)
], LogicTest.prototype, "answer_type", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSONB),
    __metadata("design:type", String)
], LogicTest.prototype, "img", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], LogicTest.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], LogicTest.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], LogicTest.prototype, "answers", void 0);
__decorate([
    sequelize_typescript_1.Column({ allowNull: false }),
    __metadata("design:type", String)
], LogicTest.prototype, "correct_answers", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], LogicTest.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], LogicTest.prototype, "updatedAt", void 0);
LogicTest = __decorate([
    sequelize_typescript_1.Table
], LogicTest);
exports.LogicTest = LogicTest;
//# sourceMappingURL=logicTest.entity.js.map