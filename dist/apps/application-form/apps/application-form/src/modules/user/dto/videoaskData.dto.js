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
exports.VideoaskResponseDto = exports.VideoaskResonseType = exports.VideoaskResponseContactDto = exports.VideoaskResponseAnswerDto = void 0;
const class_validator_1 = require("class-validator");
class VideoaskResponseAnswerDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "answer_id", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], VideoaskResponseAnswerDto.prototype, "media_duration", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "gif", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "media_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "media_url", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "question_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "share_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "share_url", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(['video']),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    __metadata("design:type", String)
], VideoaskResponseAnswerDto.prototype, "created_at", void 0);
exports.VideoaskResponseAnswerDto = VideoaskResponseAnswerDto;
class VideoaskResponseContactDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "contact_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "thumbnail", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    __metadata("design:type", Array)
], VideoaskResponseContactDto.prototype, "answers", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "platform", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "share_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "share_url", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "created_at", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDate(),
    __metadata("design:type", String)
], VideoaskResponseContactDto.prototype, "updated_at", void 0);
exports.VideoaskResponseContactDto = VideoaskResponseContactDto;
var VideoaskResonseType;
(function (VideoaskResonseType) {
    VideoaskResonseType["formResponse"] = "form_response";
    VideoaskResonseType["formResponseTranscribed"] = "form_response_transcribed";
    VideoaskResonseType["formAuthorMessage"] = "form_author_message";
    VideoaskResonseType["formContactMessage"] = "form_contact_message";
    VideoaskResonseType["formContactTagged"] = "form_contact_tagged";
    VideoaskResonseType["formContactUntagged"] = "form_contact_untagged";
})(VideoaskResonseType = exports.VideoaskResonseType || (exports.VideoaskResonseType = {}));
class VideoaskResponseDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseDto.prototype, "event_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseDto.prototype, "interaction_id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VideoaskResponseDto.prototype, "event_type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    __metadata("design:type", VideoaskResponseContactDto)
], VideoaskResponseDto.prototype, "contact", void 0);
exports.VideoaskResponseDto = VideoaskResponseDto;
//# sourceMappingURL=videoaskData.dto.js.map