var	Enermy = cc.Sprite.extend({
	ctor: function(gameLayer) {
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/e1.png' );
        this. setScale	(0.5);
        this.vy = 1.5;
        var animation = new cc.Animation.create();
        animation.addSpriteFrameWithFile( 'image/e1.png' );
        animation.addSpriteFrameWithFile( 'image/e2.png' );
        animation.setDelayPerUnit( 0.2 );
        var movingAction = cc.RepeatForever.create( cc.Animate.create( animation ) );
        this.runAction( movingAction );
	},
	update: function( dt ){
		var pos = this.getPosition();
		var posPlayer = this.gameLayer.player.getPosition();
		this.check();
		
	},
	//this method for create new enermy1 if they dies.
	create: function( Shoot ){
		
		var pos = this.getPosition();
		this.Shoot = Shoot;
		
		if (( this.Shoot.getPosition().x <= ( pos.x + 30 )) && ( this.Shoot.getPosition().x >= ( pos.x - 30 ))) {
			// check hit codition
			if ((this.Shoot.getPosition().y <= pos.y + 30) && ( this.Shoot.getPosition().y >= pos.y - 30 )){

				this.gameLayer.createBoom( pos );
				//create eff boom
				this.gameLayer.Shoot.removeShoot();
				//remove shoot
				this.randomX = Math.random()*800;
				this.randomY = Math.random()*800;
				this.setPosition( new cc.Point( this.randomX, this.randomY));
				this.gameLayer.i +=1;

			this.gameLayer.scoreLabel.setString( this.gameLayer.i );
			};
			
		};
		
	},
	check: function(){
		var pos = this.getPosition();
		var posPlayer = this.gameLayer.player.getPosition();
		
		// method for end game
		if ((( posPlayer.x+50 ) >= pos.x ) && ( posPlayer.x - 50 ) <= pos.x ) {
			if ((( posPlayer.y + 40 ) >= pos.y ) && ( posPlayer.y - 40 ) <= pos.y ) {
				//this.gameLayer.endGame();
				this.gameLayer.hpBar.update();
			};
			
		}

		// method for check point to close to player.

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

}
)