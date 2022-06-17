"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.useTokenTabs = void 0;
var react_1 = require("react");
var react_storage_hooks_1 = require("react-storage-hooks");
function useTokenTabs(config) {
    var _a = (0, react_1.useState)(), tokenFiles = _a[0], setTokenFiles = _a[1];
    var _b = (0, react_1.useState)([]), cssCategories = _b[0], setCssCategories = _b[1];
    var _c = (0, react_1.useState)([]), lessCategories = _c[0], setLessCategories = _c[1];
    var _d = (0, react_1.useState)([]), scssCategories = _d[0], setScssCategories = _d[1];
    var _e = (0, react_1.useState)([]), svgIconCategories = _e[0], setSvgIconCategories = _e[1];
    var _f = (0, react_1.useState)([]), imageCategories = _f[0], setImageIconCategories = _f[1];
    var _g = (0, react_1.useState)(), activeCategory = _g[0], setActiveCategory = _g[1];
    var _h = (0, react_storage_hooks_1.useStorageState)(localStorage, 'storybook-design-token-addon-card', false), cardView = _h[0], setCardView = _h[1];
    var _j = (0, react_1.useState)(''), styleInjections = _j[0], setStyleInjections = _j[1];
    var tabs = (0, react_1.useMemo)(function () {
        var categories = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], cssCategories, true), lessCategories, true), scssCategories, true), svgIconCategories, true), imageCategories, true).filter(function (category) { return category !== undefined && (category === null || category === void 0 ? void 0 : category.tokens.length) > 0; });
        var categoryNames = Array.from(new Set(categories.map(function (category) { return category === null || category === void 0 ? void 0 : category.name; })));
        return categoryNames.map(function (name) { return ({
            label: name,
            categories: categories.filter(function (category) { return (category === null || category === void 0 ? void 0 : category.name) === name; })
        }); });
    }, [
        cssCategories,
        lessCategories,
        scssCategories,
        svgIconCategories,
        imageCategories
    ]);
    (0, react_1.useEffect)(function () {
        function fetchTokenFiles() {
            return __awaiter(this, void 0, void 0, function () {
                var designTokenSource;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fetch('./design-tokens.source.json')];
                        case 1: return [4 /*yield*/, (_a.sent()).text()];
                        case 2:
                            designTokenSource = _a.sent();
                            setTokenFiles(JSON.parse(designTokenSource));
                            return [2 /*return*/];
                    }
                });
            });
        }
        fetchTokenFiles();
    }, []);
    (0, react_1.useEffect)(function () {
        var cssTokens = tokenFiles === null || tokenFiles === void 0 ? void 0 : tokenFiles.cssTokens;
        var lessTokens = tokenFiles === null || tokenFiles === void 0 ? void 0 : tokenFiles.lessTokens;
        var scssTokens = tokenFiles === null || tokenFiles === void 0 ? void 0 : tokenFiles.scssTokens;
        var svgTokens = tokenFiles === null || tokenFiles === void 0 ? void 0 : tokenFiles.svgTokens;
        var imageTokens = tokenFiles === null || tokenFiles === void 0 ? void 0 : tokenFiles.imageTokens;
        setStyleInjections((config === null || config === void 0 ? void 0 : config.styleInjection) || '');
        if (cssTokens) {
            setCssCategories(cssTokens.categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && cssTokens.categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || cssTokens.categories[0].name; });
            }
            setStyleInjections(function (current) { return current + cssTokens.injectionStyles; });
        }
        if (lessTokens) {
            setLessCategories(lessTokens.categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && lessTokens.categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || lessTokens.categories[0].name; });
            }
            setStyleInjections(function (current) { return current + lessTokens.injectionStyles; });
        }
        if (scssTokens) {
            setScssCategories(scssTokens.categories);
            if (!(config === null || config === void 0 ? void 0 : config.defaultTab) && scssTokens.categories.length > 0) {
                setActiveCategory(function (activeCategory) { return activeCategory || scssTokens.categories[0].name; });
            }
            setStyleInjections(function (current) { return current + scssTokens.injectionStyles; });
        }
        if (svgTokens) {
            setSvgIconCategories(svgTokens.categories);
        }
        if (imageTokens) {
            setImageIconCategories(imageTokens.categories);
        }
    }, [config, tokenFiles]);
    (0, react_1.useEffect)(function () {
        if (config === null || config === void 0 ? void 0 : config.defaultTab) {
            setActiveCategory(config.defaultTab);
        }
    }, [config]);
    return {
        activeCategory: activeCategory,
        cardView: cardView,
        setActiveCategory: setActiveCategory,
        setCardView: setCardView,
        styleInjections: styleInjections,
        tabs: tabs
    };
}
exports.useTokenTabs = useTokenTabs;
