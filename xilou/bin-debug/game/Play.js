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
var Play = (function (_super) {
    __extends(Play, _super);
    function Play() {
        var _this = _super.call(this) || this;
        _this.skinName = 'playSkin';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Play.prototype.init = function () {
        for (var i = 0; i < 16; i++) {
            var box = new BoxPalen();
            // box.width=50;
            // box.height=50;
            // box.x=i*50+10*i;
            // box.fillColor=0xaddd52;
            box.data = i;
            this.mainGroup.addChild(box);
            // box.data=i;
            box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.beginTap, this);
            box.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveTap, this);
            box.addEventListener(egret.TouchEvent.TOUCH_END, this.endTap, this);
        }
    };
    Play.prototype.beginTap = function (e) {
        console.log(e);
    };
    Play.prototype.moveTap = function (e) {
        console.log(e);
    };
    Play.prototype.endTap = function (e) {
        console.log(e);
    };
    return Play;
}(eui.Component));
__reflect(Play.prototype, "Play");
//# sourceMappingURL=Play.js.map