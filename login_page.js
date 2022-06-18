function  adduser(){
p1 = document.getElementById("Player1").value;
p2 = document.getElementById("Player2").value;

localStorage.setItem("player1",p1);
localStorage.setItem("player2",p2);

window.location = "gamepage.html";
}