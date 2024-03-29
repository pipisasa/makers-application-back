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
exports.ChangeUserVideoAskDto = exports.ChangeUserPersonalityTestDto = exports.ChangeUserLogicTestDto = exports.ChangeUserTypingSpeedDto = exports.ChangeUserDto = exports.LoginUserDto = void 0;
const class_validator_1 = require("class-validator");
class LoginUserDto {
}
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginUserDto.prototype, "google_uid", void 0);
exports.LoginUserDto = LoginUserDto;
var levelEnum;
(function (levelEnum) {
    levelEnum["noob"] = "noob";
    levelEnum["know_something"] = "know_something";
    levelEnum["went_to_courses"] = "went_to_courses";
})(levelEnum || (levelEnum = {}));
;
var studyingTimeEnum;
(function (studyingTimeEnum) {
    studyingTimeEnum["evening"] = "evening";
    studyingTimeEnum["morning"] = "morning";
})(studyingTimeEnum || (studyingTimeEnum = {}));
class ChangeUserDto {
}
__decorate([
    class_validator_1.MaxLength(100),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsPhoneNumber("kg"),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsEnum(levelEnum),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "level", void 0);
__decorate([
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsEnum(studyingTimeEnum),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "studying_time", void 0);
exports.ChangeUserDto = ChangeUserDto;
class ChangeUserTypingSpeedDto {
}
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], ChangeUserTypingSpeedDto.prototype, "typing_speed", void 0);
__decorate([
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], ChangeUserTypingSpeedDto.prototype, "typing_missings", void 0);
exports.ChangeUserTypingSpeedDto = ChangeUserTypingSpeedDto;
class ChangeUserLogicTestDto {
}
exports.ChangeUserLogicTestDto = ChangeUserLogicTestDto;
class ChangeUserPersonalityTestDto {
}
exports.ChangeUserPersonalityTestDto = ChangeUserPersonalityTestDto;
class ChangeUserVideoAskDto {
}
exports.ChangeUserVideoAskDto = ChangeUserVideoAskDto;
//# sourceMappingURL=user.dto.js.map