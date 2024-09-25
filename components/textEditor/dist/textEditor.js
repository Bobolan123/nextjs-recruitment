"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@tiptap/react");
var starter_kit_1 = require("@tiptap/starter-kit");
var Tiptap = function () {
    var editor = react_1.useEditor({
        extensions: [starter_kit_1["default"]],
        content: "<p>Hello World! 🌎️</p>"
    });
    return React.createElement(react_1.EditorContent, { editor: editor });
};
exports["default"] = Tiptap;
