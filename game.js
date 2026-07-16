
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
let botaoTrabalhar;
let botaoComer;
let botaoDormir;
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
    botaoTrabalhar = criarBotao(this,30,480,"💼 Trabalhar",trabalhar);

botaoComer = criarBotao(this,30,540,"🍔 Comer",comer);

botaoDormir = criarBotao(this,30,600,"😴 Dormir",dormir);

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
function criarBotao(scene,x,y,texto,acao){

    const fundo = scene.add.rectangle(x,y,220,45,0x2d89ef)
        .setOrigin(0,0);

    const label = scene.add.text(x+15,y+10,texto,{

        fontSize:"22px",

        color:"#ffffff"

    });

    fundo.setInteractive({useHandCursor:true});

    fundo.on("pointerover",()=>{

        fundo.setFillStyle(0x1c6dd0);

    });

    fundo.on("pointerout",()=>{

        fundo.setFillStyle(0x2d89ef);

    });

    fundo.on("pointerdown",acao);

    return fundo;

}
function trabalhar(){

    jogador.dinheiro += 40;

    jogador.energia -= 15;

    jogador.fome += 12;

    jogador.felicidade += 2;

    if(jogador.energia < 0){

        jogador.energia = 0;

    }

    atualizarHUD();

}
function comer(){

    if(jogador.dinheiro >= 20){

        jogador.dinheiro -=20;

        jogador.fome -=30;

        jogador.energia +=10;

        jogador.felicidade +=5;

    }

    if(jogador.fome<0){

        jogador.fome=0;

    }

    if(jogador.energia>100){

        jogador.energia=100;

    }

    atualizarHUD();

}
function dormir(){

    jogador.energia=100;

    jogador.fome+=15;

    jogador.felicidade+=8;

    mundo.hora=7;

    mundo.minuto=0;

    mundo.dia++;

    atualizarHUD();

}
