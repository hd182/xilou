class beginGame extends eui.Component{
	private jiuBox:eui.Group;
	private ansBox:eui.Group;
	private shp0:egret.Shape;
	private shp1:egret.Shape;
	private shp2:egret.Shape;
	private ifstart=false;
	private colorList=[0xff0000,0x00ff00,0x0000ff,0xffffff];
	private jiugeData:any=[[],[],[],[],[],[],[],[],[]];
	private jsons;
	private hanldNum=0;
	private score=0;
	private sorceText:eui.Label;
	private jiulist:eui.List;
	private jiuListData:eui.ArrayCollection;
	private succerrRecord:any=[0,1,2];//成功记录
	public constructor() {
		super();
		this.skinName='beginGameSkin';
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
	}
	private init(){
		// this.ansBox
		// this.jiuBox.
		// 1、小
		this.sorceText.text=this.score.toString();
		this.jiulist.itemRenderer=jiugeItem;
		this.jiuListData=new eui.ArrayCollection(this.jiugeData);
		this.jiulist.dataProvider=this.jiuListData;
		let json=[{
			huan:2,
			type:1,
			color:[1,2]
		},{
			huan:2,
			type:1,
			color:[1,2]
		},{
			huan:1,
			type:1,
			color:[2]
		}];
		this.jsons=[
			[
				{
					status:true,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:false,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:true,
					color:2//0、红 1、绿 2、蓝 3、黑
				}
			],
			[
				{
					status:false,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:false,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:true,
					color:2//0、红 1、绿 2、蓝 3、黑
				}
			],
			[
				{
					status:true,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:true,
					color:0//0、红 1、绿 2、蓝 3、黑
				},{
					status:true,
					color:2//0、红 1、绿 2、蓝 3、黑
				}
			]
		];
		// for(let i=0;i<jsons.length;i++){
			
		// }
		// for(let j=0;j<3;j++){
			// let shp;
			
			
		// }
		this.randomInitQuanData();	
	}
	private randomInitQuanData(){
		let data=[];
		for(let i=0;i<3;i++){
			data[i]=[];
			for(let j=0;j<3;j++){
				let randomColor=this.score>20?Math.floor(Math.random()*4):Math.floor(Math.random()*3);
				if(j==2&&!data[i][0].status&&!data[i][1].status){
					data[i].push({
						status:true,
						color:randomColor
					});
				}else{
					data[i].push({
						status:Math.random()>0.5,
						color:randomColor
					});
				}
				
			}
		}
		this.jsons=data;
		this.initQuan(data);
	}
	private initQuan(data){
		for(let i=0;i<data.length;i++){
			this[`shp${i}`] = new egret.Shape();
			this[`shp${i}`].x =90*(i+1)+120*(i+0.5);
			this[`shp${i}`].y = this.jiuBox.y+this.jiuBox.height+120+20;

			this[`shp${i}`].graphics.lineStyle( 0,0xffffff );
			this[`shp${i}`].graphics.beginFill( 0xff0000, 0);
			this[`shp${i}`].graphics.drawCircle( 0, 0, 80 );
			this[`shp${i}`].graphics.endFill();
			for(let j=0;j<3;j++){
				
				if(data[i][j].status){
					this[`shp${i}`].graphics.lineStyle( 10, this.colorList[data[i][j].color] );
					this[`shp${i}`].graphics.beginFill( 0xff0000, 0);
					this[`shp${i}`].graphics.drawCircle( 0, 0, 20*(j+1) );
					this[`shp${i}`].graphics.endFill();
				}
			}
			this.addChild( this[`shp${i}`] );
			this[`shp${i}`].touchEnabled=true;
			this[`shp${i}`].addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startTap.bind(this,i),this);
			this[`shp${i}`].addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveTap.bind(this,i),this);
			this[`shp${i}`].addEventListener(egret.TouchEvent.TOUCH_END,this.endTap.bind(this,i),this);

		}
	}
	private setShpTouch(index,is){
		for(let i=0;i<3;i++){
			if(index!=i){
				this[`shp${i}`].touchEnabled=is;
			}
		}
	}
	private startTap(index,e:egret.TouchEvent){
		// console.log('开始',e,e.touchPointID);
		// if(){}
		// this.ifstart=this.shp.hitTestPoint( e.stageX, e.stageY )
		this.setShpTouch(index,false);

	}
	private moveTap(index,e:egret.TouchEvent){
		// console.log(index);
		// if(this.ifstart){
			// console.log('移动',e,e.touchPointID);
			this[`shp${index}`].x=e.stageX;
			this[`shp${index}`].y=e.stageY;
		// }
		
	}
	private endTap(index,e:egret.TouchEvent){
		// console.log('停止',e);
		let stageX=e.stageX,
			stageY=e.stageY;
			// console.log("this.stage:",this,this.stage);
		let leftB=(this.stage.stageWidth-600)/2,
			rightB=(this.stage.stageWidth-600)/2+600,
			bottomB=this.jiuBox.y+600,
			topB=this.jiuBox.y;
		if(stageX<rightB&&stageX>leftB&&stageY>topB&&stageY<bottomB){
			console.log('在这个范围内');
			let lie=Math.floor((stageX-leftB)/200)+1,
				hang=Math.floor((stageY-topB)/200)+1;
			// console.log(`这是在第${lie}列，第${hang}行,水平距离：${((lie-1+0.5)*200+leftB)-stageX},垂直距离：${((hang-1+0.5)*200+topB)-stageY},x:${stageX},y:${stageY},中心点水平距离：${(lie-1+0.5)*200+leftB},leftB:${leftB},中心点垂直距离：${(hang-1+0.5)*200+topB},topB:${topB}`);
			if(Math.abs(((lie-1+0.5)*200+leftB)-stageX)>50||Math.abs(((hang-1+0.5)*200+topB)-stageY)>50){
				// egret.Tween.get( this[`shp${index}`] )
				// .to({x:100,y:100},200);
				this.samePlace(index);
			}else{
				let jiugeIndex=(hang-1)*3+(lie-1);
				if(this.judePlace(index,jiugeIndex)){
					console.log('可以放入');
					
					this.jiugeData[jiugeIndex]=this.updataJiugeData(this.jsons[index],this.jiugeData[jiugeIndex]);
					let that=this;
					egret.Tween.get( this[`shp${index}`] )
					.to({x:(lie-1+0.5)*200+leftB,y:(hang-1+0.5)*200+topB},100).call(function(){
						// console.log('查看数据源：',that.jiuListData);
						that.jiuListData.replaceItemAt(that.jiugeData[jiugeIndex],jiugeIndex);
						that[`shp${index}`].touchEnabled=false;
						that[`shp${index}`].removeEventListener(egret.TouchEvent.TOUCH_BEGIN,that.startTap,that);
						that[`shp${index}`].removeEventListener(egret.TouchEvent.TOUCH_MOVE,that.moveTap,that);
						that[`shp${index}`].removeEventListener(egret.TouchEvent.TOUCH_END,that.endTap,that);
						that.removeChild(that[`shp${index}`]);
						that.setShpTouch(index,true);
						// that.judeRemove(jiugeIndex);
						that.returnZuoBiao(jiugeIndex);
						that.hanldNum++;
						that.succerrRecord.splice(that.succerrRecord.indexOf(index),1);
						if(that.hanldNum>=3){
							that.hanldNum=0;
							that.randomInitQuanData();
						}
						if(that.succerrRecord.length<=0){
							that.succerrRecord=[0,1,2];
						}
						if(that.judeFail()){

						}else{
							console.log('----------无可放--------------');
							let tips=new eui.Label;
							tips.text='没有可放的地方了';
							tips.textColor=0xffffff;
							tips.size=32;
							tips.width=500;
							tips.height=60;
							tips.x=(that.stage.width-tips.width)/2;
							tips.y=(that.stage.height-tips.height)/2;
							that.addChild(tips);
							// that.e
							setTimeout(function(){
								that.removeChild(tips);
							},3000);

						};
						// this[`shp${index}`].removeEventListener(egret.TouchEvent.bi,);
					});
					
					
				}else{
					this.samePlace(index);
				}
				
			}
			// if(){}
			// if()
		}else{
			// egret.Tween.get( this[`shp${index}`] )
			// .to({x:100,y:100},200);
			this.samePlace(index);
		}
	}
	// 还有可放的地方吗？
	private judeFail(){
		let ifs=false;
		 console.log('this.jiuListData.length字节：',this.jiuListData.length);
		for(let i=0;i<this.jiuListData.length;i++){
			for(let j=0;j<this.succerrRecord.length;j++){
			  if(this.judePlace(this.succerrRecord[j],i)){
				  ifs=true;
			  };
			}
			
		}
		return ifs;

	}
	// 回到原处
	private samePlace(index){
		// this[`shp${i}`].x = 100*(i*2+1);
		// 	this[`shp${i}`].y = 100*1;
		egret.Tween.get( this[`shp${index}`] )
		.to({x:90*(index+1)+120*(index+0.5),y:this.jiuBox.y+this.jiuBox.height+120+20},200)
		.call(()=>{
			this.setShpTouch(-1,true);
		});
	}
	// 是否可放 index:jsons数组下标 jiugeIndex：jiuge下标
	private judePlace(index,jiugeIndex){
		// console.log(index,jiugeIndex,this.jiugeData,this.jiugeData[jiugeIndex],this.jsons[index],this.jsons);
		// for(){}
		let relst=true;
		for(let i=0;i<this.jiugeData[jiugeIndex].length;i++){
			// if(this.jiugeData[i]){}
			if(this.jsons[index][i].status&&this.jiugeData[jiugeIndex][i].status){
				relst=false;
				break;
			}
		}
		return relst;
	}
	// 添加数据
	private updataJiugeData(jsons,jiuge){
		if(jiuge.length<1){
			jiuge=jsons;
		}else{
			for(let i=0;i<3;i++){
				if(jsons[i].status){
					jiuge[i]=jsons[i];
				}
			}
		}
		return jiuge;
	}
	private judeRemove(index){
		let typsJude1=[1,3,5,7];
		let typsJude2=[0,2,6,8];
		if(index==4){
			// 4条可能中心位置
			console.log('横向',this.judeColorSame(index+1,index,index-1));
			console.log('竖向',this.judeColorSame(index-3,index,index+3));
			console.log('斜向1',this.judeColorSame(index-4,index,index+4));
			console.log('斜向2',this.judeColorSame(index-2,index,index+2));
			// if(){}

		}else if(typsJude1.indexOf(index)!=-1){
			// 横竖2条可能，边线中点
			// 判断横向是否有可消除的
			switch(index){
				case 1:
					let data11=this.judeColorSame(index-1,index,index+1);
					let data12=this.judeColorSame(index,index+3,index+6);
					console.log('横向',data11);
					console.log('竖向',data12);
					// if(data11&&data11.length>0){
					// 	this.clearYuan(index-1,index,index+1,data11);
					// }
					// if(data12&&data12.length>0){
					// 	this.clearYuan(index,index+3,index+6,data12);
					// }
					break;
				case 3:
					let data31=this.judeColorSame(index,index+1,index+2);
					let data32=this.judeColorSame(index-3,index,index+3);
					console.log('横向',data31);
					console.log('竖向',data32);
					// console.log('横向',this.judeColorSame(index,index+1,index+2));
					// console.log('竖向',this.judeColorSame(index-3,index,index+3));

					break;
				case 5:
					console.log('横向',this.judeColorSame(index,index-1,index-2));
					console.log('竖向',this.judeColorSame(index-3,index,index+3));
					break;
				case 7:
					console.log('横向',this.judeColorSame(index-1,index,index+1));
					console.log('竖向',this.judeColorSame(index,index-3,index-6));
					break;
			}
			
		}else if(typsJude2.indexOf(index)!=-1){
			// 横竖斜3条可能，四角
			switch(index){
				case 0:
					console.log('横向',this.judeColorSame(index,index+1,index+2));
					console.log('竖向',this.judeColorSame(index,index+3,index+6));
					console.log('斜向',this.judeColorSame(index,index+4,index+8));
					break;
				case 2:
					console.log('横向',this.judeColorSame(index,index-1,index-2));
					console.log('竖向',this.judeColorSame(index,index+3,index+6));
					console.log('斜向',this.judeColorSame(index,index+2,index+4));
					break;
				case 6:
					console.log('横向',this.judeColorSame(index,index+1,index+2));
					console.log('竖向',this.judeColorSame(index,index-3,index-6));
					console.log('斜向',this.judeColorSame(index,index-2,index-4));
					break;
				case 8:
					console.log('横向',this.judeColorSame(index,index-1,index-2));
					console.log('竖向',this.judeColorSame(index,index-3,index-6));
					console.log('斜向',this.judeColorSame(index,index-4,index-8));
					break;
			}
		}
	}
	// 合并坐标和可消除的颜色
	private returnZuoBiao(index){
		let typsJude1=[1,3,5,7];
		let typsJude2=[0,2,6,8];
		let indexArr=[];
		let dataJson=[];
		if(index==4){
			// 4条可能中心位置
			// let data1=this.judeColorSame(index+1,index,index-1);
			// let data2=this.judeColorSame(index-3,index,index+3);
			// let data3=this.judeColorSame(index-4,index,index+4);
			// let data4=this.judeColorSame(index-2,index,index+2);
			this.mergeData([this.judeColorSame(index+1,index,index-1),this.judeColorSame(index-3,index,index+3),this.judeColorSame(index-4,index,index+4),this.judeColorSame(index-2,index,index+2)]);
			// console.log('横向',this.judeColorSame(index+1,index,index-1));
			// console.log('竖向',this.judeColorSame(index-3,index,index+3));
			// console.log('斜向1',this.judeColorSame(index-4,index,index+4));
			// console.log('斜向2',this.judeColorSame(index-2,index,index+2));

			// if(){}

		}else if(typsJude1.indexOf(index)!=-1){
			// 横竖2条可能，边线中点
			// 判断横向是否有可消除的
			switch(index){
				case 1:
					// let data11=this.judeColorSame(index-1,index,index+1);
					// let data12=this.judeColorSame(index,index+3,index+6);
					this.mergeData([this.judeColorSame(index-1,index,index+1),this.judeColorSame(index,index+3,index+6)]);
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
					let data31=this.judeColorSame(index,index+1,index+2);
					let data32=this.judeColorSame(index-3,index,index+3);
					console.log('横向',data31);
					console.log('竖向',data32);
					this.mergeData([data31,data32]);
					// console.log('横向',this.judeColorSame(index,index+1,index+2));
					// console.log('竖向',this.judeColorSame(index-3,index,index+3));

					break;
				case 5:
					// console.log('横向',this.judeColorSame(index,index-1,index-2));
					// console.log('竖向',this.judeColorSame(index-3,index,index+3));
					this.mergeData([this.judeColorSame(index,index-1,index-2),this.judeColorSame(index-3,index,index+3)]);
					break;
				case 7:
					// console.log('横向',this.judeColorSame(index-1,index,index+1));
					// console.log('竖向',this.judeColorSame(index,index-3,index-6));
					this.mergeData([this.judeColorSame(index-1,index,index+1),this.judeColorSame(index,index-3,index-6)]);
					break;
			}
			
		}else if(typsJude2.indexOf(index)!=-1){
			// 横竖斜3条可能，四角
			switch(index){
				case 0:
					// console.log('横向',this.judeColorSame(index,index+1,index+2));
					// console.log('竖向',this.judeColorSame(index,index+3,index+6));
					// console.log('斜向',this.judeColorSame(index,index+4,index+8));
					this.mergeData([this.judeColorSame(index,index+1,index+2),this.judeColorSame(index,index+3,index+6),this.judeColorSame(index,index+4,index+8)]);
					break;
				case 2:
					// console.log('横向',this.judeColorSame(index,index-1,index-2));
					// console.log('竖向',this.judeColorSame(index,index+3,index+6));
					// console.log('斜向',this.judeColorSame(index,index+2,index+4));
					this.mergeData([this.judeColorSame(index,index-1,index-2),this.judeColorSame(index,index+3,index+6),this.judeColorSame(index,index+2,index+4)]);
					break;
				case 6:
					// console.log('横向',this.judeColorSame(index,index+1,index+2));
					// console.log('竖向',this.judeColorSame(index,index-3,index-6));
					// console.log('斜向',this.judeColorSame(index,index-2,index-4));
					this.mergeData([this.judeColorSame(index,index+1,index+2),this.judeColorSame(index,index-3,index-6),this.judeColorSame(index,index-2,index-4)]);
					break;
				case 8:
					// console.log('横向',this.judeColorSame(index,index-1,index-2));
					// console.log('竖向',this.judeColorSame(index,index-3,index-6));
					// console.log('斜向',this.judeColorSame(index,index-4,index-8));
					this.mergeData([this.judeColorSame(index,index-1,index-2),this.judeColorSame(index,index-3,index-6),this.judeColorSame(index,index-4,index-8)]);
					break;
			}
		}
		
	}
	private mergeData(arrdata){
		let colorData=[];
		let indexData=[];
		for(let i=0;i<arrdata.length;i++){
			if(arrdata[i].colorarr&&arrdata[i].colorarr.length>0){
				colorData=colorData.concat(arrdata[i].colorarr);
				colorData = colorData.filter(function(element,index,self){
					return self.indexOf(element) === index;
				});
				indexData=indexData.concat(arrdata[i].indexarr);
				indexData = indexData.filter(function(element,index,self){
					return self.indexOf(element) === index;
				});
			}
		}
		console.log('可消除的数据:',indexData,colorData);
		if(indexData.length>0){
			this.clearYuan(indexData,colorData);
		}
		
	}
	private clearYuan(indexarr,arr){
		// let data1=this.jiugeData[index1];
		// let data2=this.jiugeData[index2];
		// let data3=this.jiugeData[index3];
		// let indexArr=[index];
		let fenshu=0;
		for(let i=0;i<arr.length;i++){
			for(let j=0;j<indexarr.length;j++){
				let currentData=this.jiugeData[indexarr[j]];
				console.log('循环的哪一个的数据',currentData,j);
				for(let x=0;x<currentData.length;x++){
					let nowData=currentData[x];
					console.log('循环小环',nowData,x);
					if(nowData&&nowData.status&&nowData.color==arr[i]){
						fenshu++;
						console.log('更改地方：',this.jiugeData[indexarr[j]][x]);
						this.jiugeData[indexarr[j]][x].status=false;
						this.jiuListData.replaceItemAt(this.jiugeData[indexarr[j]],indexarr[j]);
					}
				}
				
			}
		}
		this.score+=fenshu;
		this.sorceText.text=this.score.toString();
	}
	// private 
	private judeColorSame(index1,index2,index3){
		if(this.jiugeData[index1].length<=0||this.jiugeData[index2].length<=0||this.jiugeData[index3].length<=0){
			console.log("没有数据");
			return false;
		}else{
			let data=[];
			let indexData=[];
			let data1=this.returnCurrentData(index1);
			let data2=this.returnCurrentData(index2);
			let data3=this.returnCurrentData(index3);
			for(let i=0;i<this.colorList.length;i++){
				if(data1[i]&&data2[i]&&data3[i]){
					data.push(i);
				}
			}
			if(data&&data.length>0){
				// console.log('满足条件可以消除',data);
				// this.clearYuan([index1,index2,index3],data);
				indexData[0]=index1;
				indexData[1]=index2;
				indexData[2]=index3;
				
			}
			return {colorarr:data,indexarr:indexData};
		}
	}
	private returnCurrentData(index){
		let currentData=this.jiugeData[index];
		let currentArr:any={};
		for(let i=0;i<currentData.length;i++){
			if(currentData[i]&&currentData[i].status){
				if(currentArr[currentData[i].color]){
					currentArr[currentData[i].color]=currentArr[currentData[i].color]+1;
				}else{
					currentArr[currentData[i].color]=1;
				}
				
			}
		}
		console.log('这时候里面的数据',currentArr);
		return currentArr;
	}
}