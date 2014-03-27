var ammo = cc.Sprite.extend({
	ctor: function() {
		this._super();
        this.initWithFile( 'image/ammo.png' );
        this. setScale	(0.5);
	},
	update: function(dt) { 
    	var pos = this.getPosition();
    	if(pos.x>800){
    		this.removeAllChildrenWithCleanup(true);	
    	}
    	this.setPosition( new cc.Point( pos.x+5,pos.y) );

    	
    	
    	}
    }
    )