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
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var ShortHairShortSharp = /** @class */ (function (_super) {
    __extends(ShortHairShortSharp, _super);
    function ShortHairShortSharp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filter1 = lodash_1.uniqueId('react-filter-');
        _this.mask1 = lodash_1.uniqueId('react-mask-');
        _this.mask2 = lodash_1.uniqueId('react-mask-');
        _this.path1 = lodash_1.uniqueId('react-path-');
        _this.path2 = lodash_1.uniqueId('react-path-');
        return _this;
    }
    ShortHairShortSharp.prototype.render = function () {
        var _a = this, filter1 = _a.filter1, mask1 = _a.mask1, mask2 = _a.mask2, path1 = _a.path1, path2 = _a.path2;
        return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
            React.createElement("defs", null,
                React.createElement("rect", { id: path2, x: '0', y: '0', width: '264', height: '280' }),
                React.createElement("path", { d: 'm 94.251927,52.022115 c 0.123008,-0.0544 -0.182256,-0.0753 -0.915793,-0.0626 0.89153,-0.0018 1.196794,0.019 0.915793,0.0626 M 86.116978,36.301592 c -0.0021,-0.0196 0.01678,0.1511 0,0 M 193.55459,70.718894 c -0.26411,-3.316932 -0.52164,-6.567008 -1.30791,-9.807812 -0.62445,-2.575733 -1.47767,-5.033548 -2.48667,-7.491039 -0.60931,-1.484666 -2.03247,-3.523937 -2.19969,-5.12555 -0.16485,-1.57764 0.0553,-3.072635 0.31808,-4.909436 0.25503,-1.787561 -0.79922,-3.540763 -1.16598,-5.312126 -2.94971,-8.53674 -12.93092,-13.929382 -12.93092,-13.929382 -1.92724,-1.149175 -3.47796,-3.033723 -6.75191,-2.477824 -0.77394,0.151903 -1.96194,-0.378902 -3.02098,-0.534957 0,0 -2.39398,-0.453236 -3.37,-1.307165 -1.46724,-1.282845 -3.15048,-2.381039 -4.89192,-3.28227 -4.55683,-2.358038 -9.7539,-4.072062 -14.84399,-4.907531 -9.28523,-1.524189 -19.19523,-0.195342 -28.19549,2.219387 -4.47843,1.201534 -8.98714,2.72637 -13.146619,4.742964 -3.990037,1.280869 -7.323687,5.118392 -10.361052,6.165964 -7.253738,1.425517 -18.568803,-7.06233 -18.134027,-4.66188 0.173972,0.960519 0.46271,1.41637 0.923131,2.626194 0.869185,1.031202 4.606303,20.052803 9.138099,23.032175 1.520734,1.680657 2.070823,1.349903 0.76104,3.282594 -1.958787,2.889965 -3.610062,5.97171 -4.954499,9.171696 -3.528979,8.401665 -3.48764,17.864268 -3.257848,26.824424 0.08041,3.136816 0.214989,6.312182 0.709564,9.418871 0.213643,1.34472 -0.358271,3.873156 0.650393,4.870924 0.511734,0.506012 1.240812,0.788175 1.968208,0.586675 1.70948,-0.473616 1.12171,-1.73508 1.16141,-2.906163 0.199849,-5.883595 -0.06998,-11.088512 1.329297,-16.901162 1.033561,-4.294616 2.756163,-8.194984 4.98848,-12.035098 2.838593,-4.884206 5.90294,-9.173639 9.806719,-13.355844 0.917824,-0.983515 1.118346,-1.40044 2.349064,-1.471709 0.931954,-0.05378 2.295232,0.584407 3.20128,0.805342 1.99782,0.486898 3.99933,0.968289 6.03348,1.296127 3.73993,0.602873 7.44319,0.643366 11.21676,0.525124 7.42637,-0.232272 14.8847,-0.753185 22.08497,-2.623354 4.7819,-1.241703 9.02146,-3.470809 13.60183,-5.104817 0.0817,-0.02915 1.22971,-0.847131 1.4309,-0.813764 0.28093,0.04633 1.97696,1.825787 2.26327,2.049961 3.92055,7.064917 8.76379,11.39354 14.83187,13.223349 1.95509,1.470736 4.89327,2.181161 5.89016,4.095386 0.76877,1.476892 1.02784,3.484091 1.64824,5.06076 1.62739,4.135232 3.77661,7.991543 5.92582,11.886404 1.73135,3.138759 3.6252,5.880679 3.81765,9.467463 0.0669,1.248506 -1.12104,8.737605 1.77273,6.459903 0.42897,-0.337556 0.75855,-3.957528 0.94864,-4.60543 0.77114,-2.632748 1.04534,-5.381147 1.39457,-8.086136 0.69442,-5.379528 1.28398,-9.807717 0.83046,-15.225795', id: path1 }),
                React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                    React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                    React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                    React.createElement("feMerge", null,
                        React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                        React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("g", { id: 'Mask' }),
            React.createElement("g", { id: 'Top/Short-Hair/Short-Sharp', mask: "url(#" + mask2 + ")" },
                React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                    React.createElement(facialHair_1.default, null),
                    React.createElement("mask", { id: mask1, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path1 })),
                    React.createElement("use", { id: 'Short-Hair', stroke: 'none', fill: '#28354B', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
                    React.createElement(HairColor_1.default, { maskID: mask1 }),
                    this.props.children))));
    };
    ShortHairShortSharp.optionValue = 'ShortHairShortSharp';
    return ShortHairShortSharp;
}(React.Component));
exports.default = ShortHairShortSharp;
