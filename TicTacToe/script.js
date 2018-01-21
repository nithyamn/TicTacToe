//javacript for tic tac toe game
//declaration of gloabal variables

var playing=false;
var score1,score2;
var player1="",player2="";
var X=document.getElementById("score1").innerHTML;
var O=document.getElementById("score2").innerHTML;
var counter=0;
var setTimer;
var timer=0;
//selecting X or O for player1 and player2
document.getElementById("score1").onclick=function(){
    player1=X;
    document.getElementById("player1Choice").innerHTML=X;
    player2=O;
    document.getElementById("player2Choice").innerHTML=O;
}
document.getElementById("score2").onclick=function(){
    player1=O;
    document.getElementById("player1Choice").innerHTML=O;
    player2=X;
    document.getElementById("player2Choice").innerHTML=X;
}
//code for startReset
document.getElementById("startReset").onclick=function(){
    if(playing==true){
        location.reload();
    }
    else{
        if(player1=="" && player2==""){
            document.getElementById("alert-msgs").innerHTML="Players Select X or O first!";
        }else{
            document.getElementById("alert-msgs").style.display="none";
            playing=true;
            score1=0;
            score2=0;
            document.getElementById("score1Value").innerHTML+= " : 0";
            document.getElementById("score2Value").innerHTML+= " : 0";
            document.getElementById("startReset").innerHTML="Reset Game";
            
            timer=0;
            document.getElementById("timer").style.display="block";
            setTimer=setInterval(function(){
                timer+=1;
                document.getElementById("timerValue").innerHTML=timer +" sec";
            },1000);
            startGame();
            
        }
    }
}

function move(character){
    for(i=1;i<10;i++){
        document.getElementById("box"+i).onclick=function(){
            if(this.innerHTML==""){
                this.innerHTML=character;
                counter++;
            }
            else{
                document.getElementById("alert-msgs").style.display="block";
                document.getElementById("alert-msgs").innerHTML="This box is already Occupied!";
                setTimeout(function(){
                    document.getElementById("alert-msgs").style.display="none";
                },2000);
                
            }
            startGame();
        }
    }
    if(counter==9){
        finalScore();
        clearInterval(setTimer);
        document.getElementById("timer").style.display="none";
    }
}
function startGame(){
    if(player1 == X && player2 == O){
        if(counter%2==0){
            document.getElementById("turns").innerHTML="Player 1's Turn ";
            move("X");
        }
        else{
            document.getElementById("turns").innerHTML="Player 2's Turn ";
            move("O");
        }   
    }
    else if(player1 == O && player2 == X){
        if(counter%2==0){
            document.getElementById("turns").innerHTML="Player 1's Turn ";
            move("O");
        }
        else{
            document.getElementById("turns").innerHTML="Player 2's Turn ";
            move("X");
        }
    } 
}//end of method

function finalScore(){
    var box1=document.getElementById("box1").innerHTML;
    var box2=document.getElementById("box2").innerHTML;
    var box3=document.getElementById("box3").innerHTML;
    var box4=document.getElementById("box4").innerHTML;
    var box5=document.getElementById("box5").innerHTML;
    var box6=document.getElementById("box6").innerHTML;
    var box7=document.getElementById("box7").innerHTML;
    var box8=document.getElementById("box8").innerHTML;
    var box9=document.getElementById("box9").innerHTML;
    
    var time=document.getElementById("timerValue").innerHTML;
    if(player1 == X && player2 == O){
        if(box1=="X" && box2=="X" && box3=="X" || box4=="X" && box5=="X" && box6=="X"
          || box7=="X" && box8=="X" && box9=="X" || box1=="X" && box5=="X" && box9=="X" 
          || box3=="X" && box5=="X" && box7=="X" || box1=="X" && box4=="X" && box7=="X"
          || box2=="X" && box5=="X" && box8=="X" || box3=="X" && box6=="X" && box9=="X"){
               //alert("Player1 wins");
               document.getElementById("mainBox").innerHTML="<p>Player1 Wins!In time:"+time+"</p>";
               score1++;
               document.getElementById("score1Value").innerHTML=" : "+score1;
        }
        else if(box1=="O" && box2=="O" && box3=="X" || box4=="O" && box5=="O" && box6=="O"
          || box7=="O" && box8=="O" && box9=="O" || box1=="O" && box5=="O" && box9=="O" 
          || box3=="O" && box5=="O" && box7=="O" || box1=="O" && box4=="O" && box7=="O"
          || box2=="O" && box5=="O" && box8=="O" || box3=="O" && box6=="O" && box9=="O"){
               //alert("Player2 wins");
               document.getElementById("mainBox").innerHTML="<p>Player2 Wins!In time:"+time+"</p>"
               score2++;
               document.getElementById("score2Value").innerHTML=" : "+score2;
        }
        else{
            document.getElementById("mainBox").innerHTML="DRAW!In time:"+time;
        }  
    }
    else if(player1 == O && player2 == X){
        if(box1=="X" && box2=="X" && box3=="X" || box4=="X" && box5=="X" && box6=="X"
          || box7=="X" && box8=="X" && box9=="X" || box1=="X" && box5=="X" && box9=="X" 
          || box3=="X" && box5=="X" && box7=="X" || box1=="X" && box4=="X" && box7=="X"
          || box2=="X" && box5=="X" && box8=="X" || box3=="X" && box6=="X" && box9=="X"){
               document.getElementById("mainBox").innerHTML="<p>Player2 Wins!In time:"+time+"</p>"
               score2++;
               document.getElementById("score2Value").innerHTML=" : "+score2;
        }
        else if(box1=="O" && box2=="O" && box3=="X" || box4=="O" && box5=="O" && box6=="O"
          || box7=="O" && box8=="O" && box9=="O" || box1=="O" && box5=="O" && box9=="O" 
          || box3=="O" && box5=="O" && box7=="O" || box1=="O" && box4=="O" && box7=="O"
          || box2=="O" && box5=="O" && box8=="O" || box3=="O" && box6=="O" && box9=="O"){
               document.getElementById("mainBox").innerHTML="<p>Player1 Wins!In time:"+time+"</p>"
               document.getElementById("score1Value").innerHTML=" : "+score1;
        }
        else{
            document.getElementById("mainBox").innerHTML="DRAW!In time:"+time;
        }
    }
}

