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
    sc = setInterval(settle, 6000);
});



function settle(){
    clearInterval(inter);
    entered = 0;
    down = true;
    inter = setInterval(secondanim, 40);
}

function secondanim(){
    clearInterval(sc);
    if(fade = "in" && entered < 1 && down == true){
        entered += 0.02;
        if(entered > 1){
            down = false;
        }
        $(".fader").css({
            opacity: entered
        });
        return false;
    }
    
    if(entered > 0){
        $(".fader").css({
            opacity: entered
        });
        $(".afterfade").css({
            left: 0
        });
        entered -= 0.02;
    }
    
    if(entered < 0.01 && down == false){
        $(".fader").css({
            zIndex: -9
        });
        $(".button1").css({
            left: "2vw"
        });
        $(".button2").css({
            left: "2vw"
        });
        $(".button3").css({
            left: "2vw"
        });
        $(".button4").css({
            left: "2vw"
        });
        down = "none";
    }
}

function animateEnter(){
    
    if(fade = "in" && entered < 0.76 && down == true){
        entered += 0.02;
        if(entered > 0.74){
            down = false;
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
