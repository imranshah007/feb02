
var session_seconds = "00";
var session_minutes = 5;


var click_sound = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

function start_timer() {
  click_sound.play();

 
  session_minutes = 4;
  session_seconds = 59;

  
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

 
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
       
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

      
        document.getElementById("done").innerHTML =
          "Session Completed!! Take a Break";

        
        document.getElementById("done").classList.add("show_message");

       
        bell.play();
      }

      session_seconds = 60;
    }
  }
}
var progress = document.getElementById("empty1");
var z=null;
progress.style.width="0%";
function start(){
    if(z){
        clearInterval(z);
    }
    
    z= setInterval(()=>{
        var w = String(progress.style.width).slice(0,-1);
        if(w>=100){
            clearInterval(z);
            return;
        }
        progress.style.width = `${parseInt(w)+1}%`;
        
    },3000);
}

start();