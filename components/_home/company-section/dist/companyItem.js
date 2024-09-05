"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var image_1 = require("next/image");
var link_1 = require("next/link");
var KeyboardArrowRight_1 = require("@mui/icons-material/KeyboardArrowRight");
var Adjust_1 = require("@mui/icons-material/Adjust");
var CompanyItem = function (props) {
    var _a, _b, _c;
    var tCompanyItem = props.tCompanyItem, company = props.company;
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Grid, { item: true, key: "123", xs: 12, sm: 6, md: 4 },
            React.createElement(material_1.Card, { sx: {
                    minWidth: 250,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                } },
                React.createElement(material_1.CardActionArea, null,
                    React.createElement(link_1["default"], { href: "/company/" },
                        React.createElement(material_1.CardMedia, { component: "div" },
                            React.createElement(image_1["default"], { className: "ml-auto mr-auto mt-10 shadow-2xl", src: process.env.NEXT_PUBLIC_SERVER_IMAGE + "/company/" + company.logo, 
                                // src={robot}
                                width: 150, height: 150, alt: "Logo" })),
                        React.createElement(material_1.CardContent, { sx: { flexGrow: 1 } },
                            React.createElement(material_1.Typography, { gutterBottom: true, variant: "h5", component: "h2", className: "text-center" },
                                React.createElement("b", null, company.name)),
                            React.createElement("div", { className: "flex space-x-2 justify-center min-h-6" }, (_a = company === null || company === void 0 ? void 0 : company.skills) === null || _a === void 0 ? void 0 : _a.slice(0, 3).map(function (skill, index) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement(material_1.Typography, { key: skill + "-" + index, variant: "subtitle2", color: "textDarkGray", sx: {
                                            color: "#414042",
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: 100,
                                            padding: "1px 10px"
                                        } }, skill.name)));
                            }))),
                        React.createElement(material_1.CardContent, { sx: {
                                backgroundColor: "#f0f0f0"
                            } },
                            React.createElement("div", { className: "flex justify-between items-center gap-4 " },
                                React.createElement(material_1.Typography, { variant: "subtitle1", component: "h6" }, (_b = company === null || company === void 0 ? void 0 : company.locations) === null || _b === void 0 ? void 0 : _b.map(function (location, index) {
                                    return index === 0
                                        ? location.address_city
                                        : " - " + location.address_city;
                                }).join("")),
                                React.createElement(material_1.Typography, { variant: "subtitle1", component: "h6", className: "col-end-7 col-span-2" },
                                    React.createElement(Adjust_1["default"], { sx: { color: "green" } }),
                                    " ", (_c = company === null || company === void 0 ? void 0 : company.jobs) === null || _c === void 0 ? void 0 :
                                    _c.length,
                                    " ",
                                    tCompanyItem.jobs,
                                    React.createElement(KeyboardArrowRight_1["default"], null))))))))));
};
exports["default"] = CompanyItem;
