var	ItemHp = cc.Sprite.extend({
	ctor: function( gameLayer ){
		this.gameLayer = gameLayer;
		this._super();
        this.initWithFile( 'image/ItemHp.png' );
	}
})