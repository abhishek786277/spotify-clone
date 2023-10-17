console.log("hello");
var playbutton = document.getElementById("playbutton");
var range = document.getElementById("mplayer");
let initialstate = 0;
var audio = new Audio("./2.mp3");
playbutton.addEventListener("click", () => {
  if (initialstate == 0) {
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
    audio.play();
    initialstate += 1;
  } else {
    audio.pause();
    initialstate = 0;
    playbutton.classList.remove("fa-pause");
    playbutton.classList.add("fa-play");
  }
});

audio.addEventListener("timeupdate",()=>{
  let currentTime = audio.currentTime/audio.duration * 100;
  console.log(currentTime)
  range.value = currentTime;

})