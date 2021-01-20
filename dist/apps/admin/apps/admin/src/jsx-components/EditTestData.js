"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const design_system_1 = require("@admin-bro/design-system");
const admin_bro_1 = require("admin-bro");
class EditTestData extends react_1.Component {
    constructor() {
        super(...arguments);
        this.clear = () => {
            this.props.onChange(this.props.property.path, "");
            if (this.props.property.propertyPath === "logic_test_data") {
                this.props.onChange("logic_test_correct_answers", 0);
            }
        };
    }
    render() {
        var _a;
        const { property, record } = this.props;
        const data = admin_bro_1.flat.get(record.params, property.propertyPath);
        const error = (_a = record.errors) === null || _a === void 0 ? void 0 : _a[property.path];
        return (jsx_runtime_1.jsxs(design_system_1.FormGroup, Object.assign({ error: Boolean(error) }, { children: [jsx_runtime_1.jsx("p", { children: property.label }, void 0),
                jsx_runtime_1.jsx("p", { children: JSON.stringify(data) }, void 0),
                jsx_runtime_1.jsx(design_system_1.Button, Object.assign({ type: "button", onClick: this.clear }, { children: "Clear" }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ style: { color: "red" } }, { children: error && error.message }), void 0)] }), void 0));
    }
}
exports.default = EditTestData;
//# sourceMappingURL=EditTestData.js.map