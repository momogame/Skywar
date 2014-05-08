var missile =  cc.Sprite.extend({
	ctor : function( gameLayer ){
		console.log('xxxx');
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
		//console.log(this.gameLayer.mons.length-1)
       this.moveing();
        this.mon.create( this );

	},
	moveing : function(){
		this.pos = this.getPosition();
		this.posPlayer = this.mons[this.gameLayer.mons.length.getPosition()-1];
		if( posPlayer.x <= pos.x ){
			if (( posPlayer.x == pos.x ) && ( posPlayer.y < pos.y )) {
				this.setPosition( new cc.Point( pos.x,pos.y - this.vy ) );
			}
			else if (( posPlayer.x == pos.x ) && ( posPlayer.y > pos.y )) {
				this.setPosition( new cc.Point( pos.x,pos.y+this.vy) );
			}
			else if (( posPlayer.y == pos.y ) && ( posPlayer.x < pos.x )) {
				this.setPosition( new cc.Point( pos.x - this.vy , pos.y ) );
			}
			else if (( posPlayer.y == pos.y )&&( posPlayer.x > pos.x )) {
				this.setPosition( new cc.Point(  pos.x + this.vy,pos.y ) )
			}
			else if ( posPlayer.y < pos.y ) {
				this.setPosition( new cc.Point( pos.x - this.vy , pos.y - this.vy ));
			}
			else if ( posPlayer.y > pos.y ) {
				this.setPosition( new cc.Point( pos.x - this.vy , pos.y + this.vy ));
			};
			
		}
		else if( posPlayer.x >= pos.x ){
			if (( posPlayer.y == pos.y ) && (posPlayer.x < pos.x)) {
				this.setPosition( new cc.Point( pos.x - this.vy , pos.y ) );
			}
			else if (( posPlayer.y == pos.y ) && ( posPlayer.x > pos.x )) {
				this.setPosition( new cc.Point( pos.x + this.vy , pos.y ) );
			}
			else if ( posPlayer.y < pos.y ) {
				this.setPosition( new cc.Point( pos.x + this.vy , pos.y - this.vy ) );
			}
			else if ( posPlayer.y > pos.y ) {
				this.setPosition( new cc.Point( pos.x + this.vy , pos.y + this.vy ) );
			};
			
		};

	}
	})