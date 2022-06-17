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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCssFiles = void 0;
var postcss_1 = __importDefault(require("postcss"));
var postcss_scss_1 = __importDefault(require("postcss-scss"));
var token_types_1 = require("../types/token.types");
function parseCssFiles(files, sourceType, injectVariables, preserveCSSVars) {
    if (files === void 0) { files = []; }
    return __awaiter(this, void 0, void 0, function () {
        var relevantFiles, nodes, categories, injectionStyles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    relevantFiles = files.filter(function (file, index, files) {
                        return file.content &&
                            !files.some(function (f, i) { return f.content === file.content && i < index; });
                    });
                    return [4 /*yield*/, getNodes(relevantFiles.filter(function (file) { return file.content; }))];
                case 1:
                    nodes = _a.sent();
                    categories = determineCategories(nodes.comments, nodes.declarations, sourceType, preserveCSSVars);
                    injectionStyles = nodes === null || nodes === void 0 ? void 0 : nodes.keyframes.map(function (k) { return k.toString(); }).join(' ');
                    if (injectVariables) {
                        injectionStyles =
                            injectionStyles +
                                (":root {\n        " + nodes.declarations
                                    .map(function (declaration) { return declaration.toString(); })
                                    .join(';') + "\n      }");
                    }
                    return [2 /*return*/, { categories: categories, injectionStyles: injectionStyles }];
            }
        });
    });
}
exports.parseCssFiles = parseCssFiles;
function determineCategories(comments, declarations, sourceType, preserveCSSVars) {
    var categoryComments = comments.filter(function (comment) {
        return comment.text.includes('@tokens ');
    });
    return categoryComments.map(function (comment, index) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var nextComment = categoryComments[index + 1];
        var nameResults = /@tokens (.+)/g.exec(comment.text);
        var presenterResults = /@presenter (.+)/g.exec(comment.text);
        var presenter = presenterResults === null || presenterResults === void 0 ? void 0 : presenterResults[1];
        if (presenter &&
            !Object.values(token_types_1.TokenPresenter).includes((presenter || ''))) {
            throw new Error("Presenter \"" + presenter + "\" is not valid.");
        }
        var range = {
            from: {
                column: ((_b = (_a = comment.source) === null || _a === void 0 ? void 0 : _a.start) === null || _b === void 0 ? void 0 : _b.column) || 0,
                line: ((_d = (_c = comment.source) === null || _c === void 0 ? void 0 : _c.start) === null || _d === void 0 ? void 0 : _d.line) || 0
            },
            to: (nextComment === null || nextComment === void 0 ? void 0 : nextComment.prev())
                ? {
                    column: ((_g = (_f = (_e = nextComment.prev()) === null || _e === void 0 ? void 0 : _e.source) === null || _f === void 0 ? void 0 : _f.end) === null || _g === void 0 ? void 0 : _g.column) || 0,
                    line: ((_k = (_j = (_h = nextComment.prev()) === null || _h === void 0 ? void 0 : _h.source) === null || _j === void 0 ? void 0 : _j.end) === null || _k === void 0 ? void 0 : _k.line) || 0
                }
                : undefined
        };
        var source = ((_l = comment.source) === null || _l === void 0 ? void 0 : _l.input.from) || '';
        return {
            name: (nameResults === null || nameResults === void 0 ? void 0 : nameResults[1]) || '',
            presenter: presenter,
            range: range,
            source: source,
            tokens: determineTokensForCategory(source, range, declarations, comments, sourceType, presenter, preserveCSSVars)
        };
    });
}
function determineTokensForCategory(source, range, declarations, comments, sourceType, presenter, preserveCSSVars) {
    var declarationsWithinRange = declarations.filter(function (declaration) {
        var _a, _b, _c, _d, _e;
        return ((_a = declaration.source) === null || _a === void 0 ? void 0 : _a.input.from) === source &&
            (((_c = (_b = declaration.source) === null || _b === void 0 ? void 0 : _b.start) === null || _c === void 0 ? void 0 : _c.line) || -1) > range.from.line &&
            (!range.to || (((_e = (_d = declaration.source) === null || _d === void 0 ? void 0 : _d.start) === null || _e === void 0 ? void 0 : _e.line) || -1) <= range.to.line);
    });
    return declarationsWithinRange
        .map(function (declaration) {
        var description = comments.find(function (comment) {
            var _a, _b, _c, _d, _e, _f;
            return ((_a = comment.source) === null || _a === void 0 ? void 0 : _a.input.file) === ((_b = declaration.source) === null || _b === void 0 ? void 0 : _b.input.file) &&
                ((_d = (_c = comment.source) === null || _c === void 0 ? void 0 : _c.start) === null || _d === void 0 ? void 0 : _d.line) === ((_f = (_e = declaration.source) === null || _e === void 0 ? void 0 : _e.end) === null || _f === void 0 ? void 0 : _f.line);
        });
        var value = determineTokenValue(declaration.value, declarations, preserveCSSVars);
        var presenterToken;
        if (description) {
            var presenterResultsToken = /@presenter (.+)/g.exec(description.text);
            if (presenterResultsToken) {
                presenterToken = presenterResultsToken[1];
                description.text = description.text.replace(presenterResultsToken[0] || '', '');
            }
        }
        return {
            description: description === null || description === void 0 ? void 0 : description.text,
            isAlias: value !== declaration.value,
            name: declaration.prop,
            presenter: presenterToken || presenter,
            rawValue: declaration.value,
            sourceType: sourceType,
            value: value
        };
    })
        .slice()
        .reverse()
        .filter(function (token, index, tokens) {
        return index === tokens.findIndex(function (t) { return t.name === token.name; });
    })
        .reverse();
}
function determineTokenValue(rawValue, declarations, preserveCSSVars) {
    var _a;
    rawValue = rawValue.replace(/!default/g, '').replace(/!global/g, '');
    var cssVars = '(var\\(([a-zA-Z0-9-_]+)\\))';
    var scssVars = '(\\$([a-zA-Z0-9-_]+))';
    var lessVars = '(\\@([a-zA-Z0-9-_]+))';
    var vars = [!preserveCSSVars && cssVars, scssVars, lessVars].filter(Boolean);
    var referencedVariableResult = new RegExp("^(" + vars.join('|') + ")$").exec(rawValue);
    var referencedVariable = (referencedVariableResult === null || referencedVariableResult === void 0 ? void 0 : referencedVariableResult[3]) ||
        (referencedVariableResult === null || referencedVariableResult === void 0 ? void 0 : referencedVariableResult[5]) ||
        (referencedVariableResult === null || referencedVariableResult === void 0 ? void 0 : referencedVariableResult[7]);
    if (referencedVariable) {
        var value = ((_a = declarations.find(function (declaration) {
            return declaration.prop === referencedVariable ||
                declaration.prop === "$" + referencedVariable ||
                declaration.prop === "@" + referencedVariable;
        })) === null || _a === void 0 ? void 0 : _a.value) || '';
        return determineTokenValue(value, declarations, preserveCSSVars);
    }
    return rawValue;
}
function getNodes(files) {
    return __awaiter(this, void 0, void 0, function () {
        var comments, declarations, keyframes, plugin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    comments = [];
                    declarations = [];
                    keyframes = [];
                    plugin = {
                        postcssPlugin: 'storybook-design-token-parser',
                        Once: function (root) {
                            root.walkAtRules(function (atRule) {
                                if (atRule.name === 'keyframes') {
                                    keyframes.push(atRule);
                                    return;
                                }
                                var variableAtRule = atRule;
                                if (variableAtRule.name.endsWith(':')) {
                                    declarations.push(__assign(__assign({}, variableAtRule), { prop: "@" + variableAtRule.name.substr(0, variableAtRule.name.length - 1), value: variableAtRule.params }));
                                }
                            });
                            root.walkComments(function (comment) {
                                comments.push(comment);
                            });
                            root.walkDecls(function (declaration) {
                                if (declaration.prop.startsWith('--') ||
                                    declaration.prop.startsWith('$')) {
                                    declarations.push(declaration);
                                }
                            });
                        }
                    };
                    return [4 /*yield*/, Promise.all(files.map(function (file) {
                            var syntax = (file.filename.endsWith('.scss') || file.filename.endsWith('.less')) ? postcss_scss_1.default : undefined;
                            return (0, postcss_1.default)([plugin]).process(file.content, {
                                from: file.filename,
                                syntax: syntax
                            });
                        }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, { comments: comments, declarations: declarations, keyframes: keyframes }];
            }
        });
    });
}
