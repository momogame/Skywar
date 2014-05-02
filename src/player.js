var Player = cc.Sprite.extend({
	ctor: function(gamelayer) {
        this.gamelayer = gamelayer;
        this._super();
        this.initWithFile( 'image/player/p3.png' );
        this. setScale	(0.8);
        this.vy = 0;
        this.vx = 0;
        this.started = false;
        
    } ,
    update: function( dt ) { 
    	var pos = this.getPosition();
       
        if (pos.y < 25 ){
            this.setPosition( new cc.Point( pos.x, 50 ) );
        }
    	else if( pos.y > 575 ){
            this.setPosition( new cc.Point( pos.x,550) );
        }
        else if( pos.x > 750 ){
            this.setPosition( new cc.Point( 750 , pos.y ) );
        }
        else if( pos.x < 50 ){
            this.setPosition( new cc.Point( 50 , pos.y ) );
        }
    	else {
            this.setPosition( new cc.Point( pos.x + this.vx,pos.y ) );
            this.setPosition( new cc.Point( pos.x , pos.y + this.vy ) );
        };
    	
    	
    },
        
    up: function(){
    	var pos = this.getPosition();
      	this.vy = 5;
        this.initWithFile( 'image/player/p3.png' );

	},
	down: function(){
		var pos = this.getPosition();
    	this.vy = -5;
        this.initWithFile( 'image/player/p3.png' );
	},
	right: function(){
    	var pos = this.getPosition();
    	this.vx = 5;
        this.initWithFile( 'image/player/p4.png' );
	},
	left : function(){
		var pos = this.getPosition();
    	this.vx = -5;
        this.initWithFile( 'image/player/p2.png' );
	},

	stop: function(){
		this.vy = 0;
		this.vx = 0;
        this.initWithFile( 'image/player/p3.png' );
	},
	start: function() {
        this.started = true;
    },
    stopplayer: function() {
    this.started = false;
    }

})