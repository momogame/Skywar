var ammo = cc.Sprite.extend({
	ctor: function(gameLayer) {
        this.gameLayer=gameLayer;
		this._super();
        this.initWithFile( 'image/ammo.png' );
        this. setScale	(0.5);
	},
	update: function(dt) { 
    	var pos = this.getPosition();
    	this.setPosition( new cc.Point( pos.x+5,pos.y) );
    	//console.log(this.getPosition().x);
    	if(pos.x>800)
            this.gameLayer.removeChild(this);


            this.gameLayer.enermy.create(this);
               
        
    	
    	}
    }
    )