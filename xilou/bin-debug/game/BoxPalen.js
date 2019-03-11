var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BoxPalen = (function (_super) {
    __extends(BoxPalen, _super);
    function BoxPalen() {
        var _this = _super.call(this) || this;
        _this.skinName = 'boxSkin';
        return _this;
    }
    Object.defineProperty(BoxPalen.prototype, "data", {
        get: function () {
            return this.lab.text;
        },
        set: function (value) {
            this.lab.text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoxPalen.prototype, "label", {
        get: function () {
            return this.lab.text;
        },
        set: function (val) {
            this.lab.text = val;
        },
        enumerable: true,
        configurable: true
    });
    return BoxPalen;
}(eui.Component));
__reflect(BoxPalen.prototype, "BoxPalen");
//# sourceMappingURL=BoxPalen.js.map