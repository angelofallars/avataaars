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
var Tanned = makeColor('Tanned', '#FD9841');
var Yellow = makeColor('Yellow', '#F8D25C');
var Pale = makeColor('Pale', '#FFDBB4');
var Light = makeColor('Light', '#EDB98A');
var Tan1 = makeColor('Tan1', '#E8A874');
var Tan2 = makeColor('Tan2', '#E0A06C');
var Tan3 = makeColor('Tan3', '#D99864');
var Tan4 = makeColor('Tan4', '#D49460');
var Brown = makeColor('Brown', '#D08B5B');
var DarkBrown = makeColor('DarkBrown', '#AE5D29');
var Black = makeColor('Black', '#614335');
var BackgroundColor = /** @class */ (function (_super) {
    __extends(BackgroundColor, _super);
    function BackgroundColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundColor.prototype.render = function () {
        return (React.createElement(options_1.Selector, { option: options_1.BackgroundColorOption, defaultOption: Light },
            React.createElement(Tanned, { maskID: this.props.maskID }),
            React.createElement(Yellow, { maskID: this.props.maskID }),
            React.createElement(Pale, { maskID: this.props.maskID }),
            React.createElement(Light, { maskID: this.props.maskID }),
            React.createElement(Tan1, { maskID: this.props.maskID }),
            React.createElement(Tan2, { maskID: this.props.maskID }),
            React.createElement(Tan3, { maskID: this.props.maskID }),
            React.createElement(Tan4, { maskID: this.props.maskID }),
            React.createElement(Brown, { maskID: this.props.maskID }),
            React.createElement(DarkBrown, { maskID: this.props.maskID }),
            React.createElement(Black, { maskID: this.props.maskID })));
    };
    return BackgroundColor;
}(React.Component));
exports.default = BackgroundColor;
