var	BackG = cc.Sprite.extend({
	ctor: function() {
		this._super();
        this.initWithFile( 'image/back1.gif' );
        this. setScale	(2);
        this.vx=0;
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
		 	};
		 	if((pos.x>=790)&&(this.vx<0)){
		 		this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		 	};
		 	if((pos.x<=120)&&(this.vx>0)){
		 		this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
		 	};
		 	
		 }

}
)