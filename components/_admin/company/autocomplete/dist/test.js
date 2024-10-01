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
exports.Test = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
exports.Test = function () {
    var categories = [
        { id: 1, name: "blog" },
        { id: 2, name: "music" },
        { id: 3, name: "video" }
    ];
    var _a = react_1.useState([]), category = _a[0], setCategory = _a[1];
    return (React.createElement(material_1.Autocomplete, { multiple: true, limitTags: 1, value: category, onChange: function (event, newValue) {
            setCategory(newValue);
        }, id: "category-filter", options: categories, getOptionLabel: function (option) { return option.name; }, isOptionEqualToValue: function (option, value) { return option.id === value.id; }, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({}, params, { label: "Category", placeholder: "categories" }))); } }));
};
