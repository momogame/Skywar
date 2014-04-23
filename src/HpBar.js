var HpBar = cc.Sprite.extend({
	ctor: function( gameLayer ) {
		this._super();
		this.gameLayer = gameLayer;
        this.initWithFile( 'image/Hpbar.png' );
        this.scale = 0.8;
        this. setScale( this.scale );
	},
	update: function( dt ) { 
		this.scale = this.scale-0.2;
		var pos = this.gameLayer.player.getPosition();
		
		if (this.scale <= 0.01) {
			this.setScaleX	( this.scale );
			this.gameLayer.createBoom( pos );
			this.gameLayer.removeChild( this.gameLayer.player );
			this.gameLayer.endGame();
		}
		else if ( this.scale > 0.01 ) {
			this.setScaleX	( this.scale );
		};

		/*
		var randomX = 450+(Math.random()*400);
		var randomY = 300+(Math.random()*300);
		console.log(randomX);
		console.log(randomY);
		this.gameLayer.enermy.setPosition( new cc.Point( randomX , randomY));
		*/
	},
	setHp: function(){
		this.scale += 0.2
		this.setScaleX(this.scale);
	}
}
)