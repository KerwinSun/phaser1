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



        //add ball entity/ cat entity/ background entity
        this.cat = this.physics.add.image(20, 20, this.scene.key + 'cat');
        this.ball = this.physics.add.image(100, 100, this.scene.key + 'ball');


        //record location where entity travelled
        this.trace = [[this.cat.x,this.cat.y]];
        this.graphics = this.add.graphics(100, 100);
        this.graphics.lineStyle(5, 0xFF00FF);
        console.log(this)

        this.cat.scaleX = 0.2;
        this.cat.scaleY = 0.2;
        this.ball.scaleX = 0.5;
        this.ball.scaleY = 0.5;

        //add collision to ball
        this.physics.add.overlap(this.cat,this.ball, this.startTrace, null, this);

        //set key polls
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update(delta){

        if(this.gameActive) {
            if (this.key_A.isDown) {
                this.cat.x -= 6;
                this.trace.push([this.cat.x, this.cat.y]);
            }
            if (this.key_D.isDown) {
                this.cat.x += 6;
                this.trace.push([this.cat.x, this.cat.y]);
            }
            if (this.key_S.isDown) {
                this.cat.y += 6;
                this.trace.push([this.cat.x, this.cat.y]);
            }
            if (this.key_W.isDown) {
                this.cat.y -= 6;
                this.trace.push([this.cat.x, this.cat.y]);
            }
        }
    }

    startTrace(){

        //set up draw

        if(this.gameActive) {
            this.graphics.beginPath();
            this.graphics.moveTo(this.cat.x, this.cat.y);
            this.timedEvent = this.time.addEvent({
                delay: 10,
                callback: this.traceRoute,
                callbackScope: this,
                loop: true
            });
        }
        this.gameActive = false;
    }

    traceRoute(){

        this.cat.x = this.trace[this.trace.length - 1][0];
        this.cat.y = this.trace[this.trace.length - 1][1];
        this.graphics.lineTo(this.trace[this.trace.length - 1][0],this.trace[this.trace.length - 1][1]);
        this.graphics.strokePath();
        this.trace.splice(this.trace.length - 1,1);
        if(this.trace.length < 1){

            this.timedEvent.destroy();
            this.nextLevel();
        }

    }

    nextLevel(){

        currentLevel += 1;
        this.scene.pause();
        this.scene.resume(levels[currentLevel]);


    }


}