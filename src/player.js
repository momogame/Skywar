var Player = cc.Sprite.extend({
	ctor: function() {
        this._super();
        this.initWithFile( 'image/h1.png' );
        this. setScale	(1);
        this.vy = 0;
        this.vx = 0;
        this.started = false;
    } ,
    update: function(dt) { 
    	var pos = this.getPosition();
    	if (pos.y<=550&&pos.x>=50) {this.setPosition( new cc.Point( pos.x, pos.y + this.vy ) );}
    	else if(pos.y>=550){this.setPosition( new cc.Point( pos.x,550) );};
    	
    	this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
    	
    	
    	},
        up: function(){
        	var pos = this.getPosition();
        	this.vy = 5;
		 },
		down: function(){
			var pos = this.getPosition();
        	this.vy = -5;
		},
		right: function(){
        	var pos = this.getPosition();
        	this.vx = 5;
		 },
		left : function(){
			var pos = this.getPosition();
        	this.vx = -5;
		},

		stop: function(){
			this.vy = 0;
			this.vx = 0;
		 },
		 start: function() {
        this.started = true;
    },
    stopplayer: function() {
    this.started = false;
    }

})