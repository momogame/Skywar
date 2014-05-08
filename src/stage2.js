var Stage2 = cc.Layer.extend({
    
	init: function(i) {
        console.log("layer2");
        this.state = Stage2.STATES.FRONT;
        this._super( new cc.Color4B( 127 , 127 , 127 , 255 ) );
        this.setPosition( new cc.Point( 0 , 0 ) );
        this.i = i;
        //this.crateEnermy();
        this.createBack();
        this.createPlayer();
        this.createCharacter();
        this.createHpBar();
        this.monNum = 0;
        this.mons = [];
        this.OverStatus = true;
        this.HpItemStatus = true;
        this.missStatus = false;
        this.times = 60;
        this.createTime();
        
        //this.crateEnermy2();

        this.Shoot = new ammo(this);
        this.Shoot.removeShoot();
        this.schedule( this.createMon,1,Infinity,0 );
        this.schedule( this.randomItem,5,Infinity,0 );
        this.schedule( this.createCoin,3,Infinity,0 );
        //this.schedule( this.createStage,120,1,0 );
        this.setKeyboardEnabled( true );
        return true;
    },
    randomPosition: function(){
        return Math.random()*500;
    },
    createCoin : function(){
        if (this.OverStatus) {
        this.coin = new coin(this);
        this.coin.setPosition( new cc.Point( 900 ,this.randomPosition()) );
        this.addChild( this.coin, 1 );
        this.coin.scheduleUpdate();
    }
    },
    randomItem: function(){
            var random = Math.abs(Math.random()*5);
            //console.log("Item2    "+random);
            if (random <= 1) {
                this.createItemHp( 900 ,this.randomPosition());
            }
            /*
            else if (random <= 1.4) {
                this.createItemHp(900,randomPosition());
            };*/
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
            mon = new Enermy3( this,this.monNum , random );
        else
            mon = new Enermy4( this,this.monNum , random );
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
        //this.i = 0;
        this.scoreLabel = cc.LabelTTF.create( this.i , 'Arial' , 40 );
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
    createTime: function(){
       
        this.scoreLabel2 = cc.LabelTTF.create( this.times , 'Arial' , 40 );
        this.scoreLabel2.setPosition( new cc.Point( 50 , 550 ) );
        this.addChild( this.scoreLabel2, 3 );
    },
    setTime: function(){
        if (this.times>0) {
            this.times -=1;
        };
        this.scoreLabel2.setString( this.times );
    },
    createItemHp: function( x , y ){
 if (this.HpItemStatus) {
            this.ItemHp = new ItemHp(this);
            this.ItemHp.setPosition( new cc.Point( x ,  y ) );
            this.addChild( this.ItemHp, 5 );
            this.ItemHp.scheduleUpdate();
            this.HpItemStatus = false;
        };
        
        
    },
    createShootPlayer: function(){
        this.Shoot = new ammo(this);
        this.Shoot.setPosition( new cc.Point( this.player.getPosition().x , this.player.getPosition().y ) );
        this.addChild( this.Shoot, 1 );
        this.Shoot.scheduleUpdate(); 
        cc.AudioEngine.getInstance().playEffect( 'sound/Shoot1.mp3' );

    },
    showScoll: function(){

        var textField = cc.LabelTTF.create("You score : "+this.i, "electroharmonix", 80);
        //textField.setAnchorPoint( cc.p( 0.5, 0.5));
        textField.setPosition( cc.p( 400, 80));
        textField.setColor( cc.WHITE );
        this.addChild(textField,300);
    },
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
           if (this.OverStatus) {
                 this.createShootPlayer();
            };

        };
       
            
        
    },
    onKeyUp: function( e ) {
            this.player.stop();
            this.back.stop();

    },
    endGame: function() {
         if(this.state == Stage2.STATES.FRONT){
            //this.enermy.unscheduleUpdate();
             this.showScoll();
            //this.enermy2.unscheduleUpdate();
            this.OverStatus = false;
            this.coin.unscheduleUpdate();
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
	 ctor:function ( i ) {
        console.log("Scene2");
        this._super();
        var layer = new Stage2(  );
        console.log(i);
        layer.init(i);
        this.addChild(layer);
    }
});