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
const user_entity_1 = require("./user/user.entity");
const parseDbUrl = require("parse-database-url");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            const dbConfig = parseDbUrl('postgres://sizufkfijeumaz:a3f6da68daaaa8cc5109bfbd423ff21e7373ccab565fc38e62f1e64dafce56f2@ec2-3-215-40-176.compute-1.amazonaws.com:5432/ddfa3qgp8gjdgt');
            console.log("DATABASE_URI", process.env.DATABASE_URL, dbConfig);
            const sequelize = new sequelize_typescript_1.Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
                host: dbConfig.host,
                port: dbConfig.port,
                dialect: dbConfig.driver,
                logging: false,
            });
            sequelize.addModels([user_entity_1.User]);
            yield sequelize.sync({ force: !true });
            return sequelize;
        }),
    },
];
//# sourceMappingURL=database.providers.js.map