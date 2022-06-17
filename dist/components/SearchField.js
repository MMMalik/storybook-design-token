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
exports.SearchField = void 0;
var react_1 = __importStar(require("react"));
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var Input_1 = require("./Input");
var SearchHolder = theming_1.styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '&:focus-within svg': {
            color: theme.color.defaultText
        }
    });
});
var SearchIcon = (0, theming_1.styled)(components_1.Icons)(function (_a) {
    var theme = _a.theme;
    return ({
        width: 12,
        height: 12,
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        pointerEvents: 'none',
        color: theme.textMutedColor
    });
});
var ClearButton = theming_1.styled.button(function (_a) {
    var theme = _a.theme;
    return ({
        width: 16,
        height: 16,
        padding: 4,
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        background: 'rgba(0,0,0,0.1)',
        border: 'none',
        borderRadius: 16,
        color: theme.color.defaultText,
        cursor: 'pointer'
    });
});
var ClearIcon = (0, theming_1.styled)(components_1.Icons)(function (_a) {
    var theme = _a.theme;
    return ({});
});
var SearchInput = (0, theming_1.styled)(Input_1.Input)(function (_a) {
    var theme = _a.theme;
    return ({
        paddingLeft: 28,
        paddingRight: 28,
        height: 32
    });
});
function SearchField(_a) {
    var value = _a.value, onChange = _a.onChange, style = _a.style;
    var handleChange = (0, react_1.useCallback)(function (e) {
        onChange(e.target.value);
    }, [onChange]);
    var handleClear = (0, react_1.useCallback)(function () {
        onChange('');
    }, [onChange]);
    return (react_1.default.createElement(SearchHolder, { style: style },
        react_1.default.createElement(SearchIcon, { icon: "search" }),
        react_1.default.createElement(SearchInput, { value: value, onChange: handleChange, placeholder: "Provide a token name \u2026" }),
        react_1.default.createElement(ClearButton, { onClick: handleClear },
            react_1.default.createElement(ClearIcon, { icon: "cross" }))));
}
exports.SearchField = SearchField;
