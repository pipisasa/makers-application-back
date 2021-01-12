"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const admin_bro_1 = require("admin-bro");
const design_system_1 = require("@admin-bro/design-system");
const Edit = (props) => {
    const { property, record, onChange } = props;
    const { params } = record;
    const { custom } = property;
    const path = admin_bro_1.flat.get(params, custom.filePathProperty);
    const key = admin_bro_1.flat.get(params, custom.keyProperty);
    const file = admin_bro_1.flat.get(params, custom.fileProperty);
    const [originalKey, setOriginalKey] = react_1.useState(key);
    const [filesToUpload, setFilesToUpload] = react_1.useState([]);
    react_1.useEffect(() => {
        if ((typeof key === 'string' && key !== originalKey)
            || (typeof key !== 'string' && !originalKey)) {
            setOriginalKey(key);
            setFilesToUpload([]);
        }
    }, [key, originalKey]);
    const onUpload = (files) => {
        console.log("onUpload(files):", files);
        setFilesToUpload(files);
        onChange(custom.fileProperty, files);
    };
    const handleRemove = () => {
        onChange(custom.fileProperty, null);
    };
    console.log("key: ", key);
    console.log("props: ", props);
    return (jsx_runtime_1.jsxs(design_system_1.FormGroup, { children: [jsx_runtime_1.jsx(design_system_1.Label, { children: property.label }, void 0),
            jsx_runtime_1.jsx(design_system_1.DropZone, { onChange: onUpload, multiple: false, validate: {
                    mimeTypes: custom.mimeTypes,
                    maxSize: custom.maxSize,
                }, files: filesToUpload }, void 0),
            !custom.multiple && key && path && !filesToUpload.length && file !== null && (jsx_runtime_1.jsx(design_system_1.DropZoneItem, { filename: key, src: `/uploads/${key}`, onRemove: handleRemove }, void 0))] }, void 0));
};
exports.default = Edit;
//# sourceMappingURL=EditImg.js.map