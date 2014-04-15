var Boom = cc.Sprite.extend({
	ctor: function( gameLayer ){
		this.gameLayer = gameLayer;
		this._super();
		var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'image/B1.png' );
        animation.addSpriteFrameWithFile( 'image/B2.png' );
        animation.addSpriteFrameWithFile( 'image/B3.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.Animate.create( animation );
        this.runAction( movingAction );
        
	},
	
	update: function( dt ) { 
		this.gameLayer.removeChild( this );
	}
}
)