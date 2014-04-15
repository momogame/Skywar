var ammo = cc.Sprite.extend({
	ctor: function( gameLayer ) {
        this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/ammo.png' );
        this. setScale( 0.5 );
	},
	update: function( dt ) { 
    	var pos = this.getPosition();
    	this.setPosition( new cc.Point( pos.x+5 , pos.y ) );
    	if(pos.x > 800)
            this.gameLayer.removeChild( this );
            //this.removeShoot();
            this.gameLayer.enermy.create( this );
    	}
    ,
    removeShoot: function ( ){
        this.gameLayer.removeChild( this );
    }
    }
)