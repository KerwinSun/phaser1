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
game.scene.add('lvl0', Level_Generic, true, { x: 50, y: 100});
game.scene.add('lvl1`', Level_Generic, true, { x: 300, y: 100});
game.scene.add('lvl2', Level_Generic, true, { x: 550, y: 100});
game.scene.add('lvl3', Level_Generic, true, { x: 800, y: 100});
currentLevel = 0;
levels = ['lvl0','lvl1','lvl2','lvl3']