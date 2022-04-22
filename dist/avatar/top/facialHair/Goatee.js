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
var Goatee = /** @class */ (function (_super) {
    __extends(Goatee, _super);
    function Goatee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    Goatee.prototype.render = function () {
        var _a = this, mask1 = _a.mask1, path1 = _a.path1;
        return (React.createElement("g", { id: 'Facial-Hair/Goatee', transform: 'translate(49.000000, 72.000000)' },
            React.createElement("defs", null,
                React.createElement("path", { d: 'm 54.713659,93.395282 c 0,0 4.519834,13.056928 8.750525,15.795528 8.632324,5.29033 26.863854,6.38253 38.857266,2.49787 8.71223,-4.65095 8.70011,-9.4941 11.67827,-14.489319 0.37528,-4.811949 1.29905,-9.258242 1.12585,-14.435848 0,0 -2.09464,-10.203423 -6.39249,-13.227973 -5.32901,-5.08685 -13.46411,-6.13252 -20.43699,-4.85157 -4.76459,2.16818 -9.35882,-1.07324 -14.2575,-0.45859 -7.3085,7.4e-4 -16.15546,3.20264 -17.98756,11.11829 -2.256163,3.883504 -2.569094,9.47375 -2.569094,9.47375 z M 83.99963,71.00006 c 6.11249,4.14945 14.74782,-1.08253 20.29971,4.41374 4.73016,4.88844 5.60113,13.25387 0.95575,18.49424 -3.10413,5.38437 -11.18695,10.32074 -15.73712,3.8972 -5.79757,-4.13913 -11.38461,0.61621 -16.15914,3.21317 -5.83486,-0.20894 -10.07224,-5.43817 -12.51413,-10.28003 -3.36995,-6.81465 0.59021,-16.90361 8.52477,-18.01974 4.84373,-0.43019 10.28274,1.16347 14.63016,-1.71858 z', id: path1 })),
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'Goatee', fill: '#331B0C', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
            React.createElement(Colors_1.default, { maskID: mask1 })));
    };
    Goatee.optionValue = 'Goatee';
    return Goatee;
}(React.Component));
exports.default = Goatee;
