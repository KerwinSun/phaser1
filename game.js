var config = {

    type:Phaser.AUTO,
    width: 800,
    height:600,
    physics:{

        default:'arcade',
        arcade:{

            gravity: {y:0}

        }


    },

    scene:[ Level_Generic, Example1, Example2]
};

var game = new Phaser.Game(config);
