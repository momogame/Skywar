var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.player = new Player();
        this.player.setPosition( new cc.Point( 800 / 2, 600 / 2 ) );
        this.addChild( this.player, 1 );
        this.player.scheduleUpdate();
        this.setKeyboardEnabled( true );
        

        return true;
    },
    onKeyDown: function( e ) {
        console.log( 'Up: ' + e );
        if (e==38) {
            console.log( 'Up: ' + e );
            this.player.up();
        };
        if (e==40) {
             console.log( 'down: ' + e );
            this.player.down();
        };
        if (e==39) {
            console.log( 'right: ' + e );
            this.player.right();
        };
        if (e==37) {
             console.log( 'left: ' + e );
            this.player.left();
        };
            
        
    },
    onKeyUp: function( e ) {
            this.player.stop();

    }
});


var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    },

});

