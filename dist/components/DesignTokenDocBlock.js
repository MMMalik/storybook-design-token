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
exports.DesignTokenDocBlock = void 0;
var react_1 = __importStar(require("react"));
var addon_docs_1 = require("@storybook/addon-docs");
var theming_1 = require("@storybook/theming");
var useTokenTabs_1 = require("../hooks/useTokenTabs");
var TokenTable_1 = require("./TokenTable");
var TokenCards_1 = require("./TokenCards");
var useTokenSearch_1 = require("../hooks/useTokenSearch");
var SearchField_1 = require("./SearchField");
/**
 * Storybook 6.4 changed the DocsContextProps interface.
 * This is a compatibility method to get docs parameters across Storybook versions.
 */
function getMainStory(context) {
    return typeof context.storyById === 'function'
        ? context.storyById(context.id)
        : context;
}
var Container = theming_1.styled.div(function () { return ({
    margin: '25px 0 40px',
    '*': {
        boxSizing: 'border-box'
    }
}); });
var Card = theming_1.styled.div(function () { return ({
    boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 1px, rgb(0 0 0 / 7%) 0px 0px 0px 1px',
    borderRadius: 4
}); });
var DesignTokenDocBlock = function (_a) {
    var categoryName = _a.categoryName, _b = _a.maxHeight, maxHeight = _b === void 0 ? 600 : _b, _c = _a.showValueColumn, showValueColumn = _c === void 0 ? true : _c, _d = _a.viewType, viewType = _d === void 0 ? 'table' : _d, _e = _a.showSearch, showSearch = _e === void 0 ? true : _e;
    var context = (0, react_1.useContext)(addon_docs_1.DocsContext);
    var story = getMainStory(context);
    var tabs = (0, useTokenTabs_1.useTokenTabs)(story.parameters.designToken).tabs;
    var tab = (0, react_1.useMemo)(function () { return tabs.find(function (t) { return t.label === categoryName; }); }, [
        categoryName,
        tabs
    ]);
    if (!tab) {
        return null;
    }
    return (react_1.default.createElement(DesignTokenDocBlockView, { categories: tab.categories, viewType: viewType, maxHeight: maxHeight, showValueColumn: showValueColumn, showSearch: showSearch }));
};
exports.DesignTokenDocBlock = DesignTokenDocBlock;
/**
 * NOTE: Every searchText change causes full page mount/unmount, so input loses focus after input of every next character.
 * So the aim of DesignTokenDocBlockView component prevent re-renders, as it contains searchText change inside.
 */
function DesignTokenDocBlockView(_a) {
    var viewType = _a.viewType, categoriesProp = _a.categories, maxHeight = _a.maxHeight, showValueColumn = _a.showValueColumn, showSearch = _a.showSearch;
    var _b = (0, useTokenSearch_1.useTokenSearch)(categoriesProp !== null && categoriesProp !== void 0 ? categoriesProp : []), searchText = _b.searchText, setSearchText = _b.setSearchText, categories = _b.categories;
    return (react_1.default.createElement(Container, { className: "design-token-container" },
        showSearch && (react_1.default.createElement(SearchField_1.SearchField, { value: searchText, onChange: function (value) {
                console.log(value);
                setSearchText(value);
            }, style: { margin: '12px 0' } })),
        viewType === 'table' && (react_1.default.createElement(Card, { className: "design-token-card" },
            react_1.default.createElement(TokenTable_1.TokenTable, { categories: categories, maxHeight: maxHeight, readonly: true, showValueColumn: showValueColumn }))),
        viewType === 'card' && (react_1.default.createElement(TokenCards_1.TokenCards, { categories: categories, padded: false, readonly: true, showValueColumn: showValueColumn }))));
}
