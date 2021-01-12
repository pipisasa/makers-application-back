"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const admin_bro_1 = require("admin-bro");
const design_system_1 = require("@admin-bro/design-system");
const api = new admin_bro_1.ApiClient();
class Dashboard extends react_1.Component {
    constructor() {
        super(...arguments);
        this.handleReloadGoogleSheets = () => {
            api.getDashboard({ params: { type: "SAVE_TO_SHEETS" } }).then((response) => {
                console.log(response.data);
                window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank');
            });
        };
        this.handleOpenGoogleSheets = () => {
            api.getDashboard({ params: { type: "GET_SHEET_ID" } }).then((response) => {
                console.log(response.data);
                window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank');
            });
        };
    }
    render() {
        return (jsx_runtime_1.jsxs(design_system_1.Box, Object.assign({ style: { padding: "20px" } }, { children: [jsx_runtime_1.jsx(design_system_1.Header, { children: "Makers Application Admin Page" }, void 0),
                jsx_runtime_1.jsx(design_system_1.Button, Object.assign({ onClick: this.handleReloadGoogleSheets }, { children: "Reload users to Google Sheets" }), void 0),
                jsx_runtime_1.jsx(design_system_1.Button, Object.assign({ onClick: this.handleOpenGoogleSheets }, { children: "Open Google Sheets" }), void 0)] }), void 0));
    }
}
exports.default = react_router_dom_1.withRouter(Dashboard);
//# sourceMappingURL=Dashboard.js.map