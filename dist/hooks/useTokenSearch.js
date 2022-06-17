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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTokenSearch = void 0;
var react_1 = require("react");
var useDebounce_1 = require("./useDebounce");
function useTokenSearch(categories) {
    var _a = (0, react_1.useState)(''), searchText = _a[0], setSearchText = _a[1];
    var debouncedSearchText = (0, useDebounce_1.useDebounce)(searchText, 250);
    var resultCategories = (0, react_1.useMemo)(function () {
        return debouncedSearchText
            ? categories === null || categories === void 0 ? void 0 : categories.map(function (item) { return (__assign(__assign({}, item), { tokens: item.tokens.filter(function (token) { return token.name.includes(debouncedSearchText); }) })); })
            : categories;
    }, [debouncedSearchText, categories]);
    return {
        categories: resultCategories,
        searchText: searchText,
        setSearchText: setSearchText,
    };
}
exports.useTokenSearch = useTokenSearch;
