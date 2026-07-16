
const config = {

    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    backgroundColor: "#87CEEB",

    scene:{

        preload,

        create,

        update

    }

}

const game = new Phaser.Game(config);

function preload(){

}

function create(){

    this.add.text(
        30,
        30,
        "Cidade em Evolução",
        {
            fontSize:"36px",
            color:"#000"
        }
    );

}

function update(){

}
