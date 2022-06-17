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
exports.BorderPresenter = void 0;
var react_1 = __importStar(require("react"));
var theming_1 = require("@storybook/theming");
var BorderPresenter = function (_a) {
    var token = _a.token;
    var Box = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function () { return ({
            border: token.value,
            height: 32,
            width: '100%'
        }); });
    }, [token]);
    return react_1.default.createElement(Box, null);
};
exports.BorderPresenter = BorderPresenter;
