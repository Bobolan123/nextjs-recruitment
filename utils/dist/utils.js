"use strict";
exports.__esModule = true;
exports.shuffleArray = exports.IsValidEmail = exports.handleFormatLink = void 0;
exports.handleFormatLink = function (link) {
    var lowerLink = link.toLowerCase();
    var newLink = lowerLink.replace(/[\s&]+/g, "-");
    return newLink;
};
exports.IsValidEmail = function (email) {
    return /^\S+@\S+\.\S+$/.test(email);
};
exports.shuffleArray = function (array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        var j = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and j
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
    return array;
};
