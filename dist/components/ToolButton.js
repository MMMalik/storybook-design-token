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
exports.ToolButton = void 0;
var react_1 = __importStar(require("react"));
var theming_1 = require("@storybook/theming");
var ToolButton = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    var Button = (0, react_1.useMemo)(function () {
        return theming_1.styled.button(function (_a) {
            var theme = _a.theme;
            return ({
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                height: 18,
                justifyContent: 'center',
                marginLeft: 4,
                padding: 0,
                verticalAlign: 'middle',
                width: 18,
                '&:hover': {
                    color: theme.color.secondary
                },
                '> svg': {
                    height: 13,
                    position: 'relative',
                    top: -1,
                    width: 13
                }
            });
        });
    }, []);
    return react_1.default.createElement(Button, { onClick: onClick }, children);
};
exports.ToolButton = ToolButton;
