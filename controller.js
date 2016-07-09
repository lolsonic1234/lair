var entered = 0;

var fade = "in";

var down = true;

var inter = setInterval(animateEnter, 50);
var sc = setInterval(animateEnter, 50);

clearInterval(inter);
clearInterval(sc);



$(document).ready(function(){
    console.log("Jquery Started Up!");
    
    inter = setInterval(animateEnter, 40);
    sc = setInterval(settle, 4000);
});



function settle(){
    clearInterval(inter);
    inter = setInterval(secondanim, 40);
}

function secondanim(){
    clearInterval(sc);
    if(1 == 1){
        entered += 0.02;
        $(".fader").css({
            opacity: entered
        });
        return false;
    }
}

function animateEnter(){
    
    if(fade = "in" && entered < 0.76 && down == true){
        entered += 0.02;
        if(entered > 0.74){
            down = false;
            times += 1;
        }
        $(".fader").css({
            opacity: entered
        });
        return false;
    }
    
    
    
    if(fade = "in" && entered > 0 && down == false){
        entered -= 0.02;
        if(entered < 0.01){
            down = true;
        }
        $(".fader").css({
            opacity: entered
        });
        return false;
    }
    
    
}
