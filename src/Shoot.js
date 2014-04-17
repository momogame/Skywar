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
            this.gameLayer.enermy2.create( this );
    	}
    ,
    removeShoot: function ( ){
        this.gameLayer.removeChild( this );
    },
    }
)

var Efire = cc.Sprite.extend({
    ctor: function( gameLayer , type ) {
        this.gameLayer = gameLayer;
        this._super();
        this.type = type;
        this.initWithFile( 'image/fireE.png' );
        this. setScale( 1 );
    },
    update: function( dt ) { 
        var pos = this.getPosition();
        this.CheckHitPlayer();
        
        if (this.type == 1) {
             this.setPosition( new cc.Point( pos.x-5 , pos.y ) );
        }
        else if (this.type == 2) {
             this.setPosition( new cc.Point( pos.x-5 , pos.y + 5 ) );
        }
        else if (this.type == 3) {
             this.setPosition( new cc.Point( pos.x-5 , pos.y - 5 ) );
        };
       
        if(pos.x < 0)
            this.gameLayer.removeChild( this );
    },
    CheckHitPlayer: function(){
        var pos = this.getPosition();
        var posPlayer = this.gameLayer.player.getPosition();
        
        // method for end game
        if ((( posPlayer.x+30 ) >= pos.x ) && ( posPlayer.x - 30 ) <= pos.x ) {
            if ((( posPlayer.y + 30 ) >= pos.y ) && ( posPlayer.y - 30 ) <= pos.y ) {
               
                this.gameLayer.hpBar.update();
                this.gameLayer.removeChild( this );
                
            };
    }
}
    })