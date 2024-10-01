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
var CompanySubdistrictAutocomplete = function (props) {
    var setSubdistrict = props.setSubdistrict, districtCode = props.districtCode, subdistrict = props.subdistrict;
    var _a = react_1.useState([]), districts = _a[0], setSubdistricts = _a[1];
    react_1.useEffect(function () {
        if (districtCode) {
            Promise.resolve().then(function () { return require("@/vn_location/xa-phuong/" + districtCode + ".json"); }).then(function (data) {
                var districtList = Object.values(data);
                setSubdistricts(districtList);
            })["catch"](function (err) {
                console.error("Error loading Subdistrict:", err);
                setSubdistricts([]);
            });
        }
        else {
            setSubdistricts([]);
        }
    }, [districtCode]);
    return (react_1["default"].createElement(material_1.Autocomplete, { disablePortal: true, size: "small", id: "subdistrict-autocomplete", options: districts, getOptionLabel: function (option) { return option.name; }, onChange: function (_, value) {
            return setSubdistrict(value || null);
        }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { variant: "outlined", label: subdistrict ? "" : "Select Subdistrict", InputLabelProps: { shrink: false } }))); }, disabled: !districtCode }));
};
exports["default"] = CompanySubdistrictAutocomplete;
