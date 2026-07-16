
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
// ===============================
// MUNDO
// ===============================

const mundo = {

    dia: 1,

    hora: 8,

    minuto: 0,

    clima: "☀️ Sol"

};

const jogador = {

    dinheiro: 100,

    energia: 100,

    fome: 0,

    felicidade: 70,

    local: "Quarto"

};

let textoDia;
let textoHora;
let textoClima;
let textoDinheiro;
let textoEnergia;
let textoFome;
let textoFelicidade;
let textoLocal;
function preload(){

}

function create(){

    this.add.text(30,30,"Cidade em Evolução",{

        fontSize:"36px",

        color:"#000",

        fontStyle:"bold"

    });

    textoDia=this.add.text(30,100,"",{fontSize:"24px",color:"#000"});

    textoHora=this.add.text(30,140,"",{fontSize:"24px",color:"#000"});

    textoClima=this.add.text(30,180,"",{fontSize:"24px",color:"#000"});

    textoDinheiro=this.add.text(30,240,"",{fontSize:"24px",color:"#000"});

    textoEnergia=this.add.text(30,280,"",{fontSize:"24px",color:"#000"});

    textoFome=this.add.text(30,320,"",{fontSize:"24px",color:"#000"});

    textoFelicidade=this.add.text(30,360,"",{fontSize:"24px",color:"#000"});

    textoLocal=this.add.text(30,400,"",{fontSize:"24px",color:"#000"});

    atualizarHUD();

    this.time.addEvent({

        delay:1000,

        loop:true,

        callback:passarTempo

    });

}

function atualizarHUD(){

    textoDia.setText("📅 Dia: " + mundo.dia);

    textoHora.setText("🕒 Hora: " + String(mundo.hora).padStart(2,"0") + ":" + String(mundo.minuto).padStart(2,"0"));

    textoClima.setText("🌤️ Clima: " + mundo.clima);

    textoDinheiro.setText("💰 Dinheiro: R$ " + jogador.dinheiro);

    textoEnergia.setText("⚡ Energia: " + jogador.energia);

    textoFome.setText("🍔 Fome: " + jogador.fome);

    textoFelicidade.setText("😊 Felicidade: " + jogador.felicidade);

    textoLocal.setText("🏠 Local: " + jogador.local);

}

function passarTempo(){

    mundo.minuto += 10;

    if(mundo.minuto >= 60){

        mundo.minuto = 0;

        mundo.hora++;

    }

    if(mundo.hora >= 24){

        mundo.hora = 0;

        mundo.dia++;

    }

    atualizarHUD();

}
function atualizarHUD(){

    textoDia.setText("📅 Dia: " + mundo.dia);

    textoHora.setText("🕒 Hora: " + String(mundo.hora).padStart(2,"0") + ":" + String(mundo.minuto).padStart(2,"0"));

    textoClima.setText("🌤️ Clima: " + mundo.clima);

    textoDinheiro.setText("💰 Dinheiro: R$ " + jogador.dinheiro);

    textoEnergia.setText("⚡ Energia: " + jogador.energia);

    textoFome.setText("🍔 Fome: " + jogador.fome);

    textoFelicidade.setText("😊 Felicidade: " + jogador.felicidade);

    textoLocal.setText("🏠 Local: " + jogador.local);

}

function passarTempo(){

    mundo.minuto += 10;

    if(mundo.minuto >= 60){

        mundo.minuto = 0;

        mundo.hora++;

    }

    if(mundo.hora >= 24){

        mundo.hora = 0;

        mundo.dia++;

    }

    atualizarHUD();

}
