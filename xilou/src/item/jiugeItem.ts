class jiugeItem extends eui.ItemRenderer{
	private colorList=[0xff0000,0x00ff00,0x0000ff,0xffffff];
	public q1:eui.Rect;
	public q2:eui.Rect;
	public q3:eui.Rect;

	public constructor() {
		super();
		this.skinName='jiugeItmSkin';
	}
	protected dataChanged() {
		// console.log()
		console.log('渲染更改了this.data:',this.data,this);
		// if(this.data.length>=3){
		// 	this.q1.fillColor=this.colorList[this.data[0].color];
		// 	this.q2.fillColor=this.colorList[this.data[1].color];
		// 	this.q3.fillColor=this.colorList[this.data[2].color];
		// }
		
		// let shp:egret.Shape= new egret.Shape();
		// shp.x=this.width/2;
		// shp.y=this.height/2;
		for(let i=0;i<this.data.length;i++){
			if(this.data[i].status){
				console.log('颜色：', this.colorList[this.data[i].color]);
				this[`q${3-i}`].fillColor=this.colorList[this.data[i].color];
				this[`q${3-i}`].fillAlpha=1;
				// shp.graphics.lineStyle( 10, this.colorList[this.data[i].color] );
				// shp.graphics.beginFill( 0xff0000, 0);
				// shp.graphics.drawCircle( 0, 0, 20*(i+1) );
				// shp.graphics.endFill();
				
			}else{
				this[`q${3-i}`].fillAlpha=0;
			}
			
		}
		// this.addChild(shp);
		
	}
}