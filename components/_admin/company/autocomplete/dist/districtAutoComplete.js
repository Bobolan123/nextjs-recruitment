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
var CompanyDistrictAutocomplete = function (props) {
    var setDistrict = props.setDistrict, cityCode = props.cityCode, district = props.district;
    var _a = react_1.useState([]), districts = _a[0], setDistricts = _a[1];
    react_1.useEffect(function () {
        if (cityCode) {
            Promise.resolve().then(function () { return require("@/vn_location/quan-huyen/" + cityCode + ".json"); }).then(function (data) {
                var districtList = Object.values(data);
                setDistricts(districtList);
            })["catch"](function (err) {
                console.error("Error loading districts:", err);
                setDistricts([]);
            });
        }
        else {
            setDistricts([]);
        }
    }, [cityCode]);
    return (react_1["default"].createElement(material_1.Autocomplete, { disablePortal: true, size: "small", id: "company-district-autocomplete", options: districts, getOptionLabel: function (option) { return option.name; }, onChange: function (_, value) {
            return setDistrict(value || null);
        }, renderInput: function (params) { return (react_1["default"].createElement(material_1.TextField, __assign({}, params, { variant: "outlined", label: district ? "" : "Select District", InputLabelProps: { shrink: false } }))); }, disabled: !cityCode }));
};
exports["default"] = CompanyDistrictAutocomplete;
