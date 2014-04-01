var	Enermy = cc.Sprite.extend({
	ctor: function(gameLayer) {
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/obj2.png' );
        this. setScale	(0.1);
        this.vy = 1;
	},
	update: function(dt){
		var pos = this.getPosition();
		/*
		if(this.getPosition().y>580){
			this.vy =-2;
		};
			
		if (this.getPosition().y<50) {
			this.vy =2;
		};
		this.setPosition( new cc.Point( pos.x,pos.y+this.vy) );
		*/

		//var x = Math.abs(this.gameLayer.player.getPosition().x-this.Enermy.getPosition().x);
		//var y = Math.abs(this.gameLayer.player.getPosition().y-this.Enermy.getPosition().y);
		if(this.gameLayer.player.getPosition().x<=this.getPosition().x){
			if ((this.gameLayer.player.getPosition().x==this.getPosition().x)&&(this.gameLayer.player.getPosition().y<this.getPosition().y)) {
				this.setPosition( new cc.Point( pos.x,pos.y-this.vy) );
			}
			else if ((this.gameLayer.player.getPosition().x==this.getPosition().x)&&(this.gameLayer.player.getPosition().y>this.getPosition().y)) {
				this.setPosition( new cc.Point( pos.x,pos.y+this.vy) );
			}
			else if ((this.gameLayer.player.getPosition().y==this.getPosition().y)&&(this.gameLayer.player.getPosition().x<this.getPosition().x)) {
				this.setPosition( new cc.Point( pos.x-this.vy,pos.y) );
			}
			else if ((this.gameLayer.player.getPosition().y==this.getPosition().y)&&(this.gameLayer.player.getPosition().x>this.getPosition().x)) {
				this.setPosition( new cc.Point(  pos.x+this.vy,pos.y) )
			}
			else if (this.gameLayer.player.getPosition().y<this.getPosition().y) {
				this.setPosition( new cc.Point( pos.x-this.vy,pos.y-this.vy) );
			}
			else if (this.gameLayer.player.getPosition().y>this.getPosition().y) {
				this.setPosition( new cc.Point( pos.x-this.vy,pos.y+this.vy) );
			};
			
		}
		else if(this.gameLayer.player.getPosition().x>=this.getPosition().x){
			if ((this.gameLayer.player.getPosition().y==this.getPosition().y)&&(this.gameLayer.player.getPosition().x<this.getPosition().x)) {
				this.setPosition( new cc.Point( pos.x-this.vy,pos.y) );
			}
			else if ((this.gameLayer.player.getPosition().y==this.getPosition().y)&&(this.gameLayer.player.getPosition().x>this.getPosition().x)) {
				this.setPosition( new cc.Point(  pos.x+this.vy,pos.y) );
			}
			else if (this.gameLayer.player.getPosition().y<this.getPosition().y) {
				this.setPosition( new cc.Point( pos.x+this.vy,pos.y-this.vy) );
			}
			else if (this.gameLayer.player.getPosition().y>this.getPosition().y) {
				this.setPosition( new cc.Point( pos.x+this.vy,pos.y+this.vy) );
			};
			
		};

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
				/*
				var animation = new cc.Animation.create();
			animation.addSpriteFrameWithFile( 'image/Sun1.png' );
			this.setScale(10);
			animation.addSpriteFrameWithFile( 'image/obj2.png' );
			
			animation.setDelayPerUnit(2);
			var movingAction = cc.Animate.create( animation );
			this.runAction( movingAction );
			*/
			this.setPosition( new cc.Point( 600, 600));
			};
			
		};
		//this.initWithFile( 'image/obj2.png' );
		this.setScale(0.1);
	}

}
)