"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var react_1 = __importDefault(require("react"));
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var useTokenTabs_1 = require("../hooks/useTokenTabs");
var TokenTab_1 = require("./TokenTab");
var Panel = function () {
    var config = (0, api_1.useParameter)('designToken');
    var _a = (0, useTokenTabs_1.useTokenTabs)(config), activeCategory = _a.activeCategory, cardView = _a.cardView, setActiveCategory = _a.setActiveCategory, setCardView = _a.setCardView, styleInjections = _a.styleInjections, tabs = _a.tabs;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("style", null, styleInjections),
        react_1.default.createElement(components_1.ScrollArea, { vertical: true, horizontal: true },
            react_1.default.createElement(components_1.Tabs, { actions: { onSelect: function (id) { return setActiveCategory(id); } }, selected: activeCategory }, tabs.map(function (tab) {
                return (react_1.default.createElement("div", { key: tab.label, id: tab.label, title: tab.label },
                    react_1.default.createElement(TokenTab_1.TokenTab, { categories: tab.categories, viewType: cardView ? 'card' : 'table', showSearch: config === null || config === void 0 ? void 0 : config.showSearch })));
            }))),
        react_1.default.createElement(components_1.ActionBar, { key: "actionbar", actionItems: [
                {
                    onClick: function () {
                        setCardView(!cardView);
                    },
                    title: cardView ? 'Table View' : 'Card View',
                },
            ] })));
};
exports.Panel = Panel;
