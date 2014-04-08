var HpBar = cc.Sprite.extend({
	ctor: function( gameLayer ) {
		this._super();
		this.gameLayer = gameLayer;
        this.initWithFile( 'image/Hpbar.png' );
        this.scale  = 0.8;
        this. setScale( this.scale );
	},
	update: function( dt ) { 
		this.scale = this.scale-0.2;
		
		
		if (this.scale <= 0.01) {
			this.setScaleX	( this.scale );
			this.gameLayer.endGame();
		}
		else if ( this.scale > 0.01 ) {
			this.setScaleX	( this.scale );
		};

		
		var randomX = Math.random()*800;
		var randomY = Math.random()*800;
		this.gameLayer.enermy.setPosition( new cc.Point( randomX , randomY));

	}
}
)