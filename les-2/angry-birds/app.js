//Oefening angry-birds

const bird = document.querySelector(".bird");
let offsetLeft = 0;


bird.addEventListener('click', function(e) {
    offsetLeft += 20;
 
    bird.style.left =  offsetLeft+"px";
   //zet 20 erbij in de css en plakt px erachter
})

