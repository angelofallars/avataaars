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
var HeartsLarge = /** @class */ (function (_super) {
    __extends(HeartsLarge, _super);
    function HeartsLarge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeartsLarge.prototype.render = function () {
        return (React.createElement("g", { id: 'Eyes/HeartsLarge-\uD83D\uDE0D', transform: 'translate(0.000000, 8.000000)', fillOpacity: '0.85', fillRule: 'nonzero', fill: '#F74343' },
            React.createElement("path", { d: 'M 36.927083,8.05 C 33.99352,8.05 31.091286,10.326757 29.5,12.443731 27.902231,10.326757 25.00648,8.05 22.072917,8.05 15.760166,8.05 11.675,11.884218 11.675,16.837462 c 0,6.589035 5.073644,10.49945 10.397917,14.645771 1.901333,1.422136 5.497779,5.061132 5.941666,5.858308 0.443888,0.797175 2.421871,0.82526 2.970834,0 0.548963,-0.825261 4.037092,-4.436172 5.941666,-5.858308 C 42.248116,27.336912 47.325,23.426497 47.325,16.837462 47.325,11.884218 43.239834,8.05 36.927083,8.05 Z', id: 'Heart' }),
            React.createElement("path", { d: 'M 89.927083,8.05 C 86.99352,8.05 84.091286,10.326757 82.5,12.443731 80.902231,10.326757 78.00648,8.05 75.072917,8.05 68.760166,8.05 64.675,11.884218 64.675,16.837462 c 0,6.589035 5.073644,10.49945 10.397917,14.645771 1.901333,1.422136 5.497779,5.061132 5.941666,5.858308 0.443888,0.797175 2.421871,0.82526 2.970834,0 0.548963,-0.825261 4.037092,-4.436172 5.941666,-5.858308 C 95.248116,27.336912 100.325,23.426497 100.325,16.837462 100.325,11.884218 96.239834,8.05 89.927083,8.05 Z', id: 'Heart' })));
    };
    HeartsLarge.optionValue = 'HeartsLarge';
    return HeartsLarge;
}(React.Component));
exports.default = HeartsLarge;
