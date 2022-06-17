"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPreview = void 0;
var react_1 = __importDefault(require("react"));
var token_types_1 = require("../types/token.types");
var AnimationPresenter_1 = require("./presenter/AnimationPresenter");
var BorderPresenter_1 = require("./presenter/BorderPresenter");
var BorderRadiusPresenter_1 = require("./presenter/BorderRadiusPresenter");
var ColorPresenter_1 = require("./presenter/ColorPresenter");
var EasingPresenter_1 = require("./presenter/EasingPresenter");
var EmptyPresenter_1 = require("./presenter/EmptyPresenter");
var FontFamilyPresenter_1 = require("./presenter/FontFamilyPresenter");
var FontSizePresenter_1 = require("./presenter/FontSizePresenter");
var FontWeightPresenter_1 = require("./presenter/FontWeightPresenter");
var LineHeightPresenter_1 = require("./presenter/LineHeightPresenter");
var LetterSpacingPresenter_1 = require("./presenter/LetterSpacingPresenter");
var OpacityPresenter_1 = require("./presenter/OpacityPresenter");
var ShadowPresenter_1 = require("./presenter/ShadowPresenter");
var SpacingPresenter_1 = require("./presenter/SpacingPresenter");
var SvgPresenter_1 = require("./presenter/SvgPresenter");
var ImagePresenter_1 = require("./presenter/ImagePresenter");
var TokenPreview = function (_a) {
    var token = _a.token;
    var presenter = token.presenter;
    switch (presenter) {
        case token_types_1.TokenPresenter.ANIMATION:
            return react_1.default.createElement(AnimationPresenter_1.AnimationPresenter, { token: token });
        case token_types_1.TokenPresenter.BORDER:
            return react_1.default.createElement(BorderPresenter_1.BorderPresenter, { token: token });
        case token_types_1.TokenPresenter.BORDER_RADIUS:
            return react_1.default.createElement(BorderRadiusPresenter_1.BorderRadiusPresenter, { token: token });
        case token_types_1.TokenPresenter.COLOR:
            return react_1.default.createElement(ColorPresenter_1.ColorPresenter, { token: token });
        case token_types_1.TokenPresenter.EASING:
            return react_1.default.createElement(EasingPresenter_1.EasingPresenter, { token: token });
        case token_types_1.TokenPresenter.FONT_FAMILY:
            return react_1.default.createElement(FontFamilyPresenter_1.FontFamilyPresenter, { token: token });
        case token_types_1.TokenPresenter.FONT_SIZE:
            return react_1.default.createElement(FontSizePresenter_1.FontSizePresenter, { token: token });
        case token_types_1.TokenPresenter.FONT_WEIGHT:
            return react_1.default.createElement(FontWeightPresenter_1.FontWeightPresenter, { token: token });
        case token_types_1.TokenPresenter.GRADIENT:
            return react_1.default.createElement(ColorPresenter_1.ColorPresenter, { token: token });
        case token_types_1.TokenPresenter.LINE_HEIGHT:
            return react_1.default.createElement(LineHeightPresenter_1.LineHeightPresenter, { token: token });
        case token_types_1.TokenPresenter.LETTER_SPACING:
            return react_1.default.createElement(LetterSpacingPresenter_1.LetterSpacingPresenter, { token: token });
        case token_types_1.TokenPresenter.OPACITY:
            return react_1.default.createElement(OpacityPresenter_1.OpacityPresenter, { token: token });
        case token_types_1.TokenPresenter.SHADOW:
            return react_1.default.createElement(ShadowPresenter_1.ShadowPresenter, { token: token });
        case token_types_1.TokenPresenter.SPACING:
            return react_1.default.createElement(SpacingPresenter_1.SpacingPresenter, { token: token });
        case token_types_1.TokenPresenter.SVG:
            return react_1.default.createElement(SvgPresenter_1.SvgPresenter, { token: token });
        case token_types_1.TokenPresenter.IMAGE:
            return react_1.default.createElement(ImagePresenter_1.ImagePresenter, { token: token });
    }
    return react_1.default.createElement(EmptyPresenter_1.EmptyPresenter, null);
};
exports.TokenPreview = TokenPreview;
