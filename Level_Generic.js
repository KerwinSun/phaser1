class Level_Generic extends Phaser.Scene {

    constructor() {

        super();

    }

    preload(){



        //allows for file system run
        this.load.crossOrigin = false;

        //preload assets images
        this.load.image(this.scene.key + 'exit','assets/exit.png');
        this.load.image(this.scene.key + 'player','assets/player.PNG');

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



        //add exit entity/ player entity/ background entity
        this.player = this.physics.add.image(20, 20, this.scene.key + 'player');
        this.exit = this.physics.add.image(100, 100, this.scene.key + 'exit');


        //record loplayerion where entity travelled
        this.trace = [[this.player.x,this.player.y]];
        this.graphics = this.add.graphics(100, 100);
        this.graphics.lineStyle(5, 0xFF00FF);
        console.log(this)

        this.player.scaleX = 0.5;
        this.player.scaleY = 0.5;
        this.exit.scaleX = 0.7;
        this.exit.scaleY = 0.7;

        //add collision to exit
        this.physics.add.overlap(this.player,this.exit, this.startTrace, null, this);

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
                this.player.x -= 6;
                this.trace.push([this.player.x, this.player.y]);
            }
            if (this.key_D.isDown) {
                this.player.x += 6;
                this.trace.push([this.player.x, this.player.y]);
            }
            if (this.key_S.isDown) {
                this.player.y += 6;
                this.trace.push([this.player.x, this.player.y]);
            }
            if (this.key_W.isDown) {
                this.player.y -= 6;
                this.trace.push([this.player.x, this.player.y]);
            }
        }
    }

    startTrace(){

        //set up draw

        if(this.gameActive) {
            this.graphics.beginPath();
            this.graphics.moveTo(this.player.x, this.player.y);
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

        this.player.x = this.trace[this.trace.length - 1][0];
        this.player.y = this.trace[this.trace.length - 1][1];
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