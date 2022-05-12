var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1")
                    .innerHTML = player1;
                      
    document.querySelector("p.Player2")
                    .innerHTML = player2;
}
function dice(){
    setTimeout(function (){
    var random1 = Math.floor(Math.random() * 6) + 1
    var random2 = Math.floor(Math.random() * 6) + 1
    document.querySelector(".img1"). setAttribute("src", "images/dice" + random1 + ".png" )
    document.querySelector(".img2"). setAttribute("src", "images/dice" + random2 + ".png" )
    
    if(random1 === random2){
        document.querySelector("h1"). innerHTML = "Draw!";
    }
    else if(random1 < random2){
        document.querySelector("h1"). innerHTML = (player1 + "Wins!");
    }
    else{
        document.querySelector("h1"). innerHTML = (player2 + "Wins!");
    }
}  , 2500);
}
