var Stage2 = cc.Layer.extend({
	init: function() {
        console.log("layer2");
        this.state = Stage2.STATES.FRONT;
        this._super( new cc.Color4B( 127 , 127 , 127 , 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        
        //this.crateEnermy();
        this.createBack();
        this.createPlayer();
        this.createCharacter();
        this.createHpBar();
        this.monNum = 0;
        this.mons = [];
        this.OverStatus = true;
        this.HpItemStatus = true;
        //this.crateEnermy2();

        this.Shoot = new ammo(this);
        this.Shoot.removeShoot();
        this.schedule( this.createMon,1,Infinity,0 );
        this.setKeyboardEnabled( true );
        return true;

         this.schedule( this.randomItem,5,Infinity,0 );
    },
    randomItem: function(){
            var random = Math.abs(Math.random()*5);
            console.log("Item"+random);
            if (random <= 1) {
                this.createItemHp(900,400);
            };
        },
    killMon: function( mon ) {
        this.removeChild( mon );
        for( var i=0;i<this.mons.length;i++ ) {
            if( this.mons[i].monID==mon.monID )
                this.mons.splice(i,1);
        }
        /*if(this.monNum>20){
            var director = cc.Director.getInstance();
            director.replaceScene(cc.TransitionFade.create(1.5, new Scene2()));
        }*/
    },
    createMon: function() {

        var random = Math.floor(Math.random()*2);
        var mon = null;
        if (this.OverStatus) {
            if( random == 0 )
            mon = new Enermy( this,this.monNum , random );
        else
            mon = new Enermy2( this,this.monNum , random );
            this.monNum++;
            random = Math.floor( Math.random()*400+100 );
            mon.setPosition( new cc.Point( 900 , random ) );
            this.mons.push(mon);
            this.addChild( this.mons[this.mons.length-1], 3 );
            this.mons[this.mons.length-1].scheduleUpdate();
        };
        
    },
    createBack: function(){
        this.back = new BackG2();
        this.back.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
        this.addChild( this.back, 1 );
        this.back.scheduleUpdate();
        

    },
    createPlayer: function(){
        this.player = new Player(this);
        this.player.setPosition( new cc.Point( 200, 600 / 2 ) );
        this.addChild( this.player, 2 );
        this.player.scheduleUpdate();
       
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
    createFireEnermy2: function( mon ){
        //for( var i=0;i<this.mons.length;i++ ) {
            //if( this.mons[i].type == 1 ) {
                var pos = mon.getPosition();
                for( var i=1;i<=3;i++ ) {
                    var efire = new Efire( this,i );
                    efire.setPosition( new cc.Point(pos.x,pos.y) );
                    this.addChild( efire,5 );
                    efire.scheduleUpdate();
                }
            //}
        //}
    },
    createItemHp: function( pos ){
        this.ItemHp = new ItemHp(this);
        this.ItemHp.setPosition( new cc.Point( pos.x ,  pos.y ) );
        this.addChild( this.ItemHp, 5 );
        this.ItemHp.scheduleUpdate();
        
    },
    createShootPlayer: function(){
        this.Shoot = new ammo(this);
        this.Shoot.setPosition( new cc.Point( this.player.getPosition().x , this.player.getPosition().y ) );
        this.addChild( this.Shoot, 1 );
        this.Shoot.scheduleUpdate(); 
        cc.AudioEngine.getInstance().playEffect( 'sound/Shoot1.mp3' );

    }
    ,
    onKeyDown: function( e ) {
        if (e == 78) {
            //var = Stage2Screen;
            var director = cc.Director.getInstance();
            director.replaceScene(cc.TransitionFade.create(1.5, new Scene2()));
        };
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
            this.createShootPlayer();

        };
       
            
        
    },
    onKeyUp: function( e ) {
            this.player.stop();
            this.back.stop();

    },
    endGame: function() {
         if(this.state == Stage2.STATES.FRONT){
            //this.enermy.unscheduleUpdate();

            //this.enermy2.unscheduleUpdate();
            this.OverStatus = false;
            //this.player.unscheduleUpdate();
            //this.Shoot.unscheduleUpdate();
            this.unscheduleUpdate();
            this.over = new over();
            this.over.setPosition( new cc.Point( 800 / 2 , 600 / 2 ) );
            this.addChild( this.over , 5 );
        }
        this.state = Stage2.STATES.DEAD;
        
        this.player.stopplayer();
        }
});
Stage2.STATES = {
    FRONT: 1,
    STARTED: 2
};

var Scene2 = cc.Scene.extend({
	 ctor:function () {
        console.log("Scene2");
        this._super();
        var layer = new Stage2();
        
        layer.init();
        this.addChild(layer);
    }
});