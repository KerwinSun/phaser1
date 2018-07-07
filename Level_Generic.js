class Level_Generic extends Phaser.Scene {

    constructor() {

        super({key:"Level_Generic"});

    }

    preload(){

        console.log("preload");
        this.load.image('ball','assets/ball.png');
        this.load.image('man','assets/man.png');
        this.load.image('cat','assets/cat.PNG');

    }

    create(){

        //record location where entity travelled
        this.trace = [];
        this.graphics = this.add.graphics(100, 100);
        this.graphics.lineStyle(5, 0xFF00FF);


        //add ball entity
        this.cat = this.physics.add.image(0, 0, 'cat');
        this.ball = this.physics.add.image(400,300,'ball');
        this.cat.scaleX = 0.2;
        this.cat.scaleY = 0.2;

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
            this.cat.x -= 3;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_D.isDown){
            this.cat.x += 3;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_S.isDown){
            this.cat.y += 3;
            this.trace.push([this.cat.x,this.cat.y]);
        }
        if(this.key_W.isDown){
            this.cat.y -= 3;
            this.trace.push([this.cat.x,this.cat.y]);
        }

        //press spacebar to trace
        if(this.key_SPACE.isDown){
            this.traceRoute(this.trace);
        }

    }

    detect() {
        this.cat.x = 0;
        this.cat.y = 0;
    }

    traceRoute(trace){

        this.graphics.beginPath();
        this.graphics.moveTo(0, 0);


        for (var i = 0; i < trace.length; i++) {

            this.graphics.lineTo(trace[i][0], trace[i][1]);

        }

        this.graphics.strokePath();
    }

}