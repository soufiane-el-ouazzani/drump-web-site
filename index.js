var numbersOfbutton = document.querySelectorAll(".button").length;




document.querySelectorAll(".button")[0].addEventListener("click", function(){
    var audio = new Audio('box.mp3');
    audio.play();
});
document.querySelectorAll(".button")[1].addEventListener("click", function(){
    var audio = new Audio('crash.mp3');
    audio.play();
});
document.querySelectorAll(".button")[2].addEventListener("click", function(){
    var audio = new Audio('snare.mp3');
    audio.play();
});
document.querySelectorAll(".button")[3].addEventListener("click", function(){
    var audio = new Audio('tom.mp3');
    audio.play();
});
document.querySelectorAll(".button")[4].addEventListener("click", function(){
    var audio = new Audio('tom-s.mp3');
    audio.play();
});


