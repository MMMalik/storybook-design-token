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
exports.TokenTable = void 0;
var polished_1 = require("polished");
var react_1 = __importStar(require("react"));
var react_virtual_1 = require("react-virtual");
var components_1 = require("@storybook/components");
var theming_1 = require("@storybook/theming");
var ClipboardButton_1 = require("./ClipboardButton");
var TokenPreview_1 = require("./TokenPreview");
var TokenValue_1 = require("./TokenValue");
var ToolButton_1 = require("./ToolButton");
var TokenTable = function (_a) {
    var categories = _a.categories, maxHeight = _a.maxHeight, readonly = _a.readonly, _b = _a.showValueColumn, showValueColumn = _b === void 0 ? true : _b;
    var _c = (0, react_1.useState)({}), tokenValueOverwrites = _c[0], setTokenValueOverwrites = _c[1];
    var _d = (0, react_1.useState)(maxHeight || 100), panelHeight = _d[0], setPanelHeight = _d[1];
    var parentRef = (0, react_1.useRef)(null);
    var tokens = (0, react_1.useMemo)(function () {
        return categories.reduce(function (tokens, category) { return __spreadArray(__spreadArray([], tokens, true), category.tokens, true); }, []);
    }, [categories]);
    var rowVirtualizer = (0, react_virtual_1.useVirtual)({
        size: tokens.length,
        parentRef: parentRef,
        estimateSize: (0, react_1.useCallback)(function () { return 49; }, [])
    });
    var ScrollContainer = (0, react_1.useMemo)(function () {
        return theming_1.styled.div(function () { return ({
            maxHeight: panelHeight ? panelHeight + "px" : 'none',
            overflow: 'auto',
            padding: '15px'
        }); });
    }, [panelHeight]);
    var Table = (0, react_1.useMemo)(function () {
        return theming_1.styled.table(function (_a) {
            var theme = _a.theme;
            return ({
                borderCollapse: 'collapse',
                borderSpacing: 0,
                color: theme.color.defaultText,
                fontFamily: theme.typography.fonts.base,
                fontSize: theme.typography.size.s1,
                minWidth: 700,
                tableLayout: 'fixed',
                textAlign: 'left',
                width: '100%',
                'thead > tr': {
                    display: 'flex'
                },
                'tbody > tr': {
                    borderTop: "1px solid " + theme.color.mediumlight,
                    display: 'flex',
                    ':first-of-type': {
                        borderTopColor: theme.color.medium
                    },
                    ':last-of-type': {
                        borderBottom: "1px solid " + theme.color.mediumlight
                    }
                },
                'td, th': {
                    border: 'none',
                    textOverflow: 'ellipsis',
                    verticalAlign: 'middle',
                    ':nth-of-type(1)': {
                        flexBasis: '50%',
                        flexGrow: 1,
                        flexShrink: 0
                    },
                    ':nth-of-type(2)': {
                        flexBasis: '25%',
                        flexGrow: 0,
                        flexShrink: 0
                    },
                    ':nth-of-type(3)': {
                        flexBasis: '25%',
                        flexGrow: 0,
                        flexShrink: 0
                    }
                },
                th: {
                    color: theme.base === 'light'
                        ? (0, polished_1.transparentize)(0.25, theme.color.defaultText)
                        : (0, polished_1.transparentize)(0.45, theme.color.defaultText),
                    paddingBottom: 12,
                    ':not(:first-of-type)': {
                        paddingLeft: 15
                    },
                    ':not(:last-of-type)': {
                        paddingRight: 15
                    },
                    ':last-of-type': {
                        width: 200
                    }
                },
                td: {
                    overflow: 'hidden',
                    paddingBottom: 8,
                    paddingTop: 8,
                    ':not(:first-of-type)': {
                        paddingLeft: 15
                    },
                    ':not(:last-of-type)': {
                        paddingRight: 15
                    },
                    svg: {
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }
                }
            });
        });
    }, []);
    (0, react_1.useLayoutEffect)(function () {
        var resizeHandler = function () {
            var _a;
            if (maxHeight !== undefined) {
                return;
            }
            var tabPanel = (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.closest('.os-content');
            var tabBar = tabPanel === null || tabPanel === void 0 ? void 0 : tabPanel.querySelector('[role="tablist"]');
            if (tabPanel && tabBar) {
                var height = tabPanel.getBoundingClientRect().height -
                    tabBar.getBoundingClientRect().height;
                setPanelHeight(height);
            }
        };
        setTimeout(function () {
            resizeHandler();
        });
        window.addEventListener('resize', resizeHandler);
        return function () { return window.removeEventListener('resize', resizeHandler); };
    }, []);
    return (react_1.default.createElement(ScrollContainer, { ref: parentRef },
        react_1.default.createElement(Table, null,
            react_1.default.createElement("thead", { className: "docblock-argstable-head" },
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "Name"),
                    showValueColumn && react_1.default.createElement("th", null, "Value"),
                    react_1.default.createElement("th", null, "Preview"))),
            react_1.default.createElement("tbody", { style: {
                    height: rowVirtualizer.totalSize + "px",
                    position: 'relative'
                } }, rowVirtualizer.virtualItems.map(function (virtualRow) {
                var token = tokens[virtualRow.index];
                return (react_1.default.createElement("tr", { key: virtualRow.index, style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: virtualRow.size + "px",
                        transform: "translateY(" + virtualRow.start + "px)"
                    } },
                    react_1.default.createElement("td", null,
                        token.name,
                        react_1.default.createElement(components_1.WithTooltip, { hasChrome: false, tooltip: react_1.default.createElement(components_1.TooltipNote, { note: "Copy to clipboard" }) },
                            react_1.default.createElement(ClipboardButton_1.ClipboardButton, { button: react_1.default.createElement(ToolButton_1.ToolButton, null,
                                    react_1.default.createElement(components_1.Icons, { icon: "copy" })), value: token.name })),
                        token.description && (react_1.default.createElement(components_1.WithTooltip, { tooltip: react_1.default.createElement(components_1.TooltipMessage, { desc: token.description }) },
                            react_1.default.createElement(ToolButton_1.ToolButton, null,
                                react_1.default.createElement(components_1.Icons, { icon: "info" }))))),
                    showValueColumn && (react_1.default.createElement("td", null,
                        react_1.default.createElement(TokenValue_1.TokenValue, { onValueChange: function (newValue) {
                                setTokenValueOverwrites(function (tokenValueOverwrites) {
                                    var _a;
                                    return (__assign(__assign({}, tokenValueOverwrites), (_a = {}, _a[token.name] = newValue === token.rawValue ? undefined : newValue, _a)));
                                });
                            }, readonly: readonly, token: token }))),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(TokenPreview_1.TokenPreview, { token: __assign(__assign({}, token), { value: tokenValueOverwrites[token.name] || token.value }) }))));
            })))));
};
exports.TokenTable = TokenTable;
