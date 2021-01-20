"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypingTestResource = exports.PersonalityTestResource = exports.LogicTestResource = exports.UserResource = void 0;
const user_entity_1 = require("../../../libs/db/src/user/user.entity");
const logicTest_entity_1 = require("../../../libs/db/src/logicTest/logicTest.entity");
const typingTest_entity_1 = require("../../../libs/db/src/typingTest/typingTest.entity");
const personalityTest_entity_1 = require("../../../libs/db/src/personalityTest/personalityTest.entity");
const admin_bro_1 = require("admin-bro");
const upload_1 = require("@admin-bro/upload");
const CustomFileProvider_1 = require("./helpers/CustomFileProvider");
exports.UserResource = {
    resource: user_entity_1.User,
    options: {
        listProperties: ['email', 'name', 'is_completed', 'is_confirmed'],
        properties: {
            personality_test_data: {
                components: {
                    show: admin_bro_1.default.bundle('./jsx-components/ShowTestData'),
                    edit: admin_bro_1.default.bundle('./jsx-components/EditTestData'),
                }
            },
            logic_test_data: {
                components: {
                    show: admin_bro_1.default.bundle('./jsx-components/ShowTestData'),
                    edit: admin_bro_1.default.bundle('./jsx-components/EditTestData'),
                }
            }
        }
    },
};
exports.LogicTestResource = {
    resource: logicTest_entity_1.LogicTest,
    options: {
        listProperties: ['id', 'title', 'img.file', 'answer_type', 'answers', 'correct_answers'],
        properties: {
            img: {
                isVisible: false,
            },
            "img.file": {
                components: {
                    show: admin_bro_1.default.bundle('./jsx-components/ShowImg'),
                }
            }
        }
    },
    features: [upload_1.default({
            properties: {
                file: `img.file`,
                key: `img.key`,
                filePath: `img.filePath`,
                bucket: `img.bucket`,
                mimeType: `img.mimeType`,
                size: `img.size`,
                filename: `img.filename`
            },
            provider: new CustomFileProvider_1.default(),
        })]
};
exports.PersonalityTestResource = {
    resource: personalityTest_entity_1.PersonalityTest,
    options: {
        listProperties: ['id', 'title', 'img.file', 'answer_type', 'answers'],
        properties: {
            img: {
                isVisible: false,
            },
            "img.file": {
                components: {
                    show: admin_bro_1.default.bundle('./jsx-components/ShowImg'),
                }
            }
        }
    },
    features: [upload_1.default({
            properties: {
                file: `img.file`,
                key: `img.key`,
                filePath: `img.filePath`,
                bucket: `img.bucket`,
                mimeType: `img.mimeType`,
                size: `img.size`,
                filename: `img.filename`
            },
            provider: new CustomFileProvider_1.default(),
        })]
};
exports.TypingTestResource = {
    resource: typingTest_entity_1.TypingTest,
    options: {},
};
const AdminBroResources = [
    exports.UserResource,
    exports.LogicTestResource,
    exports.TypingTestResource,
    exports.PersonalityTestResource,
];
exports.default = AdminBroResources;
//# sourceMappingURL=admin.resources.js.map