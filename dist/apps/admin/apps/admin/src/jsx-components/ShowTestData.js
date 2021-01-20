"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const design_system_1 = require("@admin-bro/design-system");
const admin_bro_1 = require("admin-bro");
const react_1 = require("react");
class ShowImg extends react_1.Component {
    render() {
        console.log(this.props);
        const { property, record } = this.props;
        const data = admin_bro_1.flat.get(record.params, property.propertyPath);
        return (jsx_runtime_1.jsx(design_system_1.ValueGroup, Object.assign({ label: property.label }, { children: jsx_runtime_1.jsx("ul", Object.assign({ style: { listStyleType: "circle", paddingLeft: "1rem" } }, { children: data && data.map(item => (jsx_runtime_1.jsxs("li", { children: [jsx_runtime_1.jsx("p", { children: item.title }, void 0),
                        jsx_runtime_1.jsx("ul", Object.assign({ style: { listStyleType: "square", paddingLeft: "1rem" } }, { children: item.answers.map(answer => (jsx_runtime_1.jsx("li", { children: answer.title }, `${property.propertyPath}-answer-${item.id}-${answer.id}`))) }), void 0)] }, `${property.propertyPath}-${item.id}`))) }), void 0) }), void 0));
    }
}
exports.default = ShowImg;
//# sourceMappingURL=ShowTestData.js.map