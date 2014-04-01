var	BackG = cc.Sprite.extend({
	ctor: function() {
		
		this._super();
       	this.initWithFile( 'image/back1.gif' );
        this. setScale	(2);
        this.vx=0;
        
        var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile( 'image/back12.gif' );
		animation.addSpriteFrameWithFile( 'image/back1.gif' );
		animation.setDelayPerUnit( 0.2 );
		var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
		//var movingAction = cc.Animate.create( animation );
		this.runAction( movingAction );
	},
		right: function(){
        	var pos = this.getPosition();
        	this.vx = -6;
        	//this.setPosition( new cc.Point( pos.x-this.vx,pos.y) );
		 },
		left : function(){
			var pos = this.getPosition();
        	this.vx = 6;
        	//this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		},

		stop: function(){
			
			this.vx = 0;
		 },
		 update: function(dt) { 
		 	var pos = this.getPosition();
		 	//console.log(pos.x)
		 	if((pos.x<=790)&&(pos.x>=120)){
		 		//this.setPosition( new cc.Point( pos.x,pos.y) );
				this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		 	}
		 	else if((pos.x>=790)&&(this.vx<0)){
		 		this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		 	}
		 	else if((pos.x<=120)&&(this.vx>0)){
		 		this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		 	};
		 	
		 }

}
)