"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsProviders = exports.models = void 0;
const logicTest_entity_1 = require("./logicTest/logicTest.entity");
const personalityTest_entity_1 = require("./personalityTest/personalityTest.entity");
const typingTest_entity_1 = require("./typingTest/typingTest.entity");
const user_entity_1 = require("./user/user.entity");
exports.models = [
    user_entity_1.User,
    logicTest_entity_1.LogicTest,
    personalityTest_entity_1.PersonalityTest,
    typingTest_entity_1.TypingTest,
];
exports.modelsProviders = exports.models.map(item => ({
    provide: item.PROVIDE_NAME,
    useValue: item,
}));
//# sourceMappingURL=models.providers.js.map