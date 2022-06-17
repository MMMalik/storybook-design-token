"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var addons_1 = require("@storybook/addons");
var components_1 = require("@storybook/components");
var Panel_1 = require("./components/Panel");
var ADDON_ID = 'storybook-design-token';
var PANEL_ID = ADDON_ID + "/panel";
var PARAMETER_NAME = 'designToken';
addons_1.addons.register(ADDON_ID, function () {
    addons_1.addons.add(PANEL_ID, {
        type: addons_1.types.PANEL,
        title: 'Design Tokens',
        render: function (_a) {
            var _b = _a.active, active = _b === void 0 ? false : _b, key = _a.key;
            return (react_1.default.createElement(components_1.AddonPanel, { active: active, key: key },
                react_1.default.createElement(Panel_1.Panel, null)));
        },
        paramKey: PARAMETER_NAME
    });
});
