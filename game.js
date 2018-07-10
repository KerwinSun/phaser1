var config = {

    type:Phaser.AUTO,
    width: 1800,
    height:800,
    physics:{

        default:'arcade',
        arcade:{

            gravity: {y:0}

        }


    }
};

var game = new Phaser.Game(config);
game.scene.add('Level_Generic', Level_Generic, true, { x: 100, y: 100});
