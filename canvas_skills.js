var marker = true;

window.onscroll = function scrol() {
  if(window.pageYOffset >= 800){
    if(marker){
      for (var i = 0; i <= 5; i++) {
        canvasOne(i);
      }
      marker = false;

    }
  }
}  
  
function canvasOne(a){

var canvas = document.getElementsByClassName('skill_circle')[a].childNodes[1];
var span = document.getElementsByClassName('skill_circle')[a].childNodes[3]; 
var spanAnimation = 0;

var ctx = canvas.getContext('2d'),
requestAnimation;

  var pi = Math.PI;
  ctx.lineWidth=2;
  ctx.strokeStyle = "#ee7383";
  ctx.fillStyle = "#ee7383";
  
  var offset = pi/2;
  var length = pi * 2;

  var coords = {
    x:50,
    y:50,
    r:48,
    start:-offset,
    finish:-offset,
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.arc(coords.x,coords.y,coords.r,coords.start, coords.finish, false);
    ctx.stroke();
    ctx.fill();
    coords.finish += pi/80;
    spanAnimation = Math.floor((coords.finish + offset) / length * 100);
    span.innerHTML = spanAnimation + '%';
    requestAnimation = requestAnimationFrame(draw);
    check(parseInt(canvas.attributes.attribute.value, 10));

  }
    function check(a){
    if((coords.finish + offset) / length * 100 >= a){
      cancelAnimationFrame(requestAnimation);
    }
  }

requestAnimationFrame(draw);

}

