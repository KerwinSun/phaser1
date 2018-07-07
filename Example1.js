class Example1 extends Phaser.Scene {

    constructor() {

        super({key:"Example1"});

    }
    preload(){
        console.log("preload");
        this.load.image('ball','assets/ball.png');
        this.load.image('man','assets/man.jpg');

    }

    create(){

       this.ball = this.add.image(400,300,'ball');

        this.input.keyboard.on('keyup_D',function(event){

           this.ball.x += 10;

        }, this);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.input.on('pointerdown',function(event){

            this.ball.x = event.x;
            this.ball.y = event.y;

        }, this);

        this.input.keyboard.on('keyup',function(e){

            if(e.key == "2"){

                this.scene.start("Example2");

            }

        }, this)


    }

    update(delta){

        if(this.key_A.isDown){

            this.ball.x -= 1;

        }

    }
}