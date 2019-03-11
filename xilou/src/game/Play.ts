class Play extends eui.Component{
	private mainGroup:eui.Group;
	public constructor() {
		super();
		this.skinName='playSkin';
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}
	private init(){
		
		for(let i=0;i<16;i++){
			
			let box:any=new BoxPalen();
			// box.width=50;
			// box.height=50;
			// box.x=i*50+10*i;
			// box.fillColor=0xaddd52;
			box.data=i;
			this.mainGroup.addChild(box);
			// box.data=i;
			box.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.beginTap,this);
			box.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveTap,this);
			box.addEventListener(egret.TouchEvent.TOUCH_END,this.endTap,this);
		}
	}
	private beginTap(e:egret.TouchEvent){
		console.log(e);
	}
	private moveTap(e){
		console.log(e);
	}
	private endTap(e){
		console.log(e);
	}

}