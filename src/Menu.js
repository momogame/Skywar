var menu = cc.Layer.extend({
	ctor: function(){
		this._super();
		this.init();
        
	},
	init: function(){
		this._super();

        this.setTouchEnabled(true);
        this.setTouchMode(1);

        var director = cc.Director.getInstance();
        var winsize = director.getWinSize();
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);
        
        var bg = cc.Sprite.create(s_menu_bg);
        bg.setPosition(cc.p(800/2, 600/2));

        var Logo1 = cc.Sprite.create(Lo_Sky1);
        Logo1.setPosition(cc.p(100, 300));

        var Logo2 = cc.Sprite.create(Lo_Sky2);
        Logo2.setPosition(cc.p(700, 300));

        cc.AudioEngine.getInstance().playMusic( 'sound/MenuSound.mp3', true );



        var textField = cc.LabelTTF.create("Click TO START ", "electroharmonix", 40);
        //textField.setAnchorPoint( cc.p( 0.5, 0.5));
        textField.setPosition( cc.p( 400, 50));
        textField.setColor( cc.WHITE );
        //textField.setOpacity(1);
       // textField.enableStroke(cc.c4b(238,37,37,255),3,true);

        var fadeIn = cc.FadeIn.create(1.0);
        var fadeOut = cc.FadeOut.create(1.0);
        var delay = cc.DelayTime.create(0.5);
        textField.runAction(cc.RepeatForever.create(cc.Sequence.create(fadeIn, delay, fadeOut)));
        this.addChild(textField,300);
        

        this.addChild(bg , 1);
        this.addChild( Logo1, 2 );
        this.addChild( Logo2, 2 );


        this.setKeyboardEnabled( true );
        return true;
	},
	onTouchBegan:function(touch, event) {
        cc.AudioEngine.getInstance().stopMusic();
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
        var layer = new menu();
        
        //layer.init();
        this.addChild(layer);
    }
});