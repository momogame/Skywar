var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.state = GameLayer.STATES.FRONT;
        this._super( new cc.Color4B( 127 , 127 , 127 , 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        
        this.crateEnermy();
        this.createBack();
        this.createPlayer();
        this.createCharacter();
        this.createHpBar();
        this.crateEnermy2();
        
        //this.enermy.scheduleUpdate();

        this.setKeyboardEnabled( true );
        return true;
    },
    crateEnermy: function(){
        this.enermy = new Enermy( this );
        this.enermy.setPosition( new cc.Point( 900 , 300 ) );
        this.addChild( this.enermy, 3 );
    },
    crateEnermy2: function(){
        this.enermy2 = new Enermy2( this );
        this.enermy2.setPosition( new cc.Point( 900 , 500    ) );
        this.addChild( this.enermy2, 3 );
    },
    createBack: function(){
        this.back = new BackG();
        this.back.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
        this.addChild( this.back, 1 );
        

    },
    createPlayer: function(){
        this.player = new Player(this);
        this.player.setPosition( new cc.Point( 800 / 2, 600 / 2 ) );
        this.addChild( this.player, 2 );
       
    },
    createCharacter: function(){
        this.i = 0;
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial' , 40 );
        this.scoreLabel.setPosition( new cc.Point( 750 , 550 ) );
        this.addChild( this.scoreLabel, 3 );
    },
    createHpBar: function(){
        this.hpBar = new HpBar(this);
        this.hpBar.setPosition( new cc.Point( 400 ,  550 ) );
        this.addChild( this.hpBar, 5 );
    },
    createBoom: function( pos ){
        this.Boom = new Boom(this);
        this.Boom.setPosition( new cc.Point( pos.x ,  pos.y ) );
        this.addChild( this.Boom, 5 );
        this.Boom.scheduleOnce  (this.Boom.update,0.75); 
    },
    createFireEnermy2: function(){
        var pos1 = this.enermy2.getPosition();
        this.Efire = new Efire(this, 1);
        this.Efire.setPosition( new cc.Point( pos1.x ,  pos1.y ) );
        this.addChild( this.Efire, 5 );
        this.Efire.scheduleUpdate();

        this.Efire2 = new Efire( this, 2 );
        this.Efire2.setPosition( new cc.Point( pos1.x ,  pos1.y ) );
        this.addChild( this.Efire2, 5 );
        this.Efire2.scheduleUpdate();

        this.Efire3 = new Efire(this , 3);
        this.Efire3.setPosition( new cc.Point( pos1.x ,  pos1.y ) );
        this.addChild( this.Efire3, 5 );
        this.Efire3.scheduleUpdate(); 
    },
    createItemHp: function( pos ){
        this.ItemHp = new ItemHp(this);
        this.ItemHp.setPosition( new cc.Point( pos.x ,  pos.y ) );
        this.addChild( this.ItemHp, 5 );
        this.ItemHp.scheduleUpdate();
        
    },
    onKeyDown: function( e ) {
        
        if (e == 38) {
            this.player.up();
        };
        if ( e == 40 ) {
            this.player.down();
        };
        if ( e == 39 ) {
            this.player.right();
            this.back.right();
        };
        if ( e == 37 ) {
            this.player.left();
            this.back.left();
        };
        if ( e == 32 ) {
            this.Shoot = new ammo(this);
            this.Shoot.setPosition( new cc.Point( this.player.getPosition().x , this.player.getPosition().y ) );
            this.addChild( this.Shoot, 1 );
            this.Shoot.scheduleUpdate(); 

        };
        if ( e == 80 ){
            if ( this.hpBar.scale == 0.8 ) {
                this.enermy.scheduleUpdate();
                this.enermy2.scheduleUpdate();

                this.player.scheduleUpdate();
                this.back.scheduleUpdate();
            };
            
        };
            
        
    },
    onKeyUp: function( e ) {
            this.player.stop();
            this.back.stop();

    },
    endGame: function() {
         if(this.state == GameLayer.STATES.FRONT){
            this.enermy.unscheduleUpdate();
            this.enermy2.unscheduleUpdate();
            this.player.unscheduleUpdate();
            this.Shoot.unscheduleUpdate();
            this.Efire.unscheduleUpdate();
            this.Efire2.unscheduleUpdate();
            this.Efire3.unscheduleUpdate();
            this.over = new over();
            this.over.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
            this.addChild( this.over , 5 );
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



