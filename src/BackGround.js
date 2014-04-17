var	BackG = cc.Sprite.extend({
	spriteSheet: null,
    runningAction: null,
    sprite: null,
	ctor: function() {
		
		this._super();
       	this.initWithFile( 'image/Back1.gif' );
       	this.setScale( 2 );
        this.vx = 0;
        //this.init();
	},init:function () {
        this._super();

        // create sprite sheet
        var s_runnerplist = "image/ee.plist";
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_runnerplist);
        this.spriteSheet = cc.SpriteBatchNode.create('image/BackG.png');
        this.addChild(this.spriteSheet);


        // init runningAction
        var animFrames = [];
        for (var i = 1; i < 6; i++) {
            var str = "back1-" + i + ".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }

        var animation = cc.Animation.create(animFrames, 0.1);
        this.runningAction = cc.RepeatForever.create(cc.Animate.create(animation));
        this.sprite = cc.Sprite.createWithSpriteFrameName("image/BackG.png");
        this.sprite.setPosition(cc.p(80, 85));
        this.sprite.runAction(this.runningAction);
        this.spriteSheet.addChild(this.sprite);
    },

	right: function(){
    	var pos = this.getPosition();
     	this.vx = -2;
        	//this.setPosition( new cc.Point( pos.x-this.vx,pos.y) );
	},
	left : function(){
		var pos = this.getPosition();
    	this.vx = 2;
        	//this.setPosition( new cc.Point( pos.x+this.vx,pos.y) );
	},

	stop: function(){
		this.vx = 0;
	},
	update: function(dt) { 
		var pos = this.getPosition();
		 	
	 	if(( pos.x<=790 ) && ( pos.x >= 120 )){
			this.setPosition( new cc.Point( pos.x + this.vx,pos.y ) );
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