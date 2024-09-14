"use strict";
exports.__esModule = true;
exports.getDaysSinceCreation = exports.getHoursSinceCreation = exports.isLessThanOneDay = void 0;
var dayjs = require("dayjs");
exports.isLessThanOneDay = function (timestamp) {
    var now = dayjs();
    var creationTime = dayjs(timestamp);
    var differenceInHours = now.diff(creationTime, "hour");
    return differenceInHours < 24;
};
exports.getHoursSinceCreation = function (timestamp) {
    var now = dayjs();
    var creationTime = dayjs(timestamp);
    return now.diff(creationTime, "hour");
};
exports.getDaysSinceCreation = function (timestamp) {
    var now = dayjs();
    var creationTime = dayjs(timestamp);
    return now.diff(creationTime, "day");
};
