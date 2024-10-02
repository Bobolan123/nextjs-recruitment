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
var industryOptions = [
    { label: "Software Development Outsourcing" },
    { label: "IT Services" },
    { label: "IT Consulting" },
    { label: "Cloud Computing" },
    { label: "Cybersecurity" },
    { label: "Data Analytics" },
    { label: "Artificial Intelligence" },
    { label: "E-commerce" },
    { label: "HealthTech" },
    { label: "FinTech" },
    { label: "Telecommunications" },
];
var CompanyIndustryAutocomplete = function (props) {
    var setCompanyIndustry = props.setCompanyIndustry, companyIndustry = props.companyIndustry;
    return (react_1["default"].createElement(material_1.Autocomplete, { disablePortal: true, size: "small", id: "company-industry-autocomplete", options: industryOptions, getOptionLabel: function (option) { return option.label; }, onChange: function (_, value) { return setCompanyIndustry(value === null || value === void 0 ? void 0 : value.label); }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { InputLabelProps: { shrink: false }, variant: "outlined", label: companyIndustry ? "" : "Select company type" }))); } }));
};
exports["default"] = CompanyIndustryAutocomplete;
