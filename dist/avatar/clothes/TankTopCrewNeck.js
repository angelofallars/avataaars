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
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Graphics_1 = require("./Graphics");
var TankTopCrewNeck = /** @class */ (function (_super) {
    __extends(TankTopCrewNeck, _super);
    function TankTopCrewNeck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        return _this;
    }
    TankTopCrewNeck.prototype.render = function () {
        var _a = this, path1 = _a.path1, mask1 = _a.mask1;
        return (React.createElement("g", { id: 'Clothing/Tank-Top-Crew-Neck', transform: 'translate(0.000000, 170.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'm 99.045632,29.219406 c -10.185725,0.681251 -20.216434,3.573703 -29.195633,8.431524 0,24.116358 0,48.232716 0,72.34907 41.433301,0 82.866601,0 124.299901,0 0,-24.114976 0,-48.229955 0,-72.344934 -8.68358,-4.697251 -18.34909,-7.563451 -28.18949,-8.360214 0.59332,9.54048 -7.97626,16.380645 -16.08944,19.42317 -13.7973,5.083614 -30.43871,4.233736 -42.70185,-4.313306 -4.79874,-3.483001 -8.686789,-9.00375 -8.123488,-15.18531 z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 }),
            React.createElement("g", { id: 'Shadowy', opacity: '0.599999964', strokeWidth: '1', fillRule: 'evenodd', mask: "url(#" + mask1 + ")", fillOpacity: '0.16', fill: '#000000' },
                React.createElement("g", { transform: 'translate(92.000000, 4.000000)', id: 'Hola-\uD83D\uDC4B\uD83C\uDFFC' },
                    React.createElement("ellipse", { cx: '40.5', cy: '27.8476251', rx: '39.6351047', ry: '26.9138272' }))),
            React.createElement(Graphics_1.default, { maskID: mask1 })));
    };
    TankTopCrewNeck.optionValue = 'TankTopCrewNeck';
    return TankTopCrewNeck;
}(React.Component));
exports.default = TankTopCrewNeck;
