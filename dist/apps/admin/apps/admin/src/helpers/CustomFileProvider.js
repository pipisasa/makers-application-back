"use strict";
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
const upload_1 = require("@admin-bro/upload");
const fs = require("fs");
const path = require("path");
class CustomFileProvider extends upload_1.BaseProvider {
    constructor() {
        super('uploads');
    }
    upload(file, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const filePath = path.join(__dirname, '..', '..', '..', '..', '..', '..', '..', 'public', 'uploads', key);
            yield fs.promises.mkdir(path.dirname(filePath), { recursive: true });
            yield fs.promises.rename(file.path, filePath);
            return true;
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.promises.unlink(path.join(__dirname, '..', '..', '..', '..', '..', '..', '..', 'public', 'uploads', key));
            }
            catch (e) {
                console.log(e);
            }
            return true;
        });
    }
    path(key) {
        return `/uploads/${key}`;
    }
}
exports.default = CustomFileProvider;
//# sourceMappingURL=CustomFileProvider.js.map