var Stage2 = cc.LayerColor.extend({
		ctor: function(){
		this._super();
		this.init();
        
	},
    init: function(){
		this._super();
		this.back = new BackG2();
        this.back.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
        this.addChild( this.back, 1 );
	}
}
);
var Stage2Screen = cc.Scene.extend({
	 ctor:function () {
        this._super();
        var layer = new Stage2();
        this.addChild(layer);
    }
});