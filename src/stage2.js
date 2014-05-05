var Stage2 = cc.Layer.extend({
	ctor: function(){
	this._super();
	this.init();
        
	},
    init: function(){
		this._super();
		this.back = new BackG2();
        this.back.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
        this.addChild( this.back, 1 );
        this.setKeyboardEnabled( true );
        return true;
	},
	onKeyDown: function( e ) {
		//console.log(e);
		if (e == 38) {
            //this.player.up();
        };
        if ( e == 40 ) {
            //this.player.down();
        };
        if ( e == 39 ) {
            //this.player.right();
            this.back.right();
        };
        if ( e == 37 ) {
            //this.player.left();
            this.back.left();
        };
	},
	nKeyUp: function( e ) {
            //this.player.stop();
            this.back.stop();

    },
});

var Scene2 = cc.Scene.extend({
	 ctor:function () {
        this._super();
        var layer = new Stage2();
        
        //layer.init();
        this.addChild(layer);
    }
});