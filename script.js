let boxee = document.getElementsByClassName("box");
let turn = "X";
let turntext = document.getElementById("changeme");
let line = document.getElementById('line');
let gamelock=false;

turntext.innerHTML = turn + '\'s turn';

for (let i = 0; i < boxee.length; i++) {
  boxee[i].addEventListener('click', () => {

    if (gamelock==false && boxee[i].innerText == "") {
      boxee[i].innerText = turn;
      check();
    }
    else if(gamelock==true)  
    clearbox();
      
 }); }

function changeTurn() {
  if (turn == "X") {
    turn = "O";
  }
  else turn = "X";
}

function check() {

  for (let k = 0; k < 7; k += 3) {
    if (boxee[k].innerText == turn && boxee[k + 1].innerText == turn && boxee[k + 2].innerText == turn) {
      
      if(k==0)
      transform(15,-10,90);
      else if(k==3)
        transform(15,0,90);
      else 
        transform(15,10,90);
    }
  }

  for (let k = 0; k < 3; k++) {
    if (boxee[k].innerText == turn && boxee[k + 3].innerText == turn && boxee[k + 6].innerText == turn) {
     
      if(k==0)
        transform(5,0,0);
        else if(k==1)
          transform(15,0,0);
        else 
          transform(25,0,0);
    }
  }
  
  if (boxee[0].innerText == turn && boxee[4].innerText == turn && boxee[8].innerText == turn) {

   transform(14.6,0,135);

  }

  if (boxee[2].innerText == turn && boxee[4].innerText == turn && boxee[6].innerText == turn) {

    transform(15,0,45);

  }

  if(gamelock==false){
  changeTurn();
  changetext();
  }
}

function clearbox(){
for(let i=0;i<boxee.length;i++){
  boxee[i].innerText="";
}
gamelock=false;
line.style.height='0';
  turn="X";
  turntext.innerHTML="X's turn";

}

function changetext() {
  turntext.innerHTML = turn + '\'s turn';
}

function transform(x,y,z){
 line.style.height='30vw';
   line.style.transform = `translate(${x}vw, ${y}vw) rotate(${z}deg)`;

  turntext.innerHTML=turn +" Wins"
  gamelock=true;
}
