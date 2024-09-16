"use client";
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
var React = require("react");
var Tabs_1 = require("@mui/material/Tabs");
var Tab_1 = require("@mui/material/Tab");
var Typography_1 = require("@mui/material/Typography");
var Box_1 = require("@mui/material/Box");
var link_1 = require("next/link");
var image_1 = require("next/image");
var PaidOutlined_1 = require("@mui/icons-material/PaidOutlined");
var Apartment_1 = require("@mui/icons-material/Apartment");
var FmdGoodOutlined_1 = require("@mui/icons-material/FmdGoodOutlined");
var tags_1 = require("../common/tags");
var material_1 = require("@mui/material");
var tabPanelJobDetail_1 = require("./vertical-tab/tabPanelJobDetail");
function a11yProps(index) {
    return {
        id: "vertical-tab-" + index,
        "aria-controls": "vertical-tabpanel-" + index
    };
}
function VerticalTabJobs(props) {
    var jobs = props.jobs;
    var isSmallScreen = material_1.useMediaQuery("(max-width:950px)");
    var _a = React.useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (React.createElement(Box_1["default"], { sx: {
            flexGrow: 1,
            bgcolor: "#f7f7f7",
            display: "flex",
            gap: 5,
            flexDirection: isSmallScreen ? "column" : "row"
        } },
        React.createElement(Tabs_1["default"], { orientation: "vertical" // Switch orientation based on screen size
            , variant: "scrollable", value: value, onChange: handleChange, "aria-label": "Vertical tabs example", sx: {
                bgcolor: "white",
                width: isSmallScreen ? "100%" : "41%",
                gap: 10,
                "& .Mui-selected": {
                    maxWidth: "100%",
                    border: 1,
                    borderRadius: 2,
                    borderColor: "red"
                },
                "&& .MuiTab-root": {
                    alignItems: "baseline"
                },
                "& .MuiTabs-indicator": {
                    bgcolor: "red",
                    left: 0,
                    width: 6,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8
                }
            } }, jobs === null || jobs === void 0 ? void 0 : jobs.map(function (job, index) {
            var _a, _b, _c, _d, _e;
            return (React.createElement(React.Fragment, null,
                React.createElement(Tab_1["default"], __assign({ label: React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "text-left " },
                            React.createElement("div", { className: "absolute right-0 top-4" },
                                React.createElement(tags_1.TagHot, null)),
                            React.createElement(Typography_1["default"], { variant: "subtitle2", color: "textDarkGray" }, "Posted 1 hour ago"),
                            React.createElement(link_1["default"], { href: "/it-jobs" },
                                React.createElement(Box_1["default"], { color: "black", mt: 2, mb: 2, fontSize: 18, sx: { fontWeight: "bold" }, display: "flex" }, job.name)),
                            React.createElement(link_1["default"], { href: "/it-jobs" },
                                React.createElement(Typography_1["default"], { variant: "subtitle1", className: "flex items-center gap-1" },
                                    React.createElement(image_1["default"], { src: process.env.NEXT_PUBLIC_SERVER_COMPANY_IMAGE + "/" + ((_a = job.company) === null || _a === void 0 ? void 0 : _a.logo), width: 48, height: 48, alt: "" + ((_b = job.company) === null || _b === void 0 ? void 0 : _b.name) }),
                                    React.createElement("span", null, (_c = job === null || job === void 0 ? void 0 : job.company) === null || _c === void 0 ? void 0 : _c.name))),
                            React.createElement("div", { className: "mt-3 mb-1 pb-3 border-b-2 border-gray-200 border-dashed" },
                                React.createElement(Typography_1["default"], { variant: "subtitle1" },
                                    React.createElement(PaidOutlined_1["default"], { className: "mr-1" }),
                                    React.createElement("u", null, "Sign in to view salary"))),
                            React.createElement(Typography_1["default"], { variant: "subtitle1" },
                                React.createElement(Apartment_1["default"], { sx: {
                                        color: "textDarkGray"
                                    } }),
                                "At work"),
                            React.createElement(Typography_1["default"], { variant: "subtitle1" },
                                React.createElement(FmdGoodOutlined_1["default"], { sx: {
                                        color: "textDarkGray"
                                    } }), (_e = (_d = job.company) === null || _d === void 0 ? void 0 : _d.locations.slice(0, 2)) === null || _e === void 0 ? void 0 :
                                _e.map(function (location, index) {
                                    return index === 0
                                        ? location.city
                                        : " - " + location.city;
                                }).join(""),
                                " "),
                            React.createElement("div", { className: "flex space-x-2 mt-2" }, job.skills.map(function (skill) {
                                return (React.createElement(React.Fragment, null,
                                    React.createElement(Typography_1["default"], { key: skill.id, variant: "subtitle2", sx: {
                                            color: "#414042",
                                            borderRadius: 100,
                                            padding: "1px 8px",
                                            border: 1,
                                            borderColor: "textDarkGray"
                                        } }, skill.name)));
                            })))) }, a11yProps(index)))));
        })),
        !isSmallScreen && (React.createElement(React.Fragment, null,
            React.createElement(tabPanelJobDetail_1["default"], { value: value, jobs: jobs })))));
}
exports["default"] = VerticalTabJobs;
