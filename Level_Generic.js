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

        //add ball image
        this.cat = this.physics.add.image(0, 0, 'cat');
        this.ball = this.physics.add.image(400,300,'ball');
        this.physics.add.overlap(this.cat,this.ball, this.detect, null, this);



        this.cat.scaleX = 0.2;
        this.cat.scaleY = 0.2;

        //set key polls
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    }

    update(delta){


        if(this.key_A.isDown){
            this.cat.x -= 1;
        }
        if(this.key_D.isDown){
            this.cat.x += 1;
        }
        if(this.key_S.isDown){
            this.cat.y += 1;
        }
        if(this.key_W.isDown){
            this.cat.y -= 1;
        }

    }

    detect() {
        this.cat.x = 0;
        this.cat.y = 0;
    }

}