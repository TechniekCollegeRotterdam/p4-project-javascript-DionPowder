let span = document.getElementsByTagName("span");
let levelup = new Audio('levelup.mp3');
let score0 = new Audio('score0-10.mp3');
let score10 = new Audio('score10-20.mp3');
let score20 = new Audio('score20-30.WAV');
let score30 = new Audio('score30+.mp3');
let gameover = new Audio('gameover3.mp3');
let score = 1;

//tot dat je de pagina gebruikt is de death effect muted

gameover.muted = true;

//audio loop
score0.loop=true;
score10.loop=true;
score20.loop=true;
score30.loop=true;

//alle musics muted tot dat je de drempel gehaald hebt
score0.muted = true;
score10.muted = true;
score20.muted = true;
score30.muted = true;

//Functie om de score te resetten naar 0 als je dood gaat
const decrement = function(){
    document.getElementById("span").innerHTML = span.textContent = '0';
	//death audio
	gameover.play();
	score0.muted = false;
	score10.muted = true;
	score20.muted = true;
	score30.muted = true;
	score = 1;
};
//Functie om de score 1 omhoog te laten gaan als je een rood blokje pakt
const increment = function(){
	//Level up audio
	levelup.play();
    if (score>=10 && score<20) {
			score0.muted = true;
	    	score10.muted = false;
		  } else if (score>=20 && score<30) {
			score0.muted = true;
			score10.muted = true;
	  		score20.muted = false;
		  } else if (score>=30){
			score0.muted = true;
			score10.muted = true;
			score20.muted = true;
			score30.muted = false;
		  };	
	    	
	   document.getElementById("span").innerHTML = parseInt(document.getElementById("span").innerHTML)+1;
	   score = ++score;
	   //death effect word unmuted als je eerste blokje gehaald hebt
	gameover.muted = false 
};

//Alles wat verstopt en gezien moet laten worden bij game start
document.getElementById("startscreen").style.display = "block";
document.getElementById("instructions").style.display = "block";
document.getElementById("reload").style.display = "none";





//als de website ingeladen is zorgt het ervoor dat hij gaat luisteren naar je key inputs
window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	document.addEventListener("keydown",keyPush);
	//Snelheid van de snake
    setInterval(game,1000/15);
	 
}

    

    
  //Dit zorgt ervoor dat wanneer een toets is ingedrukt de titel en instructies weggaan  
   window.onkeydown = function(){
    document.getElementById("startscreen").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("reload").style.display = "block"; 
	score0.play();
	score10.play();
	score20.play();
	score30.play();
	if(score<5) {
		score0.muted = false;}
	}; 

//zorgt ervoor dat als je op R drukt dat je opnieuw begint
window.addEventListener('keydown', function(e) {
    if(e.key == "r") {
        window. location. reload();}
   })
        
    
 

//alle startingswaarden
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
//hoe groot je tail is als je de game start
tail = 5;
//dit volgt waar de snake heengaat
function game() {
	
	px+=xv;
	py+=yv;
	if(px<0) {
		px= tc-1;
	}
	if(px>tc-1) {
		px= 0;
	}
	if(py<0) {
		py= tc-1;
	}
	if(py>tc-1) {
		py= 0;
	}
	//de zwarte achtergrond
    ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width,canv.height);
//de snake zelf, hoe lang die is
	ctx.fillStyle="lime";
	for(var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
		//als de snake doorbroken word, word ie weer gereset naar de starting value
        
		if(trail[i].x==px && trail[i].y==py) {
			tail = 5;
            //als de snake doorbroken word, word de score met deze functie weer naar 0 gezet
            
			decrement();    
        }

	}
    //de trail volgt de coördinaten waar de head is geweest
	trail.push({x:px,y:py});
	while(trail.length>tail) {
	trail.shift();
	}

	//Er wordt een random locatie gepakt om het volgende punten blokje te laten verschijnen
    if(ax==px && ay==py) {
		tail++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
        //als een nieuw puntenblokje inspawned, dan doet deze functie een punt bij je score
        increment()
		
       
};



//de grote en kleur voor het puntenblokje
    ctx.fillStyle="red";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
//deze functie registreert wanneer je op een key drukt
function keyPush(evt) {
	//dit zorgt ervoor dat als je jezelf doorkruist dat het een signaal afstuurt
   
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
       
	}
}


    


