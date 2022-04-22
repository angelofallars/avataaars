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
var Stubble = /** @class */ (function (_super) {
    __extends(Stubble, _super);
    function Stubble() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    Stubble.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/Stubble', transform: 'translate(49.000000, 72.000000)', fillOpacity: '0.3', fillRule: 'nonzero' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'M 27.918819,26.000218 C 25.90377,31.67814 27.602146,37.81209 27.353603,43.68365 c 0.264228,12.71055 -1.496616,26.14886 4.322852,37.97546 5.865602,12.8092 16.743513,23.64627 30.090075,28.4252 11.75958,3.86073 24.71945,5.57838 36.71286,1.69372 9.87378,-2.14914 18.797,-7.56169 25.62915,-14.95775 9.87613,-10.33622 15.15588,-24.42734 15.78185,-38.60801 0.84756,-9.87913 1.02338,-19.81699 1.03427,-29.72111 -1.42517,-5.194162 -2.52279,3.93878 -2.80124,5.8425 -1.49195,12.40034 1.11675,25.78296 -5.09968,37.22059 -3.71236,5.12674 -9.78295,10.37728 -16.46671,9.7778 -5.86784,-1.27389 -3.5261,-8.77196 -7.82395,-11.79651 -5.32901,-5.08685 -13.46411,-6.13252 -20.43699,-4.85157 -4.76459,2.16818 -9.35882,-1.07324 -14.2575,-0.45859 -7.3085,7.4e-4 -16.15546,3.20264 -17.98756,11.11829 -0.64786,6.83206 -7.588308,7.56757 -12.172472,4.04026 C 38.138543,76.63866 33.676718,71.41089 32.391666,65.11992 28.673371,52.36787 32.479778,38.56179 27.918819,26.000218 Z M 83.99963,71.00006 c 6.11249,4.14945 14.74782,-1.08253 20.29971,4.41374 4.73016,4.88844 5.60113,13.25387 0.95575,18.49424 -3.10413,5.38437 -11.18695,10.32074 -15.73712,3.8972 -5.79757,-4.13913 -11.38461,0.61621 -16.15914,3.21317 -5.83486,-0.20894 -10.07224,-5.43817 -12.51413,-10.28003 -3.36995,-6.81465 0.59021,-16.90361 8.52477,-18.01974 4.84373,-0.43019 10.28274,1.16347 14.63016,-1.71858 z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Stubble', fill: '#331B0C', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    Stubble.optionValue = 'Stubble';
    return Stubble;
}(React.Component));
exports.default = Stubble;
