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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSvgFiles = void 0;
var jsdom_1 = require("jsdom");
var path_1 = require("path");
var token_types_1 = require("../types/token.types");
function parseSvgFiles(files) {
    if (files === void 0) { files = []; }
    return __awaiter(this, void 0, void 0, function () {
        var tokens, categoryNames;
        return __generator(this, function (_a) {
            tokens = determineTokens(files);
            categoryNames = tokens
                .map(function (token) { return token.categoryName; })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            return [2 /*return*/, {
                    categories: categoryNames.map(function (name) {
                        return {
                            name: name || 'SVG Icons',
                            presenter: token_types_1.TokenPresenter.SVG,
                            tokens: tokens.filter(function (token) { return token.categoryName === name; })
                        };
                    })
                }];
        });
    });
}
exports.parseSvgFiles = parseSvgFiles;
function determineTokens(files) {
    if (!files) {
        return [];
    }
    var document = new jsdom_1.JSDOM().window.document;
    return files
        .map(function (file) {
        var div = document.createElement('div');
        div.innerHTML = file.content;
        var svgs = Array.from(div.querySelectorAll('svg'));
        var name = (0, path_1.basename)(file.filename, (0, path_1.extname)(file.filename));
        return svgs
            .map(function (svg, index, array) { return ({
            name: (svg === null || svg === void 0 ? void 0 : svg.getAttribute('data-token-name')) ||
                (svg === null || svg === void 0 ? void 0 : svg.getAttribute('id')) ||
                (array.length > 1 ? name + "-" + (index + 1) : name),
            description: (svg === null || svg === void 0 ? void 0 : svg.getAttribute('data-token-description')) || '',
            categoryName: (svg === null || svg === void 0 ? void 0 : svg.getAttribute('data-token-category')) || 'SVG Icons',
            presenter: token_types_1.TokenPresenter.SVG,
            rawValue: svg.outerHTML,
            sourceType: token_types_1.TokenSourceType.SVG,
            value: svg.outerHTML
        }); })
            .filter(function (token) { return token.name; });
    })
        .flat();
}
