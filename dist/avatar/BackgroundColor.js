"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var options_1 = require("../options");
function makeColor(name, color) {
    var ColorComponent = /** @class */ (function (_super) {
        __extends(ColorComponent, _super);
        function ColorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorComponent.prototype.render = function () {
            return (React.createElement("g", { id: "BGColor/\uD83D\uDC76\uD83C\uDFFD-02-Brown", mask: "url(#" + this.props.maskID + ")", fill: color },
                React.createElement("g", { transform: "translate(0.000000, 0.000000)", id: "Color" },
                    React.createElement("rect", { x: "0", y: "0", width: "264", height: "280" }))));
        };
        return ColorComponent;
    }(React.Component));
    var anyComponent = ColorComponent;
    anyComponent.displayName = name;
    anyComponent.optionValue = name;
    return anyComponent;
}
var Red = makeColor('Red', '#E35A5A');
var Orange = makeColor('Orange', '#FF974D');
var Yellow = makeColor('Yellow', '#FFCC65');
var Green = makeColor('Green', '#98FF65');
var Blue = makeColor('Blue', '#65C9FF');
var Purple = makeColor('Purple', '#E965FF');
var Cerulean = makeColor('Cerulean', '#6799CC');
var White = makeColor('White', '#E5E5E5');
var LightGray = makeColor('LightGray', '#999999');
var DarkGray = makeColor('DarkGray', '#585858');
var Black = makeColor('Black', '#262626');
var BackgroundColor = /** @class */ (function (_super) {
    __extends(BackgroundColor, _super);
    function BackgroundColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundColor.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.BackgroundColorOption, defaultOption: Blue },
            React.createElement(Red, { maskID: this.props.maskID }),
            React.createElement(Orange, { maskID: this.props.maskID }),
            React.createElement(Yellow, { maskID: this.props.maskID }),
            React.createElement(Green, { maskID: this.props.maskID }),
            React.createElement(Blue, { maskID: this.props.maskID }),
            React.createElement(Purple, { maskID: this.props.maskID }),
            React.createElement(Cerulean, { maskID: this.props.maskID }),
            React.createElement(White, { maskID: this.props.maskID }),
            React.createElement(LightGray, { maskID: this.props.maskID }),
            React.createElement(DarkGray, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID })));
    };
    return BackgroundColor;
}(React.Component));
exports.default = BackgroundColor;
