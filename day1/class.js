var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myclass = /** @class */ (function () {
    function myclass(name, id) {
        this.name = name;
        this.id = id;
    }
    myclass.prototype.getName = function () {
        console.log(this.name + " and " + this.id);
    };
    return myclass;
}());
var myNewClass = /** @class */ (function (_super) {
    __extends(myNewClass, _super);
    function myNewClass(name, id, mobileNUmber, sub) {
        var _this = _super.call(this, name, id) || this;
        _this.mobileNUmber = mobileNUmber;
        _this.sub = sub;
        return _this;
    }
    return myNewClass;
}(myclass));
var result = new myNewClass("rankit", 24, 7974709574, "phy");
result.getName();
