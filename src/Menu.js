var Stage2 = cc.Layer.extend({
	ctor: function(){
		this._super();
		this.init();
        console.log("5555");
	},
	init: function(){
		this._super();

        this.setTouchEnabled(true);
        this.setTouchMode(1);

        var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
        console.log("5555");
        var bg = cc.Sprite.create(s_menu_bg);
        bg.setPosition(cc.p(800/2, 600/2));
        console.log("5555");

        this.addChild(bg);

        this.setKeyboardEnabled( true );
        return true;
	},
	onTouchBegan:function(touch, event) {
        this.onPlay();
    },

    onPlay : function(){
        var director = cc.Director.getInstance();
        director.replaceScene(cc.TransitionFade.create(1.5, new StartScene()));
    }

});
var menuScene = cc.Scene.extend({
	 ctor:function () {
        this._super();
        var layer = new Stage2();
        console.log("5555");
        //layer.init();
        this.addChild(layer);
    }
});