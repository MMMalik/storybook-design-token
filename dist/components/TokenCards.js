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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenCards = void 0;
var react_1 = __importStar(require("react"));
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var ClipboardButton_1 = require("./ClipboardButton");
var TokenPreview_1 = require("./TokenPreview");
var TokenValue_1 = require("./TokenValue");
var ToolButton_1 = require("./ToolButton");
var pageSize = 50;
var TokenCards = function (_a) {
    var categories = _a.categories, _b = _a.padded, padded = _b === void 0 ? true : _b, readonly = _a.readonly, _c = _a.showValueColumn, showValueColumn = _c === void 0 ? true : _c;
    var _d = (0, react_1.useState)({}), tokenValueOverwrites = _d[0], setTokenValueOverwrites = _d[1];
    var _e = (0, react_1.useState)(0), page = _e[0], setPage = _e[1];
    var Container = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function () { return ({
            display: 'grid',
            columnGap: 12,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            padding: padded ? 15 : undefined,
            rowGap: 12
        }); });
    }, []);
    var Card = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function (_a) {
            var theme = _a.theme;
            return ({
                boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 1px, rgb(0 0 0 / 7%) 0px 0px 0px 1px',
                borderRadius: 4,
                color: theme.color.defaultText,
                fontFamily: theme.typography.fonts.base,
                fontSize: theme.typography.size.s1,
                padding: 12,
                overflow: 'hidden',
                '> *:not(:last-child)': {
                    marginBottom: 8
                },
                svg: {
                    maxWidth: '100%',
                    maxHeight: '100%'
                }
            });
        });
    }, []);
    var Pagination = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function (_a) {
            var theme = _a.theme;
            return ({
                alignItems: 'center',
                color: theme.color.defaultText,
                display: 'flex',
                fontFamily: theme.typography.fonts.base,
                fontSize: theme.typography.size.s1,
                justifyContent: 'space-between',
                paddingRight: padded ? 15 : undefined,
                paddingBottom: padded ? 48 : undefined,
                paddingLeft: padded ? 15 : undefined,
                marginTop: 8,
                '& > div': {
                    display: 'flex',
                    gap: 8
                }
            });
        });
    }, []);
    var tokens = (0, react_1.useMemo)(function () {
        return categories.reduce(function (tokens, category) { return __spreadArray(__spreadArray([], tokens, true), category.tokens, true); }, []);
    }, [categories]);
    var pages = (0, react_1.useMemo)(function () { return Math.ceil(tokens.length / pageSize); }, [tokens]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Container, null, tokens
            .slice(page * pageSize, page * pageSize + pageSize)
            .map(function (token, index) { return (react_1.default.createElement(Card, { key: token.name + '-card-' + index },
            token.name,
            react_1.default.createElement(components_1.WithTooltip, { hasChrome: false, tooltip: react_1.default.createElement(components_1.TooltipNote, { note: "Copy to clipboard" }) },
                react_1.default.createElement(ClipboardButton_1.ClipboardButton, { button: react_1.default.createElement(ToolButton_1.ToolButton, null,
                        react_1.default.createElement(components_1.Icons, { icon: "copy" })), value: token.name })),
            token.description && (react_1.default.createElement(components_1.WithTooltip, { tooltip: react_1.default.createElement(components_1.TooltipMessage, { desc: token.description }) },
                react_1.default.createElement(ToolButton_1.ToolButton, null,
                    react_1.default.createElement(components_1.Icons, { icon: "info" })))),
            showValueColumn && (react_1.default.createElement(TokenValue_1.TokenValue, { onValueChange: function (newValue) {
                    setTokenValueOverwrites(function (tokenValueOverwrites) {
                        var _a;
                        return (__assign(__assign({}, tokenValueOverwrites), (_a = {}, _a[token.name] = newValue === token.rawValue ? undefined : newValue, _a)));
                    });
                }, readonly: readonly, token: token })),
            react_1.default.createElement(TokenPreview_1.TokenPreview, { token: __assign(__assign({}, token), { value: tokenValueOverwrites[token.name] || token.value }) }))); })),
        pages > 1 && (react_1.default.createElement(Pagination, null,
            react_1.default.createElement("span", null,
                "Page ",
                page + 1,
                " of ",
                pages),
            react_1.default.createElement("div", null,
                react_1.default.createElement(components_1.Button, { disabled: page === 0, onClick: function () { return setPage(function (page) { return Math.max(0, page - 1); }); }, tertiary: true, small: true }, "Previous page"),
                react_1.default.createElement(components_1.Button, { disabled: page >= pages - 1, onClick: function () { return setPage(function (page) { return Math.min(page + 1, pages - 1); }); }, tertiary: true, small: true }, "Next page"))))));
};
exports.TokenCards = TokenCards;
