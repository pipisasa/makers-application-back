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
exports.User = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
User.PROVIDE_NAME = 'USERS_REPOSITORY';
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ unique: true, allowNull: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ allowNull: false, unique: true, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "telegram", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], User.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('noob', 'know_something', 'went_to_courses')),
    __metadata("design:type", String)
], User.prototype, "level", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM('evening', 'morning')),
    __metadata("design:type", String)
], User.prototype, "studying_time", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "typing_speed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "typing_missings", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], User.prototype, "is_confirmed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], User.prototype, "is_completed", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", String)
], User.prototype, "logic_test_data", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], User.prototype, "logic_test_correct_answers", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", String)
], User.prototype, "personality_test_data", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], User.prototype, "video_ask_contact_id", void 0);
__decorate([
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.JSON),
    __metadata("design:type", String)
], User.prototype, "videoask_data", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map