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
var beginGame = (function (_super) {
    __extends(beginGame, _super);
    function beginGame() {
        var _this = _super.call(this) || this;
        _this.ifstart = false;
        _this.colorList = [0xff0000, 0x00ff00, 0x0000ff, 0xffffff];
        _this.jiugeData = [[], [], [], [], [], [], [], [], []];
        _this.hanldNum = 0;
        _this.score = 0;
        _this.succerrRecord = [0, 1, 2]; //成功记录
        _this.skinName = 'beginGameSkin';
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    beginGame.prototype.init = function () {
        // this.ansBox
        // this.jiuBox.
        // 1、小
        this.sorceText.text = this.score.toString();
        this.jiulist.itemRenderer = jiugeItem;
        this.jiuListData = new eui.ArrayCollection(this.jiugeData);
        this.jiulist.dataProvider = this.jiuListData;
        var json = [{
                huan: 2,
                type: 1,
                color: [1, 2]
            }, {
                huan: 2,
                type: 1,
                color: [1, 2]
            }, {
                huan: 1,
                type: 1,
                color: [2]
            }];
        this.jsons = [
            [
                {
                    status: true,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: false,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: true,
                    color: 2 //0、红 1、绿 2、蓝 3、黑
                }
            ],
            [
                {
                    status: false,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: false,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: true,
                    color: 2 //0、红 1、绿 2、蓝 3、黑
                }
            ],
            [
                {
                    status: true,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: true,
                    color: 0 //0、红 1、绿 2、蓝 3、黑
                }, {
                    status: true,
                    color: 2 //0、红 1、绿 2、蓝 3、黑
                }
            ]
        ];
        // for(let i=0;i<jsons.length;i++){
        // }
        // for(let j=0;j<3;j++){
        // let shp;
        // }
        this.randomInitQuanData();
    };
    beginGame.prototype.randomInitQuanData = function () {
        var data = [];
        for (var i = 0; i < 3; i++) {
            data[i] = [];
            for (var j = 0; j < 3; j++) {
                var randomColor = this.score > 20 ? Math.floor(Math.random() * 4) : Math.floor(Math.random() * 3);
                if (j == 2 && !data[i][0].status && !data[i][1].status) {
                    data[i].push({
                        status: true,
                        color: randomColor
                    });
                }
                else {
                    data[i].push({
                        status: Math.random() > 0.5,
                        color: randomColor
                    });
                }
            }
        }
        this.jsons = data;
        this.initQuan(data);
    };
    beginGame.prototype.initQuan = function (data) {
        for (var i = 0; i < data.length; i++) {
            this["shp" + i] = new egret.Shape();
            this["shp" + i].x = 120 * (i * 2 + 1);
            this["shp" + i].y = this.jiuBox.y + this.jiuBox.height;
            this["shp" + i].graphics.lineStyle(0, 0xffffff);
            this["shp" + i].graphics.beginFill(0xff0000, 0);
            this["shp" + i].graphics.drawCircle(0, 0, 60);
            this["shp" + i].graphics.endFill();
            for (var j = 0; j < 3; j++) {
                if (data[i][j].status) {
                    this["shp" + i].graphics.lineStyle(10, this.colorList[data[i][j].color]);
                    this["shp" + i].graphics.beginFill(0xff0000, 0);
                    this["shp" + i].graphics.drawCircle(0, 0, 20 * (j + 1));
                    this["shp" + i].graphics.endFill();
                }
            }
            this.addChild(this["shp" + i]);
            this["shp" + i].touchEnabled = true;
            this["shp" + i].addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startTap.bind(this, i), this);
            this["shp" + i].addEventListener(egret.TouchEvent.TOUCH_MOVE, this.moveTap.bind(this, i), this);
            this["shp" + i].addEventListener(egret.TouchEvent.TOUCH_END, this.endTap.bind(this, i), this);
        }
    };
    beginGame.prototype.startTap = function (index, e) {
        // console.log('开始',e,e.touchPointID);
        // if(){}
        // this.ifstart=this.shp.hitTestPoint( e.stageX, e.stageY )
    };
    beginGame.prototype.moveTap = function (index, e) {
        console.log(index);
        // if(this.ifstart){
        // console.log('移动',e,e.touchPointID);
        this["shp" + index].x = e.stageX;
        this["shp" + index].y = e.stageY;
        // }
    };
    beginGame.prototype.endTap = function (index, e) {
        // console.log('停止',e);
        var stageX = e.stageX, stageY = e.stageY;
        console.log("this.stage:", this, this.stage);
        var leftB = (this.stage.stageWidth - 600) / 2, rightB = (this.stage.stageWidth - 600) / 2 + 600, bottomB = this.jiuBox.y + 600, topB = this.jiuBox.y;
        if (stageX < rightB && stageX > leftB && stageY > topB && stageY < bottomB) {
            console.log('在这个范围内');
            var lie = Math.floor((stageX - leftB) / 200) + 1, hang = Math.floor((stageY - topB) / 200) + 1;
            console.log("\u8FD9\u662F\u5728\u7B2C" + lie + "\u5217\uFF0C\u7B2C" + hang + "\u884C,\u6C34\u5E73\u8DDD\u79BB\uFF1A" + (((lie - 1 + 0.5) * 200 + leftB) - stageX) + ",\u5782\u76F4\u8DDD\u79BB\uFF1A" + (((hang - 1 + 0.5) * 200 + topB) - stageY) + ",x:" + stageX + ",y:" + stageY + ",\u4E2D\u5FC3\u70B9\u6C34\u5E73\u8DDD\u79BB\uFF1A" + ((lie - 1 + 0.5) * 200 + leftB) + ",leftB:" + leftB + ",\u4E2D\u5FC3\u70B9\u5782\u76F4\u8DDD\u79BB\uFF1A" + ((hang - 1 + 0.5) * 200 + topB) + ",topB:" + topB);
            if (Math.abs(((lie - 1 + 0.5) * 200 + leftB) - stageX) > 50 || Math.abs(((hang - 1 + 0.5) * 200 + topB) - stageY) > 50) {
                // egret.Tween.get( this[`shp${index}`] )
                // .to({x:100,y:100},200);
                this.samePlace(index);
            }
            else {
                var jiugeIndex_1 = (hang - 1) * 3 + (lie - 1);
                if (this.judePlace(index, jiugeIndex_1)) {
                    console.log('可以放入');
                    this.jiugeData[jiugeIndex_1] = this.updataJiugeData(this.jsons[index], this.jiugeData[jiugeIndex_1]);
                    var that_1 = this;
                    egret.Tween.get(this["shp" + index])
                        .to({ x: (lie - 1 + 0.5) * 200 + leftB, y: (hang - 1 + 0.5) * 200 + topB }, 100).call(function () {
                        console.log('查看数据源：', that_1.jiuListData);
                        that_1.jiuListData.replaceItemAt(that_1.jiugeData[jiugeIndex_1], jiugeIndex_1);
                        that_1["shp" + index].touchEnabled = false;
                        that_1["shp" + index].removeEventListener(egret.TouchEvent.TOUCH_BEGIN, that_1.startTap, that_1);
                        that_1["shp" + index].removeEventListener(egret.TouchEvent.TOUCH_MOVE, that_1.moveTap, that_1);
                        that_1["shp" + index].removeEventListener(egret.TouchEvent.TOUCH_END, that_1.endTap, that_1);
                        that_1.removeChild(that_1["shp" + index]);
                        // that.judeRemove(jiugeIndex);
                        that_1.returnZuoBiao(jiugeIndex_1);
                        that_1.hanldNum++;
                        that_1.succerrRecord.splice(that_1.succerrRecord.indexOf(index), 1);
                        if (that_1.hanldNum >= 3) {
                            that_1.hanldNum = 0;
                            that_1.randomInitQuanData();
                        }
                        if (that_1.succerrRecord.length <= 0) {
                            that_1.succerrRecord = [0, 1, 2];
                        }
                        if (that_1.judeFail()) {
                        }
                        else {
                            console.log('----------无可放--------------');
                            var tips_1 = new eui.Label;
                            tips_1.text = '没有可放的地方了';
                            tips_1.textColor = 0xffffff;
                            tips_1.size = 32;
                            tips_1.width = 500;
                            tips_1.height = 60;
                            tips_1.x = (that_1.stage.width - tips_1.width) / 2;
                            tips_1.y = (that_1.stage.height - tips_1.height) / 2;
                            that_1.addChild(tips_1);
                            // that.e
                            setTimeout(function () {
                                that_1.removeChild(tips_1);
                            }, 3000);
                        }
                        ;
                        // this[`shp${index}`].removeEventListener(egret.TouchEvent.bi,);
                    });
                }
                else {
                    this.samePlace(index);
                }
            }
            // if(){}
            // if()
        }
        else {
            // egret.Tween.get( this[`shp${index}`] )
            // .to({x:100,y:100},200);
            this.samePlace(index);
        }
    };
    // 还有可放的地方吗？
    beginGame.prototype.judeFail = function () {
        var ifs = false;
        console.log('this.jiuListData.length字节：', this.jiuListData.length);
        for (var i = 0; i < this.jiuListData.length; i++) {
            for (var j = 0; j < this.succerrRecord.length; j++) {
                if (this.judePlace(this.succerrRecord[j], i)) {
                    ifs = true;
                }
                ;
            }
        }
        return ifs;
    };
    // 回到原处
    beginGame.prototype.samePlace = function (index) {
        // this[`shp${i}`].x = 100*(i*2+1);
        // 	this[`shp${i}`].y = 100*1;
        egret.Tween.get(this["shp" + index])
            .to({ x: 100 * (index * 2 + 1), y: 100 }, 200);
    };
    // 是否可放 index:jsons数组下标 jiugeIndex：jiuge下标
    beginGame.prototype.judePlace = function (index, jiugeIndex) {
        // console.log(index,jiugeIndex,this.jiugeData,this.jiugeData[jiugeIndex],this.jsons[index],this.jsons);
        // for(){}
        var relst = true;
        for (var i = 0; i < this.jiugeData[jiugeIndex].length; i++) {
            // if(this.jiugeData[i]){}
            if (this.jsons[index][i].status && this.jiugeData[jiugeIndex][i].status) {
                relst = false;
                break;
            }
        }
        return relst;
    };
    // 添加数据
    beginGame.prototype.updataJiugeData = function (jsons, jiuge) {
        if (jiuge.length < 1) {
            jiuge = jsons;
        }
        else {
            for (var i = 0; i < 3; i++) {
                if (jsons[i].status) {
                    jiuge[i] = jsons[i];
                }
            }
        }
        return jiuge;
    };
    beginGame.prototype.judeRemove = function (index) {
        var typsJude1 = [1, 3, 5, 7];
        var typsJude2 = [0, 2, 6, 8];
        if (index == 4) {
            // 4条可能中心位置
            console.log('横向', this.judeColorSame(index + 1, index, index - 1));
            console.log('竖向', this.judeColorSame(index - 3, index, index + 3));
            console.log('斜向1', this.judeColorSame(index - 4, index, index + 4));
            console.log('斜向2', this.judeColorSame(index - 2, index, index + 2));
            // if(){}
        }
        else if (typsJude1.indexOf(index) != -1) {
            // 横竖2条可能，边线中点
            // 判断横向是否有可消除的
            switch (index) {
                case 1:
                    var data11 = this.judeColorSame(index - 1, index, index + 1);
                    var data12 = this.judeColorSame(index, index + 3, index + 6);
                    console.log('横向', data11);
                    console.log('竖向', data12);
                    // if(data11&&data11.length>0){
                    // 	this.clearYuan(index-1,index,index+1,data11);
                    // }
                    // if(data12&&data12.length>0){
                    // 	this.clearYuan(index,index+3,index+6,data12);
                    // }
                    break;
                case 3:
                    var data31 = this.judeColorSame(index, index + 1, index + 2);
                    var data32 = this.judeColorSame(index - 3, index, index + 3);
                    console.log('横向', data31);
                    console.log('竖向', data32);
                    // console.log('横向',this.judeColorSame(index,index+1,index+2));
                    // console.log('竖向',this.judeColorSame(index-3,index,index+3));
                    break;
                case 5:
                    console.log('横向', this.judeColorSame(index, index - 1, index - 2));
                    console.log('竖向', this.judeColorSame(index - 3, index, index + 3));
                    break;
                case 7:
                    console.log('横向', this.judeColorSame(index - 1, index, index + 1));
                    console.log('竖向', this.judeColorSame(index, index - 3, index - 6));
                    break;
            }
        }
        else if (typsJude2.indexOf(index) != -1) {
            // 横竖斜3条可能，四角
            switch (index) {
                case 0:
                    console.log('横向', this.judeColorSame(index, index + 1, index + 2));
                    console.log('竖向', this.judeColorSame(index, index + 3, index + 6));
                    console.log('斜向', this.judeColorSame(index, index + 4, index + 8));
                    break;
                case 2:
                    console.log('横向', this.judeColorSame(index, index - 1, index - 2));
                    console.log('竖向', this.judeColorSame(index, index + 3, index + 6));
                    console.log('斜向', this.judeColorSame(index, index + 2, index + 4));
                    break;
                case 6:
                    console.log('横向', this.judeColorSame(index, index + 1, index + 2));
                    console.log('竖向', this.judeColorSame(index, index - 3, index - 6));
                    console.log('斜向', this.judeColorSame(index, index - 2, index - 4));
                    break;
                case 8:
                    console.log('横向', this.judeColorSame(index, index - 1, index - 2));
                    console.log('竖向', this.judeColorSame(index, index - 3, index - 6));
                    console.log('斜向', this.judeColorSame(index, index - 4, index - 8));
                    break;
            }
        }
    };
    // 合并坐标和可消除的颜色
    beginGame.prototype.returnZuoBiao = function (index) {
        var typsJude1 = [1, 3, 5, 7];
        var typsJude2 = [0, 2, 6, 8];
        var indexArr = [];
        var dataJson = [];
        if (index == 4) {
            // 4条可能中心位置
            // let data1=this.judeColorSame(index+1,index,index-1);
            // let data2=this.judeColorSame(index-3,index,index+3);
            // let data3=this.judeColorSame(index-4,index,index+4);
            // let data4=this.judeColorSame(index-2,index,index+2);
            this.mergeData([this.judeColorSame(index + 1, index, index - 1), this.judeColorSame(index - 3, index, index + 3), this.judeColorSame(index - 4, index, index + 4), this.judeColorSame(index - 2, index, index + 2)]);
            // console.log('横向',this.judeColorSame(index+1,index,index-1));
            // console.log('竖向',this.judeColorSame(index-3,index,index+3));
            // console.log('斜向1',this.judeColorSame(index-4,index,index+4));
            // console.log('斜向2',this.judeColorSame(index-2,index,index+2));
            // if(){}
        }
        else if (typsJude1.indexOf(index) != -1) {
            // 横竖2条可能，边线中点
            // 判断横向是否有可消除的
            switch (index) {
                case 1:
                    // let data11=this.judeColorSame(index-1,index,index+1);
                    // let data12=this.judeColorSame(index,index+3,index+6);
                    this.mergeData([this.judeColorSame(index - 1, index, index + 1), this.judeColorSame(index, index + 3, index + 6)]);
                    // console.log('横向',data11);
                    // console.log('竖向',data12);
                    // if(data11&&data11.length>0){
                    // 	this.clearYuan(index-1,index,index+1,data11);
                    // }
                    // if(data12&&data12.length>0){
                    // 	this.clearYuan(index,index+3,index+6,data12);
                    // }
                    break;
                case 3:
                    var data31 = this.judeColorSame(index, index + 1, index + 2);
                    var data32 = this.judeColorSame(index - 3, index, index + 3);
                    console.log('横向', data31);
                    console.log('竖向', data32);
                    this.mergeData([data31, data32]);
                    // console.log('横向',this.judeColorSame(index,index+1,index+2));
                    // console.log('竖向',this.judeColorSame(index-3,index,index+3));
                    break;
                case 5:
                    // console.log('横向',this.judeColorSame(index,index-1,index-2));
                    // console.log('竖向',this.judeColorSame(index-3,index,index+3));
                    this.mergeData([this.judeColorSame(index, index - 1, index - 2), this.judeColorSame(index - 3, index, index + 3)]);
                    break;
                case 7:
                    // console.log('横向',this.judeColorSame(index-1,index,index+1));
                    // console.log('竖向',this.judeColorSame(index,index-3,index-6));
                    this.mergeData([this.judeColorSame(index - 1, index, index + 1), this.judeColorSame(index, index - 3, index - 6)]);
                    break;
            }
        }
        else if (typsJude2.indexOf(index) != -1) {
            // 横竖斜3条可能，四角
            switch (index) {
                case 0:
                    // console.log('横向',this.judeColorSame(index,index+1,index+2));
                    // console.log('竖向',this.judeColorSame(index,index+3,index+6));
                    // console.log('斜向',this.judeColorSame(index,index+4,index+8));
                    this.mergeData([this.judeColorSame(index, index + 1, index + 2), this.judeColorSame(index, index + 3, index + 6), this.judeColorSame(index, index + 4, index + 8)]);
                    break;
                case 2:
                    // console.log('横向',this.judeColorSame(index,index-1,index-2));
                    // console.log('竖向',this.judeColorSame(index,index+3,index+6));
                    // console.log('斜向',this.judeColorSame(index,index+2,index+4));
                    this.mergeData([this.judeColorSame(index, index - 1, index - 2), this.judeColorSame(index, index + 3, index + 6), this.judeColorSame(index, index + 2, index + 4)]);
                    break;
                case 6:
                    // console.log('横向',this.judeColorSame(index,index+1,index+2));
                    // console.log('竖向',this.judeColorSame(index,index-3,index-6));
                    // console.log('斜向',this.judeColorSame(index,index-2,index-4));
                    this.mergeData([this.judeColorSame(index, index + 1, index + 2), this.judeColorSame(index, index - 3, index - 6), this.judeColorSame(index, index - 2, index - 4)]);
                    break;
                case 8:
                    // console.log('横向',this.judeColorSame(index,index-1,index-2));
                    // console.log('竖向',this.judeColorSame(index,index-3,index-6));
                    // console.log('斜向',this.judeColorSame(index,index-4,index-8));
                    this.mergeData([this.judeColorSame(index, index - 1, index - 2), this.judeColorSame(index, index - 3, index - 6), this.judeColorSame(index, index - 4, index - 8)]);
                    break;
            }
        }
    };
    beginGame.prototype.mergeData = function (arrdata) {
        var colorData = [];
        var indexData = [];
        for (var i = 0; i < arrdata.length; i++) {
            if (arrdata[i].colorarr && arrdata[i].colorarr.length > 0) {
                colorData = colorData.concat(arrdata[i].colorarr);
                colorData = colorData.filter(function (element, index, self) {
                    return self.indexOf(element) === index;
                });
                indexData = indexData.concat(arrdata[i].indexarr);
                indexData = indexData.filter(function (element, index, self) {
                    return self.indexOf(element) === index;
                });
            }
        }
        console.log('可消除的数据:', indexData, colorData);
        if (indexData.length > 0) {
            this.clearYuan(indexData, colorData);
        }
    };
    beginGame.prototype.clearYuan = function (indexarr, arr) {
        // let data1=this.jiugeData[index1];
        // let data2=this.jiugeData[index2];
        // let data3=this.jiugeData[index3];
        // let indexArr=[index];
        var fenshu = 0;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < indexarr.length; j++) {
                var currentData = this.jiugeData[indexarr[j]];
                console.log('循环的哪一个的数据', currentData, j);
                for (var x = 0; x < currentData.length; x++) {
                    var nowData = currentData[x];
                    console.log('循环小环', nowData, x);
                    if (nowData && nowData.status && nowData.color == arr[i]) {
                        fenshu++;
                        console.log('更改地方：', this.jiugeData[indexarr[j]][x]);
                        this.jiugeData[indexarr[j]][x].status = false;
                        this.jiuListData.replaceItemAt(this.jiugeData[indexarr[j]], indexarr[j]);
                    }
                }
            }
        }
        this.score += fenshu;
        this.sorceText.text = this.score.toString();
    };
    // private 
    beginGame.prototype.judeColorSame = function (index1, index2, index3) {
        if (this.jiugeData[index1].length <= 0 || this.jiugeData[index2].length <= 0 || this.jiugeData[index3].length <= 0) {
            console.log("没有数据");
            return false;
        }
        else {
            var data = [];
            var indexData = [];
            var data1 = this.returnCurrentData(index1);
            var data2 = this.returnCurrentData(index2);
            var data3 = this.returnCurrentData(index3);
            for (var i = 0; i < this.colorList.length; i++) {
                if (data1[i] && data2[i] && data3[i]) {
                    data.push(i);
                }
            }
            if (data && data.length > 0) {
                // console.log('满足条件可以消除',data);
                // this.clearYuan([index1,index2,index3],data);
                indexData[0] = index1;
                indexData[1] = index2;
                indexData[2] = index3;
            }
            return { colorarr: data, indexarr: indexData };
        }
    };
    beginGame.prototype.returnCurrentData = function (index) {
        var currentData = this.jiugeData[index];
        var currentArr = {};
        for (var i = 0; i < currentData.length; i++) {
            if (currentData[i] && currentData[i].status) {
                if (currentArr[currentData[i].color]) {
                    currentArr[currentData[i].color] = currentArr[currentData[i].color] + 1;
                }
                else {
                    currentArr[currentData[i].color] = 1;
                }
            }
        }
        console.log('这时候里面的数据', currentArr);
        return currentArr;
    };
    return beginGame;
}(eui.Component));
__reflect(beginGame.prototype, "beginGame");
//# sourceMappingURL=beginGame.js.map