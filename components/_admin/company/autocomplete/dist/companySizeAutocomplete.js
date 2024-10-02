"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var CompanySizeAutocomplete = function (props) {
    var setCompanySize = props.setCompanySize, companySize = props.companySize;
    return (react_1["default"].createElement(material_1.Autocomplete, { disablePortal: true, size: "small", id: "company-size-autocomplete", options: companySizeOptions, getOptionLabel: function (option) { return option.label; }, onChange: function (_, value) { return setCompanySize(value === null || value === void 0 ? void 0 : value.label); }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { 
            // label="Company Size"
            variant: "outlined", InputLabelProps: { shrink: false }, label: companySize ? "" : "Select company type" }))); } }));
};
exports["default"] = CompanySizeAutocomplete;
var companySizeOptions = [
    { label: "0-100" },
    { label: "100-500" },
    { label: "500-1000" },
    { label: "1000+" },
];
