class Level_Generic extends Phaser.Scene {

    constructor() {

        super();

    }

    preload(){



        //allows for file system run
        this.load.crossOrigin = false;

        //preload assets images
        this.load.image(this.scene.key + 'ball','assets/ball.png');
        this.load.image(this.scene.key + 'cat','assets/cat.PNG');

    }

    create(data){



        //set up camera and background
        this.cameras.main.setBackgroundColor('rgba(255,255,255,1)');
        this.cameras.main.x = data.x;
        this.cameras.main.y = data.y;
        this.cameras.main.width = 200;
        this.cameras.main.height = 200;
        //useful vars to track
        this.gameActive = true;

        //record location where entity travelled
        this.trace = [];
        this.graphics = this.add.graphics(100, 100);
        this.graphics.lineStyle(5, 0xFF00FF);
        console.log(this)

        //add ball entity/ cat entity/ background entity
        this.cat = this.physics.add.image(20, 20, this.scene.key + 'cat');
        this.ball = this.physics.add.image(100, 100, this.scene.key + 'ball');


        this.cat.scaleX = 0.2;
        this.cat.scaleY = 0.2;
        this.ball.scaleX = 0.5;
        this.ball.scaleY = 0.5;

        //add collision to ball
        this.physics.add.overlap(this.cat,this.ball, this.detect, null, this);

        //set key polls
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



    }

    update(delta){


        if(this.key_A.isDown){
            this.cat.x -= 6;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_D.isDown){
            this.cat.x += 6;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_S.isDown){
            this.cat.y += 6;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_W.isDown){
            this.cat.y -= 6;
            this.trace.push([this.cat.x,this.cat.y]);
        }

        //press spacebar to trace
        if(this.key_SPACE.isDown && this.gameActive){

            this.gameActive = false;
            //set up draw
            this.graphics.beginPath();
            this.graphics.moveTo(this.trace[0][0], this.trace[0][1]);
            console.log(this.timedEvent);
            this.timedEvent = this.time.addEvent({ delay: 10, callback: this.traceRoute, callbackScope: this, loop: true });

            //complete draw


        }

    }

    detect() {
        this.cat.x = 0;
        this.cat.y = 0;
    }

    traceRoute(){

        console.log("tracing")
        this.graphics.lineTo(this.trace[0][0],this.trace[0][1]);
        this.graphics.strokePath();
        this.trace.splice(0,1);
        if(this.trace.length < 1){

            this.timedEvent.destroy();

        }

    }

}