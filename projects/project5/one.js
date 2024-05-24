//generate random color
let randomColor= function() {
  let hex = '0123456789ABCDEF';
  let color="#";
  for(i=0;i<6;i++){
    color += hex[(Math.floor (Math.random() *16))]
  }
  
  return color;
}

let intervalId;

let bodycolor = function(){
    document.body.style.backgroundColor = randomColor();
}

let start = function(){
    if(!intervalId)
   intervalId= setInterval(bodycolor,500);
}

let stop = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
