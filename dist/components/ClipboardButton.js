"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClipboardButton = void 0;
var react_1 = __importDefault(require("react"));
var react_use_clipboard_1 = __importDefault(require("react-use-clipboard"));
var ClipboardButton = function (_a) {
    var button = _a.button, value = _a.value;
    var _b = (0, react_use_clipboard_1.default)(value), _ = _b[0], setCopied = _b[1];
    return react_1.default.createElement("span", { onClick: setCopied }, button);
};
exports.ClipboardButton = ClipboardButton;
