"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTab = void 0;
var react_1 = __importDefault(require("react"));
var TokenCards_1 = require("./TokenCards");
var TokenTable_1 = require("./TokenTable");
var SearchField_1 = require("./SearchField");
var useTokenSearch_1 = require("../hooks/useTokenSearch");
function TokenTab(_a) {
    var categoriesProp = _a.categories, _b = _a.viewType, viewType = _b === void 0 ? 'table' : _b, _c = _a.showSearch, showSearch = _c === void 0 ? true : _c;
    var _d = (0, useTokenSearch_1.useTokenSearch)(categoriesProp), searchText = _d.searchText, setSearchText = _d.setSearchText, categories = _d.categories;
    return (react_1.default.createElement("div", null,
        showSearch && (react_1.default.createElement(SearchField_1.SearchField, { value: searchText, onChange: setSearchText, style: { margin: '12px 12px 8px' } })),
        viewType === 'card' && react_1.default.createElement(TokenCards_1.TokenCards, { categories: categories }),
        viewType === 'table' && react_1.default.createElement(TokenTable_1.TokenTable, { categories: categories })));
}
exports.TokenTab = TokenTab;
