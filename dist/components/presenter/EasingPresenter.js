"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.EasingPresenter = void 0;
var react_1 = __importStar(require("react"));
var theming_1 = require("@storybook/theming");
var EasingPresenter = function (_a) {
    var token = _a.token;
    var animation = (0, theming_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      transform: scaleX(0);\n    }\n    50% {\n      transform: scaleX(1);\n    }\n    100% {\n      transform: scaleX(0);\n    }\n  "], ["\n    0% {\n      transform: scaleX(0);\n    }\n    50% {\n      transform: scaleX(1);\n    }\n    100% {\n      transform: scaleX(0);\n    }\n  "])));
    var Box = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function (_a) {
            var theme = _a.theme;
            return ({
                animation: animation + " 2s infinite",
                animationTimingFunction: token.value,
                background: theme.color.secondary,
                borderRadius: 2,
                height: 32,
                transformOrigin: 'left',
                width: '100%'
            });
        });
    }, [token]);
    return react_1.default.createElement(Box, null);
};
exports.EasingPresenter = EasingPresenter;
var templateObject_1;
