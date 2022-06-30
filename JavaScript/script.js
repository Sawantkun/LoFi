const play=document.querySelector(".play");
const pause=document.querySelector(".pause");
const music=document.querySelector("#music");

play.addEventListener("click",()=>{
    play.style.display="none";
    pause.style.display="block";
    music.play();
})

pause.addEventListener("click",()=>{
    play.style.display="block";
    pause.style.display="none";
    music.pause();
})