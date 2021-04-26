// function myDice(){
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
function myFunction(){
    var num1 = Math.random();
    num1 = Math.floor((num1 * 6) + 1);
    var randImgsrc1 = "images/dice"+ num1 +".png";
    document.querySelector(".img1").setAttribute("src",randImgsrc1);
    var num2 = Math.random();
    num2 = Math.floor((num2 * 6) + 1);
    var randImgsrc2 = "images/dice"+ num2 +".png";
    document.querySelector(".img2").setAttribute("src",randImgsrc2);
    
    // player1 wins:
    if(num1 > num2){
        document.querySelector(".container h1").classList.add("winner");
        document.querySelector(".winner").innerHTML = "PLAYER 1 WINS! 🎉";
    }
    //player2 wins:
    if(num2 > num1){
        document.querySelector(".container h1").classList.add("winner");
        document.querySelector(".winner").innerHTML = "PLAYER 2 WINS! 🎉";
    }
    //Draw:
    if(num1 === num2){
        document.querySelector(".container h1").classList.add("winner");
        document.querySelector(".winner").innerHTML = "IT'S A DRAW! ";
    }
}