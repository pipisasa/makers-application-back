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
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const fs_1 = require("fs");
const app_module_1 = require("./app.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const httpsOptions = {
            key: fs_1.default.readFileSync('./secrets/private-key.pem'),
            cert: fs_1.default.readFileSync('./secrets/public-certificate.pem'),
        };
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, {
            bodyParser: true,
            httpsOptions,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
        }));
        app.enableCors();
        yield app.listen(80);
        console.log(`We are live on http://api.localhost`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map