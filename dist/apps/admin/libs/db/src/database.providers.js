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
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const index_1 = require("../../config/src/index");
const parseDbUrl = require("parse-database-url");
const models_providers_1 = require("./models.providers");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const dbConfig = parseDbUrl(index_1.default().db.postgres.uri);
            console.log("DATABASE_URI", index_1.default().db.postgres.uri);
            const sequelize = new sequelize_typescript_1.Sequelize(index_1.default().db.postgres.uri, {
                logging: false,
                dialectOptions: {},
                dialect: 'postgres',
                protocol: 'postgres',
                port: dbConfig.port,
                host: dbConfig.host,
            });
            sequelize.addModels(models_providers_1.models);
            yield sequelize.sync({ force: !true });
            return sequelize;
        }),
    },
];
//# sourceMappingURL=database.providers.js.map