"use client";
"use strict";
exports.__esModule = true;
var countryAutocomplete_1 = require("@/components/_admin/company/autocomplete/countryAutocomplete");
var companyTypeAutocomplete_1 = require("@/components/_admin/company/autocomplete/companyTypeAutocomplete");
var material_1 = require("@mui/material");
var react_1 = require("react");
var companyIndustryAutoComplete_1 = require("@/components/_admin/company/autocomplete/companyIndustryAutoComplete");
var companySizeAutocomplete_1 = require("@/components/_admin/company/autocomplete/companySizeAutocomplete");
var dynamic_1 = require("next/dynamic");
require("react-quill/dist/quill.snow.css");
// Dynamically import ReactQuill for client-side rendering only
var ReactQuill = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-quill"); }); }, { ssr: false });
var CreateCompany = function () {
    var _a = react_1.useState(""), companyName = _a[0], setCompanyName = _a[1];
    var _b = react_1.useState(""), briefIntroduction = _b[0], setBriefIntroduction = _b[1];
    var _c = react_1.useState(null), companyType = _c[0], setCompanyType = _c[1];
    var _d = react_1.useState(null), companyIndustry = _d[0], setCompanyIndustry = _d[1];
    var _e = react_1.useState(null), companySize = _e[0], setCompanySize = _e[1];
    var _f = react_1.useState(null), country = _f[0], setCountry = _f[1];
    var _g = react_1.useState(""), description = _g[0], setDescription = _g[1];
    function handleChangeQuill(content, delta, source, editor) {
        setDescription(content);
    }
    var handleCreateNewCompany = function () {
        var companyData = {
            companyName: companyName,
            briefIntroduction: briefIntroduction,
            companyType: companyType,
            companyIndustry: companyIndustry,
            companySize: companySize,
            country: country
        };
        console.log("Submitted Company Data:", companyData);
        // Add further submission logic here (e.g., API call)
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Container, { maxWidth: "xl", sx: { mt: 4, mb: 4 } },
            React.createElement(material_1.Paper, { sx: { p: "30px 30px" } },
                React.createElement(material_1.Typography, { variant: "h4" }, "Create new Company"),
                React.createElement(material_1.Typography, { variant: "h5" }, "General information"),
                React.createElement(material_1.Grid, { container: true, spacing: 2 },
                    React.createElement(material_1.Grid, { item: true, xs: 6, sx: {
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "company-name", required: true, sx: { fontWeight: "bold" } }, "Name of company:"),
                        React.createElement(material_1.OutlinedInput, { id: "companyName", name: "companyName", type: "name", placeholder: "Company name", autoComplete: "companyName", required: true, size: "small", onChange: function (e) {
                                return setCompanyName(e.target.value);
                            } })),
                    React.createElement(material_1.Grid, { item: true, xs: 6, sx: {
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "briefIntroductoin", required: true, sx: { fontWeight: "bold", gap: 1 } }, "Brief introductoin"),
                        React.createElement(material_1.OutlinedInput, { id: "briefIntroductoin", name: "briefIntroductoin", type: "briefIntroductoin", placeholder: "Brief introduction", autoComplete: "shipping briefIntroductoin", required: true, size: "small", onChange: function (e) {
                                return setBriefIntroduction(e.target.value);
                            } })),
                    React.createElement(material_1.Grid, { item: true, xs: 3, sx: {
                            md: 6,
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "company-type", required: true, sx: { fontWeight: "bold" } }, "Company type"),
                        React.createElement(companyTypeAutocomplete_1["default"], { setCompanyType: setCompanyType })),
                    React.createElement(material_1.Grid, { item: true, xs: 3, sx: {
                            md: 6,
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "company-type", required: true, sx: { fontWeight: "bold" } }, "Company industry"),
                        React.createElement(companyIndustryAutoComplete_1["default"], { setCompanyIndustry: setCompanyIndustry })),
                    React.createElement(material_1.Grid, { item: true, xs: 3, sx: {
                            md: 6,
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "company-size", required: true, sx: { fontWeight: "bold" } }, "Company size"),
                        React.createElement(companySizeAutocomplete_1["default"], { setCompanySize: setCompanySize })),
                    React.createElement(material_1.Grid, { item: true, xs: 3, sx: {
                            md: 6,
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "country", required: true, sx: { fontWeight: "bold" } }, "Country"),
                        React.createElement(countryAutocomplete_1["default"], { setCountry: setCountry })),
                    React.createElement(material_1.Grid, { item: true, xs: 12, sx: {
                            md: 6,
                            display: "flex",
                            flexDirection: "column"
                        } },
                        React.createElement(material_1.FormLabel, { htmlFor: "description", required: true, sx: { fontWeight: "bold" } }, "Description"),
                        React.createElement(ReactQuill, { value: description, onChange: handleChangeQuill, style: { height: 100, marginBottom: 30 } }))),
                React.createElement(material_1.Button, { variant: "contained", sx: { m: "auto" }, onClick: handleCreateNewCompany }, "Submit")))));
};
exports["default"] = CreateCompany;
