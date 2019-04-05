var config = {

    type:Phaser.AUTO,
    width: 1900,
    height:800,
    physics:{

        default:'arcade',
        arcade:{

            gravity: {y:0}

        }


    }
};
//change this to generate more lvls
maxlvl = 8;
var game = new Phaser.Game(config);


var xstep = game.config.width/maxlvl;
var xpos = xstep/2 -100;

for(var i = 0; i < maxlvl; i++){


    var sceneName = 'lvl' + i;
    game.scene.add(sceneName, Level_Generic, true, { x: xpos, y: 100});
 asdljq liwe
 q wek ;
	 we ;lqkw ;qke ;
	 
	 qw	ek	qwe if )(
}


/*
    game.scene.add('lvl0', Level_Generic, true, { x: 100, y: 100});
    game.scene.add('lvl1', Level_Generic, true, { x: 400, y: 100});
    game.scene.add('lvl2', Level_Generic, true, { x: 800, y: 100});
    game.scene.add('lvl3', Level_Generic, true, { x: 1200, y: 100});
    levels = ['lvl0','lvl1','lvl2','lvl3']

*/