"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const admin_bro_1 = require("admin-bro");
const react_1 = require("react");
class Show extends react_1.Component {
    render() {
        const { property, record } = this.props;
        const data = admin_bro_1.flat.get(record.params, property.propertyPath);
        console.log(this.props);
        return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("p", { children: property.label }, void 0),
                data.answers.map(item => (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("video", Object.assign({ width: "480", controls: true, poster: item.gif }, { children: [jsx_runtime_1.jsx("source", { src: item.media_url, type: "video/mp4" }, void 0), "Your browser doesn't support HTML5 video tag."] }), void 0) }, `user-answer-${item.answer_id}`)))] }, void 0));
    }
}
exports.default = Show;
//# sourceMappingURL=Show.js.map