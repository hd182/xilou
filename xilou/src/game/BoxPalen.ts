class BoxPalen extends eui.Component{
	private lab:eui.Label;
	public constructor() {
		super();
		this.skinName='boxSkin';
	}
	public get data():any{
		return this.lab.text;
	} 
	public set data(value:any){
		this.lab.text=value;
	}
	public get label(){
		return this.lab.text;
	}
	public set label(val:any){
		this.lab.text=val;
	}
}