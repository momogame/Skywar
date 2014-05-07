var	ItemHp = cc.Sprite.extend({
	ctor: function( gameLayer ){
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/ItemHp.png' );
        this.vx=0;
        this.vy = 0;
        this.randomPosition();
	},
	update: function( dt ) { 
		if (this.gameLayer.OverStatus) {
			var pos = this.getPosition();
		this.Right();
		this.setPosition( new cc.Point( pos.x+this.vx,pos.y+this.vy) );
        var posItem = this.gameLayer.player.getPosition();
		if (pos.x <= posItem.x+20 && pos.x >= posItem.x-20) {
                if (pos.y <= posItem.y+20 && pos.y >= posItem.y-20) {
                    this.gameLayer.ItemHp.SetHpPoint();
                    this.gameLayer.HpItemStatus = true;
                    console.log(this.gameLayer.HpItemStatus);
                };
            };
        if (pos.x<-10) {
        	this.gameLayer.removeChild(this);
        	this.gameLayer.HpItemStatus = true;
        };
        if (pos.y>600) {
        	this.gameLayer.removeChild(this);
        	this.gameLayer.HpItemStatus = true;
        };
         if (pos.y<0) {
        	this.gameLayer.removeChild(this);
        	this.gameLayer.HpItemStatus = true;
        };
		};
		
	},
	randomPosition: function(){
		var ran = Math.floor(Math.random()*10);
		if (ran <= 4) {
			this.Right();
			//this.up();
		}
		else if (ran <= 7) {
			this.Right();
			//this.down();
		}
		else if (ran <= 10) {
			this.Right();
		};
	},
	Right: function(){
		this.vx = -1;
	},
	left: function(){
		this.vx = 1;
	},
	up: function(){
		this.vy = -1;
	},
	down: function(){
		this.vy = 1;
	},
	SetHpPoint:function(){
		this.gameLayer.hpBar.setHp();
		this.gameLayer.removeChild(this);
	},
	
})

var	coin = cc.Sprite.extend({
		ctor: function( gameLayer ){
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/coin/coin1.png' );
         
         var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'image/coin/coin1.png' );
        animation.addSpriteFrameWithFile( 'image/coin/coin2.png' );
        animation.addSpriteFrameWithFile( 'image/coin/coin3.png' );
        animation.addSpriteFrameWithFile( 'image/coin/coin4.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
		},
		update: function( dt ) { 
			var pos = this.getPosition();
			var posItem = this.gameLayer.player.getPosition();
			if (this.gameLayer.OverStatus) {
				this.setPosition( new cc.Point( pos.x-1,pos.y) );
			if (pos.x<-20) {
				 this.gameLayer.removeChild(this);
			};
			if (pos.x <= posItem.x+20 && pos.x >= posItem.x-20) {
                if (pos.y <= posItem.y+20 && pos.y >= posItem.y-20) {
                   this.gameLayer.i +=50;
                   this.gameLayer.scoreLabel.setString( this.gameLayer.i );

                   this.gameLayer.removeChild(this);
                };
            };
			};
			
		},
		
	})