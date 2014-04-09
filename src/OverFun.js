var	over = cc.Sprite.extend({
	ctor: function() {
		this._super();
       	this.initWithFile( 'image/gameover.png' );
       	//this.setOpacity();
        this. setScale	( 0.2 );
	}
})