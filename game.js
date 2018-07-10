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
game.scene.add('Level_Generic1', Level_Generic, true, { x: 100, y: 100});
game.scene.add('Level_Generic2', Level_Generic, true, { x: 500, y: 100});
game.scene.add('Level_Generic3', Level_Generic, true, { x: 800, y: 100});
game.scene.add('Level_Generic4', Level_Generic, true, { x: 1200, y: 100});