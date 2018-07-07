class Example2 extends Phaser.Scene {

    constructor(){

        super({key:"Example2"})

    }

    create(){

        this.text = this.add.text(0,0,"Welcome to example 2", { font:"40px Impact"})

    }

}