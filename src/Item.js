var	ItemHp = cc.Sprite.extend({
	ctor: function( gameLayer ){
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/ItemHp.png' );
	},
	update: function( dt ) { 
		var pos = this.getPosition();
        var posItem = this.gameLayer.player.getPosition();
		if (pos.x <= posItem.x+20 && pos.x >= posItem.x-20) {
                if (pos.y <= posItem.y+20 && pos.y >= posItem.y-20) {
                    this.gameLayer.ItemHp.SetHpPoint();
                };
            };
	},
	SetHpPoint:function(){
		this.gameLayer.hpBar.setHp();
		this.gameLayer.removeChild(this);
	},
	
})