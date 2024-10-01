"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

var material_1 = require("@mui/material");

var CompanySubdistrictAutocomplete = function CompanySubdistrictAutocomplete(props) {
  var setSubdistrict = props.setSubdistrict,
      districtCode = props.districtCode,
      subdistrict = props.subdistrict;

  var _a = react_1.useState([]),
      districts = _a[0],
      setSubDistricts = _a[1];

  react_1.useEffect(function () {
    if (districtCode) {
      Promise.resolve().then(function () {
        return require("@/vn_location/xa-phuong/" + districtCode + ".json");
      }).then(function (data) {
        var districtList = Object.values(data);
        setSubDistricts(districtList);
      })["catch"](function (err) {
        console.error("Error loading Subdistrict:", err);
        setSubDistricts([]);
      });
    } else {
      setSubDistricts([]);
    }
  }, [districtCode]);
  return react_1["default"].createElement(material_1.Autocomplete, {
    disablePortal: true,
    size: "small",
    id: "subdistrict-autocomplete",
    options: districts,
    getOptionLabel: function getOptionLabel(option) {
      return option.name;
    },
    onChange: function onChange(_, value) {
      return setSubdistrict(value || null);
    },
    renderInput: function renderInput(params) {
      return react_1["default"].createElement(material_1.TextField, __assign({}, params, {
        variant: "outlined",
        label: subdistrict ? "" : "Select Subdistrict",
        InputLabelProps: {
          shrink: false
        }
      }));
    },
    disabled: !districtCode
  });
};

exports["default"] = CompanySubdistrictAutocomplete;