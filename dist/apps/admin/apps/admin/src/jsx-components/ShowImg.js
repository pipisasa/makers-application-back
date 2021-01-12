"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
class ShowImg extends react_1.Component {
    render() {
        var _a, _b, _c, _d, _e, _f;
        console.log(this.props);
        return (jsx_runtime_1.jsx("img", { height: "150px", src: `/uploads/${(_c = (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.record) === null || _b === void 0 ? void 0 : _b.params) === null || _c === void 0 ? void 0 : _c["img.key"]}`, alt: (_f = (_e = (_d = this.props) === null || _d === void 0 ? void 0 : _d.record) === null || _e === void 0 ? void 0 : _e.params) === null || _f === void 0 ? void 0 : _f["img.key"] }, void 0));
    }
}
exports.default = ShowImg;
//# sourceMappingURL=ShowImg.js.map