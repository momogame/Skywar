var	Enermy = cc.Sprite.extend({
	ctor: function(gameLayer) {
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/obj2.png' );
        this. setScale	(0.1);
        this.vy = 2;
	},
	update: function(dt){
		var pos = this.getPosition();
		if(this.getPosition().y>580){
			this.vy =-2;
		};
			
		if (this.getPosition().y<50) {
			this.vy =2;
		};
		this.setPosition( new cc.Point( pos.x,pos.y+this.vy) );
		/*
		if ((this.gameLayer.Shoot.getPosition.x<=pos.x+10)&&(this.gameLayer.Shoot.getPosition.x>=pos.x-10)) {
			if ((this.gameLayer.Shoot.getPosition.y<=pos.y+10)&&(this.gameLayer.Shoot.getPosition.y>=pos.y-10)){
				this.setPosition( new cc.Point( 600, 600 / 2 ));
			};
			
		};
		*/
	},
	create: function(Shoot){
		//console.log("2222");
		var pos = this.getPosition();
		this.Shoot = Shoot;
		//console.log(pos.x);
		//console.log(this.Shoot.getPosition().x);
		
		if ((this.Shoot.getPosition().x<=(pos.x+30))&&(this.Shoot.getPosition().x>=(pos.x-30))) {
			//console.log("11111");
			if ((this.Shoot.getPosition().y<=pos.y+30)&&(this.Shoot.getPosition().y>=pos.y-30)){
			//	console.log("33333");
				this.setPosition( new cc.Point( 600, 600));
			};
			
		};
	}

}
)