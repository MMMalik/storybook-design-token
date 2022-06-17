"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenValue = void 0;
var react_1 = __importStar(require("react"));
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var token_types_1 = require("../types/token.types");
var Input_1 = require("./Input");
var ToolButton_1 = require("./ToolButton");
var TokenValue = function (_a) {
    var onValueChange = _a.onValueChange, readonly = _a.readonly, token = _a.token;
    var _b = (0, react_1.useState)(token.rawValue), rawValue = _b[0], setRawValue = _b[1];
    var Container = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function () { return ({
            position: 'relative'
        }); });
    }, []);
    var ResetButton = (0, react_1.useMemo)(function () {
        return theming_1.styled.span(function () { return ({
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translate3d(0, -50%, 0)'
        }); });
    }, []);
    var RawValue = (0, react_1.useMemo)(function () {
        return theming_1.styled.span(function () { return ({
            overflow: 'hidden',
            wordBreak: 'break-all',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
        }); });
    }, []);
    (0, react_1.useEffect)(function () {
        var _a;
        var previewIframe = document.querySelector('#storybook-preview-iframe');
        var tokenElement = (_a = previewIframe === null || previewIframe === void 0 ? void 0 : previewIframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document.documentElement;
        if (tokenElement !== undefined && tokenElement !== null) {
            if (token.rawValue !== rawValue) {
                tokenElement.style.setProperty(token.name, rawValue);
            }
            else {
                tokenElement.style.setProperty(token.name, token.rawValue);
            }
        }
    }, [rawValue]);
    return (react_1.default.createElement(Container, null,
        token.sourceType !== token_types_1.TokenSourceType.CSS &&
            token.sourceType !== token_types_1.TokenSourceType.SVG && (react_1.default.createElement(RawValue, { title: rawValue }, rawValue)),
        (token.sourceType === token_types_1.TokenSourceType.CSS ||
            token.sourceType === token_types_1.TokenSourceType.SVG) && (react_1.default.createElement(Input_1.Input, { readOnly: readonly, onChange: function (event) {
                var newRawValue = event.target.value;
                setRawValue(newRawValue);
                onValueChange(newRawValue);
            }, value: rawValue })),
        token.rawValue !== rawValue && (react_1.default.createElement(ResetButton, null,
            react_1.default.createElement(ToolButton_1.ToolButton, { onClick: function () {
                    setRawValue(token.rawValue);
                    onValueChange(token.rawValue);
                } },
                react_1.default.createElement(components_1.Icons, { icon: "close" }))))));
};
exports.TokenValue = TokenValue;
