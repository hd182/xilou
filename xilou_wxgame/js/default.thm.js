var egret = window.egret;
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/boxSkin.exml'] = window.boxSkin = (function (_super) {
	__extends(boxSkin, _super);
	function boxSkin() {
		_super.call(this);
		this.skinParts = ["lab"];
		
		this.height = 50;
		this.width = 50;
		this.elementsContent = [this._Rect1_i(),this.lab_i()];
	}
	var _proto = boxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.fillColor = 0xaddd52;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.horizontalCenter = 0;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	return boxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/beginGameSkin.exml'] = window.beginGameSkin = (function (_super) {
	__extends(beginGameSkin, _super);
	function beginGameSkin() {
		_super.call(this);
		this.skinParts = ["jiuBox","jiulist","ansBox","sorceText"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.jiuBox_i(),this.jiulist_i(),this.ansBox_i(),this.sorceText_i()];
	}
	var _proto = beginGameSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.jiuBox_i = function () {
		var t = new eui.Group();
		this.jiuBox = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 150;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		t.requestedColumnCount = 3;
		t.verticalGap = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect7_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect9_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.elementsContent = [this._Rect10_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	_proto.jiulist_i = function () {
		var t = new eui.List();
		this.jiulist = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 150;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 0;
		t.requestedColumnCount = 3;
		t.verticalGap = 0;
		return t;
	};
	_proto.ansBox_i = function () {
		var t = new eui.Group();
		this.ansBox = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.width = 600;
		t.y = 800;
		return t;
	};
	_proto.sorceText_i = function () {
		var t = new eui.Label();
		this.sorceText = t;
		t.right = 20;
		t.text = "100";
		t.top = 30;
		return t;
	};
	return beginGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/item/jiugeItmSkin.exml'] = window.jiugeItmSkin = (function (_super) {
	__extends(jiugeItmSkin, _super);
	function jiugeItmSkin() {
		_super.call(this);
		this.skinParts = ["q1","q2","q3"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this.q1_i(),this._Rect1_i(),this.q2_i(),this._Rect2_i(),this.q3_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = jiugeItmSkin.prototype;

	_proto.q1_i = function () {
		var t = new eui.Rect();
		this.q1 = t;
		t.ellipseHeight = 130;
		t.ellipseWidth = 130;
		t.fillAlpha = 0;
		t.fillColor = 0xff0000;
		t.height = 130;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 110;
		t.ellipseWidth = 110;
		t.fillColor = 0x000000;
		t.height = 110;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.q2_i = function () {
		var t = new eui.Rect();
		this.q2 = t;
		t.ellipseHeight = 90;
		t.ellipseWidth = 90;
		t.fillAlpha = 0;
		t.fillColor = 0xff0000;
		t.height = 90;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 70;
		t.ellipseWidth = 70;
		t.fillColor = 0x000000;
		t.height = 70;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 70;
		return t;
	};
	_proto.q3_i = function () {
		var t = new eui.Rect();
		this.q3 = t;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0;
		t.fillColor = 0xff0000;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 50;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x000000;
		t.height = 30;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xcccccc;
		t.height = 10;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 10;
		return t;
	};
	return jiugeItmSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/playSkin.exml'] = window.playSkin = (function (_super) {
	__extends(playSkin, _super);
	function playSkin() {
		_super.call(this);
		this.skinParts = ["mainGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.mainGroup_i()];
	}
	var _proto = playSkin.prototype;

	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 4;
		t.verticalGap = 4;
		return t;
	};
	return playSkin;
})(eui.Skin);