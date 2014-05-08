var missile = cc.Sprite.extend({
	ctor: function( gameLayer ){
		//console.log('xxxx');
		this.gameLayer = gameLayer;
		this._super();
		this.initWithFile( 'image/Missile/miss1.png' );
		
		var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'image/Missile/miss1.png' );
        animation.addSpriteFrameWithFile( 'image/Missile/miss2.png' );
        animation.addSpriteFrameWithFile( 'image/Missile/miss3.png' );
        animation.setDelayPerUnit( 0.2 ); 
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
        this.init();
        this.mon = this.gameLayer.mons[this.gameLayer.mons.length-1];
        console.log(this.mon.getPosition().x);
	},	
	update: function( dt ) { 
    	var pos = this.getPosition();
    	this.setPosition( new cc.Point( pos.x+5 , pos.y ) );
    	if(pos.x > 800)
            this.gameLayer.removeChild( this );
            //this.removeShoot();
            for( i=0;i<this.gameLayer.mons.length;i++ )
                this.gameLayer.mons[i].create( this );
    	}
    ,
    removeShoot: function ( ){
        this.gameLayer.removeChild( this );
    },
    
	})