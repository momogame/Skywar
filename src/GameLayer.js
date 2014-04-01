var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.state = GameLayer.STATES.FRONT;
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.back = new BackG();
        this.back.setPosition( new cc.Point( 800 / 2, 600 / 2 ) );
        this.addChild( this.back, 1 );
        this.back.scheduleUpdate();

        this.player = new Player();
        this.player.setPosition( new cc.Point( 800 / 2, 600 / 2 ) );
        this.addChild( this.player, 2);
        this.player.scheduleUpdate();
        
        
        this.enermy = new Enermy(this);
        this.enermy.setPosition( new cc.Point( 600, 600 / 2 ) );
        this.addChild( this.enermy, 3);
        this.enermy.scheduleUpdate();

        this.i=0;
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel,3 );

        this.setKeyboardEnabled( true );
        return true;
    },
    onKeyDown: function( e ) {
       // console.log( 'Up: ' + e );
        if (e==38) {
            //console.log( 'Up: ' + e );
            this.player.up();
        }
        else if (e==40) {
             //console.log( 'down: ' + e );
            this.player.down();
        }
        else if (e==39) {
            //console.log( 'right: ' + e );
            this.player.right();
            this.back.right();
        }
        else if (e==37) {
            // console.log( 'left: ' + e );
            this.player.left();
            this.back.left();
        }
        else if (e==32) {
            this.Shoot = new ammo(this);
            this.Shoot.setPosition( new cc.Point( this.player.getPosition().x,this.player.getPosition().y) );
            this.addChild( this.Shoot, 1 );
            this.Shoot.scheduleUpdate(); 

        };
            
        
    },
    onKeyUp: function( e ) {
            this.player.stop();
            this.back.stop();

    },
    endGame: function() {
        
       
        if(this.state == GameLayer.STATES.FRONT){
            this.over = new over();
            this.over.setPosition( new cc.Point( 800 / 2, 600 / 2 ) );
            this.addChild( this.over, 5 );
        }
         this.state = GameLayer.STATES.DEAD;
        
        this.player.stopplayer();


        
        }
    }
);

GameLayer.STATES = {
    FRONT: 1,
    STARTED: 2
};

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    },

});



