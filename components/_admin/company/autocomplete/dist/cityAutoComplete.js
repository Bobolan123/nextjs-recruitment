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
var tinh_tp_json_1 = require("@/vn_location/tinh_tp.json");
// Create the options array from city data
var cityOptions = Object.values(tinh_tp_json_1["default"]).sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
var CompanyCityAutocomplete = function (props) {
    var setCity = props.setCity, city = props.city;
    return (react_1["default"].createElement(material_1.Autocomplete, { disablePortal: true, size: "small", id: "company-industry-autocomplete", options: cityOptions, getOptionLabel: function (option) { return option.name; }, onChange: function (_, value) {
            setCity(value || null);
            console.log(value);
        }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { InputLabelProps: { shrink: false }, variant: "outlined", label: city ? "" : "Select District" }))); } }));
};
exports["default"] = CompanyCityAutocomplete;
