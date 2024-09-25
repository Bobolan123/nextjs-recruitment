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
var CompanyTypeAutocomplete = function (props) {
    var setCompanyType = props.setCompanyType;
    return (react_1["default"].createElement(material_1.Autocomplete, { size: "small", disablePortal: true, id: "company-type-autocomplete", options: companyTypes, getOptionLabel: function (option) { return option.label; }, onChange: function (_, value) { return setCompanyType(value === null || value === void 0 ? void 0 : value.label); }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { variant: "outlined", InputLabelProps: { shrink: false } }))); } }));
};
exports["default"] = CompanyTypeAutocomplete;
var companyTypes = [
    { label: "IT Product" },
    { label: "IT Outsourcing" },
    { label: "Consulting" },
    { label: "Telecommunications" },
    { label: "E-commerce" },
    { label: "Cloud Services" },
    { label: "Cybersecurity" },
    { label: "Hardware" },
    { label: "Networking" },
    { label: "FinTech" },
    { label: "HealthTech" },
];
