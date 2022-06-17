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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorybookDesignTokenPlugin = exports.StorybookDesignTokenPluginWebpack4 = void 0;
var fs_1 = require("fs");
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var image_parser_1 = require("./parsers/image.parser");
var postcss_parser_1 = require("./parsers/postcss.parser");
var svg_icon_parser_1 = require("./parsers/svg-icon.parser");
var token_types_1 = require("./types/token.types");
function getTokenFilePaths(compiler) {
    return glob_1.default.sync(path_1.default.join(compiler.context, process.env.DESIGN_TOKEN_GLOB || '**/*.{css,scss,less,svg,png,jpeg,gif}'), {
        ignore: ['**/node_modules/**', '**/storybook-static/**', '**/*.chunk.*']
    });
}
function addFilesToWebpackDeps(compilation, files) {
    if ('addAll' in compilation.fileDependencies) {
        // In webpack5, fileDependencies is a LazySet.
        compilation.fileDependencies.addAll(files);
    }
    else {
        // If webpack4, fileDependencies will be an array
        compilation.fileDependencies = __spreadArray(__spreadArray([], compilation.fileDependencies, true), files, true);
    }
}
function generateTokenFilesJsonString(files, preserveCSSVars) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenFiles, cssTokens, scssTokens, lessTokens, svgTokens, imageTokens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenFiles = files
                        .map(function (path) { return ({
                        filename: path,
                        content: (0, fs_1.readFileSync)(path, 'utf-8')
                    }); })
                        .filter(function (file) {
                        return file.content.includes('@tokens') ||
                            file.filename.endsWith('.svg') ||
                            isImageExtension(file.filename);
                    });
                    return [4 /*yield*/, (0, postcss_parser_1.parseCssFiles)(tokenFiles.filter(function (file) { return file.filename.endsWith('.css'); }), token_types_1.TokenSourceType.CSS, true, preserveCSSVars)];
                case 1:
                    cssTokens = _a.sent();
                    return [4 /*yield*/, (0, postcss_parser_1.parseCssFiles)(tokenFiles.filter(function (file) { return file.filename.endsWith('.scss'); }), token_types_1.TokenSourceType.SCSS, true, preserveCSSVars)];
                case 2:
                    scssTokens = _a.sent();
                    return [4 /*yield*/, (0, postcss_parser_1.parseCssFiles)(tokenFiles.filter(function (file) { return file.filename.endsWith('.less'); }), token_types_1.TokenSourceType.LESS, true, preserveCSSVars)];
                case 3:
                    lessTokens = _a.sent();
                    return [4 /*yield*/, (0, svg_icon_parser_1.parseSvgFiles)(tokenFiles.filter(function (file) { return file.filename.endsWith('.svg'); }))];
                case 4:
                    svgTokens = _a.sent();
                    return [4 /*yield*/, (0, image_parser_1.parsePngFiles)(tokenFiles.filter(function (file) { return isImageExtension(file.filename); }))];
                case 5:
                    imageTokens = _a.sent();
                    return [2 /*return*/, JSON.stringify({
                            cssTokens: cssTokens,
                            scssTokens: scssTokens,
                            lessTokens: lessTokens,
                            svgTokens: svgTokens,
                            imageTokens: imageTokens
                        })];
            }
        });
    });
}
var StorybookDesignTokenPluginWebpack4 = /** @class */ (function () {
    function StorybookDesignTokenPluginWebpack4(preserveCSSVars) {
        this.preserveCSSVars = preserveCSSVars;
    }
    StorybookDesignTokenPluginWebpack4.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.emit.tapAsync('StorybookDesignTokenPlugin', function (compilation, callback) { return __awaiter(_this, void 0, void 0, function () {
            var files, sourceString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = getTokenFilePaths(compiler);
                        addFilesToWebpackDeps(compilation, files);
                        return [4 /*yield*/, generateTokenFilesJsonString(files, this.preserveCSSVars)];
                    case 1:
                        sourceString = _a.sent();
                        compilation.assets['design-tokens.source.json'] = {
                            source: function () {
                                return sourceString;
                            },
                            size: function () {
                                return sourceString.length;
                            }
                        };
                        callback();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return StorybookDesignTokenPluginWebpack4;
}());
exports.StorybookDesignTokenPluginWebpack4 = StorybookDesignTokenPluginWebpack4;
var StorybookDesignTokenPlugin = /** @class */ (function () {
    function StorybookDesignTokenPlugin(preserveCSSVars) {
        this.preserveCSSVars = preserveCSSVars;
    }
    StorybookDesignTokenPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.initialize.tap('StorybookDesignTokenPlugin', function () {
            var files = getTokenFilePaths(compiler);
            compiler.hooks.emit.tap('StorybookDesignTokenPlugin', function (compilation) {
                addFilesToWebpackDeps(compilation, files);
            });
            compiler.hooks.thisCompilation.tap('StorybookDesignTokenPlugin', function (compilation) {
                compilation.hooks.processAssets.tapAsync({
                    name: 'HtmlWebpackPlugin',
                    stage: compiler.webpack.Compilation
                        .PROCESS_ASSETS_STAGE_OPTIMIZE_INLINE
                }, function (compilationAssets, callback) { return __awaiter(_this, void 0, void 0, function () {
                    var sourceString;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, generateTokenFilesJsonString(files, this.preserveCSSVars)];
                            case 1:
                                sourceString = _a.sent();
                                compilationAssets['design-tokens.source.json'] = {
                                    source: function () {
                                        return sourceString;
                                    },
                                    size: function () {
                                        return sourceString.length;
                                    }
                                };
                                callback();
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        });
    };
    return StorybookDesignTokenPlugin;
}());
exports.StorybookDesignTokenPlugin = StorybookDesignTokenPlugin;
function isImageExtension(filename) {
    return (filename.endsWith('.jpeg') ||
        filename.endsWith('.png') ||
        filename.endsWith('.gif'));
}
