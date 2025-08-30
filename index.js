// here i am accessing drum numbers
var drumNumbers=document.querySelectorAll(".drum").length;

// adding loop for add event listener on each drum 
for(var i=0; i<drumNumbers; i++){
    // adding event listener on drum class 
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var drumEl=this.innerHTML;
        switch(drumEl){
            case 'w':
                var tom1= new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'a':
                var tom2= new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 'r':
                var tom3= new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 't':
                var tom4= new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 's':
                var snare= new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'n':
                var crash= new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'd':
                var kick= new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case 'b':
                var kick= new Audio('sounds/big-drum.mp3');
                kick.play();
                break;
        }
    })
}