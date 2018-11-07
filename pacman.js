


var mapa = [
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	0,	0,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	0],
[0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	1,	0,	1,	0,	1,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	1,	0,	0],
[0,	1,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	0,	1,	0,	0,	1,	1,	1,	1,	0,	0,	0,	0,	1,	0,	0],
[0,	1,	0,	0,	0,	1,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	1,	1,	1,	1,	0,	0,	1,	1,	1,	1,	1,	1,	0,	0],
[0,	1,	1,	1,	1,	1,	0,	1,	0,	0,	1,	0,	1,	1,	1,	0,	1,	0,	0,	1,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0],
[0,	0,	1,	0,	1,	1,	1,	1,	0,	0,	1,	1,	1,	0,	0,	0,	1,	0,	0,	1,	1,	1,	0,	0,	1,	1,	1,	1,	1,	0],
[0,	1,	1,	0,	1,	0,	0,	1,	1,	1,	1,	1,	0,	0,	1,	1,	1,	0,	0,	1,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0],
[0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	1,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0],
[0,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0],
[0,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	1,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0],
[0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	0,	1,	1,	1,	1,	1,	1,	0,	1,	1,	1,	0],
[0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0],
[0,	0,	1,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	0],
[0,	0,	1,	1,	1,	1,	1,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	0,	0,	1,	0],
[0,	0,	1,	0,	1,	0,	0,	0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	1,	0],
[0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	0],
[0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0,	1,	0,	0,	0,	1,	0,	0,	0,	1,	0],
[0,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	0,	1,	0,	0,	0,	1,	0,	0,	0,	1,	0],
[0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0],
[0,	1,	0,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,	0],
[0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	1,	0,	0,	1,	0,	1,	0,	1,	0,	0,	0,	1,	1,	1,	1,	0,	0,	1,	0],
[0,	1,	0,	0,	0,	0,	0,	0,	1,	1,	1,	1,	0,	0,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0],
[0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	1,	1,	1,	1,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0],
[0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	1,	1,	1,	1,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0],
[0,	1,	0,	0,	1,	0,	1,	0,	1,	1,	1,	1,	0,	0,	1,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	0],
[0,	1,	0,	1,	1,	0,	1,	0,	1,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	1,	0,	0,	1,	1,	1,	1,	1,	1,	1,	0],
[0,	1,	1,	1,	0,	0,	1,	1,	1,	1,	1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	0,	1,	0],
[0,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	0,	0,	1,	1,	1,  1,	1,	1,	1,	0],
[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0]
]


//layout();
ghost1();
ghost2();
ghost3();
jugador();





function layout(){
    var rows = "";
    for (var x=0;x<mapa.length;x++){
        for (var y=0;y<mapa[x].length;y++){
            /*if (mapa[x][y]==1){
                mapa[x][y] = "";
                rows+=mapa[x][y] + " ";
            }
            
            else{
            mapa[x][y] = "";
            rows +=mapa[x][y] + "X";
            }*/

            if (y==(mapa[x].length)-1){
                rows+=mapa[x][y]+"\n";
            }
            else{
                rows+=mapa[x][y]+" ";
            }
        }
        
    }
    console.log(rows);
}


function ghost1(){
    var avanza = false;
        
        do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            direccioFant1 = Math.floor(Math.random() * (5-1)+1);
                if (mapa[x][y]==1){
                    fantasma1 = mapa[x][y];
                    mapa[x][y]="F1";
                    avanza = true;
                }
        }while(avanza==false);
    
}

function ghost2(){
    var avanza = false;

    do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            direccioFant2 = Math.floor(Math.random() * (5-1)+1);
                if (mapa[x][y]==1){
                    fantasma2 = mapa[x][y];
                    mapa[x][y]="F2";
                    avanza = true;
                }
        }while(avanza==false);
    
}
 
function ghost3(){
    var avanza = false;
    do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            direccioFant3 = Math.floor(Math.random() * (5-1)+1);
                if (mapa[x][y]==1){
                    fantasma3 = mapa[x][y];
                    mapa[x][y]="F3";
                    avanza = true;
                }
        }while(avanza==false);
        
}


function jugador(){
    var posicio = null;
    var direccio = null;
    
    var avanza = false; 
    
    do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            direccioJugador = Math.floor(Math.random() * (5-1)+1);

                if (mapa[x][y]==1){
                    fantasma3 = mapa[x][y];
                    mapa[x][y]="X";
                    avanza = true;
                }
        }while(avanza==false);
    layout();
}



var Up=1, right=2, down=3, left=4;
/*
function direccioFantasma(){
    if (mapa[x][y]==1){
        
        do{
            var x = Math.floor(Math.random() * mapa.length);
            var y = Math.floor(Math.random() * mapa[0].length);
            direccioFant = Math.floor(Math.random() * (5-1)+1);
        }
        
}*/
