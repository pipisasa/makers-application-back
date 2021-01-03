"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const admin_bro_1 = require("admin-bro");
const design_system_1 = require("@admin-bro/design-system");
const SHEETS_ID = '1N_j5vx1Ux4AvDruZOPpjB5j5Zsen8DLe0A6YUdGl6ks';
const api = new admin_bro_1.ApiClient();
function LoadToGoogleSheets(props) {
    console.log(props);
    const [data, setData] = react_1.useState({});
    react_1.useEffect(() => {
    }, []);
    const handleReloadGoogleSheets = () => {
        api.getDashboard({ params: { type: "SAVE_TO_SHEETS" } }).then((response) => {
            setData(response.data);
            console.log(response.data);
            window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank');
        });
    };
    const handleOpenGoogleSheets = () => {
        api.getDashboard({ params: { type: "GET_SHEET_ID" } }).then((response) => {
            setData(response.data);
            console.log(response.data);
            window.open(`https://docs.google.com/spreadsheets/d/${response.data.sheetId}/edit`, '_blank');
        });
    };
    return (jsx_runtime_1.jsxs(design_system_1.Box, Object.assign({ style: { padding: "20px" } }, { children: [jsx_runtime_1.jsx(design_system_1.Header, { children: "Makers Application Admin Page" }, void 0),
            jsx_runtime_1.jsx(design_system_1.Button, Object.assign({ onClick: handleReloadGoogleSheets }, { children: "Reload users to Google Sheets" }), void 0),
            jsx_runtime_1.jsx(design_system_1.Button, Object.assign({ onClick: handleOpenGoogleSheets }, { children: "Open Google Sheets" }), void 0)] }), void 0));
}
exports.default = react_router_dom_1.withRouter(LoadToGoogleSheets);
//# sourceMappingURL=Dashboard.js.map