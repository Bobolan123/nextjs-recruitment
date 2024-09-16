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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var Typography_1 = require("@mui/material/Typography");
var Box_1 = require("@mui/material/Box");
var image_1 = require("next/image");
var robot_png_1 = require("@/public/logo/robot.png");
var PaidOutlined_1 = require("@mui/icons-material/PaidOutlined");
var Apartment_1 = require("@mui/icons-material/Apartment");
var FmdGoodOutlined_1 = require("@mui/icons-material/FmdGoodOutlined");
var material_1 = require("@mui/material");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var Launch_1 = require("@mui/icons-material/Launch");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (React.createElement(Box_1["default"], __assign({ sx: {
            position: "relative",
            width: "59%",
            padding: "15px 20px",
            borderRadius: 2
        }, className: "bg-white", role: "tabpanel", hidden: value !== index, id: "vertical-tabpanel-" + index, "aria-labelledby": "vertical-tab-" + index }, other), value === index && (React.createElement(Box_1["default"], { sx: {
            bgcolor: "white",
            position: "sticky",
            top: "100px"
        } }, children))));
}
var TabPanelJobDetail = function (props) {
    var value = props.value, jobs = props.jobs;
    return (React.createElement(React.Fragment, null, jobs === null || jobs === void 0 ? void 0 :
        jobs.map(function (job, i) {
            var _a;
            return (React.createElement(React.Fragment, null,
                React.createElement(TabPanel, { value: value, index: i },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement(image_1["default"], { src: robot_png_1["default"], alt: "robot", width: 100, height: 100 }),
                        React.createElement("div", { className: "flex flex-col gap-3" },
                            React.createElement(Box_1["default"], { sx: {
                                    fontWeight: "bold",
                                    fontSize: 22,
                                    maxWidth: 300
                                } }, job === null || job === void 0 ? void 0 : job.name),
                            React.createElement(Typography_1["default"], { variant: "subtitle1" }, (_a = job === null || job === void 0 ? void 0 : job.company) === null || _a === void 0 ? void 0 : _a.name),
                            React.createElement(Typography_1["default"], { variant: "subtitle1" },
                                React.createElement(PaidOutlined_1["default"], { className: "mr-1" }),
                                React.createElement("u", null, "Sign in to view salary")))),
                    React.createElement("div", { className: "flex gap-3 items-center mt-3 mb-4" },
                        React.createElement(material_1.Button, { color: "anger", variant: "contained", sx: { flexGrow: 1, minWidth: 140 } }, "Apply now"),
                        React.createElement(FavoriteBorder_1["default"], { sx: { color: "red", fontSize: 35 } })),
                    React.createElement("hr", { className: "mb-5" }),
                    React.createElement(Box_1["default"], { component: "div", sx: {
                            display: "flex",
                            flexDirection: "column",
                            height: "calc(100vh - 300px)",
                            overflow: "hidden",
                            overflowY: "scroll",
                            scrollbarWidth: "thin"
                        } },
                        React.createElement("section", { className: "preview-job-overview pb-5 mb-5 border-b-2 border-gray-200 border-dashed" },
                            React.createElement("div", { className: "flex flex-col gap-3" },
                                React.createElement(Typography_1["default"], { variant: "subtitle2", color: "" },
                                    React.createElement(FmdGoodOutlined_1["default"], { sx: { color: "textDarkGray" } }), job === null || job === void 0 ? void 0 :
                                    job.location),
                                React.createElement(Typography_1["default"], { variant: "subtitle2", color: "" },
                                    React.createElement(Apartment_1["default"], { sx: { color: "textDarkGray" } }),
                                    " ",
                                    "At office"),
                                React.createElement(Typography_1["default"], { variant: "subtitle2", color: "" },
                                    React.createElement(AccessTime_1["default"], { sx: { color: "textDarkGray" } }),
                                    " ",
                                    "2 days ago"),
                                React.createElement(Typography_1["default"], { variant: "subtitle2", className: "flex gap-3 items-center " },
                                    "Skills:",
                                    " ",
                                    React.createElement("div", { className: "flex gap-1" },
                                        React.createElement(Typography_1["default"], { variant: "subtitle2", sx: {
                                                color: "#414042",
                                                borderRadius: 100,
                                                padding: "1px 8px",
                                                border: 1,
                                                borderColor: "textDarkGray"
                                            } }, "Java"))))),
                        React.createElement("section", { className: "reason-join-us pb-5 mb-5 border-b-2 border-gray-200 border-dashed" },
                            React.createElement(Typography_1["default"], { variant: "h2", fontSize: 22, fontWeight: 700, mb: 2 }, "Top 3 reasons to join us"),
                            React.createElement("ul", { className: "marker:text-red-500 list-outside list-disc ml-6 leading-8" },
                                React.createElement("li", null, "Fully Remote"),
                                React.createElement("li", null, "International Team"),
                                React.createElement("li", null, "Coaching to grow career"))),
                        React.createElement("section", { className: "job-description pb-5 mb-5 border-b-2 border-gray-200 border-dashed" },
                            React.createElement(Typography_1["default"], { variant: "h2", fontSize: 22, fontWeight: 700, mb: 2 }, "Job description"),
                            React.createElement(Box_1["default"], { component: "div", sx: {
                                    fontSize: 16,
                                    fontWeight: 400,
                                    lineHeight: 1.8
                                }, dangerouslySetInnerHTML: {
                                    __html: job.description
                                } })),
                        React.createElement("section", { className: "company-overview pb-5" },
                            React.createElement("div", { className: "flex" },
                                React.createElement(Typography_1["default"], { variant: "h2", fontSize: 22, fontWeight: 700, mb: 2 }, "Company name"),
                                React.createElement(Typography_1["default"], { variant: "subtitle1", ml: "auto", color: "blue", mr: 1 },
                                    "Xem c\u00F4ng ty ",
                                    React.createElement(Launch_1["default"], null))),
                            React.createElement("div", { className: "grid grid-cols-3 gap-4" },
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "M\u00F4 h\u00ECnh c\u00F4ng ty"),
                                    "D\u1ECBch v\u1EE5 v\u00E0 T\u01B0 v\u1EA5n gi\u1EA3i ph\u00E1p"),
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "L\u0129nh v\u1EF1c c\u00F4ng ty"),
                                    "D\u1ECBch V\u1EE5 v\u00E0 T\u01B0 V\u1EA5n IT"),
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "Quy m\u00F4 c\u00F4ng ty"),
                                    "1000+"),
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "Qu\u1ED1c gia"),
                                    "Vietnam"),
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "Th\u1EDDi gian l\u00E0m vi\u1EC7c"),
                                    "Th\u1EE9 2 - Th\u1EE9 6"),
                                React.createElement("div", null,
                                    React.createElement(Typography_1["default"], { color: "textDarkGray" }, "L\u00E0m vi\u1EC7c ngo\u00E0i gi\u1EDD"),
                                    "Th\u00EAm l\u01B0\u01A1ng OT")))))));
        }),
        React.createElement(TabPanel, { value: value, index: 1 }, "Item Two"),
        React.createElement(TabPanel, { value: value, index: 2 }, "Item Three")));
};
exports["default"] = TabPanelJobDetail;
