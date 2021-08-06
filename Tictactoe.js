
function check(){

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById("1").value;
    b2 = document.getElementById("2").value;
    b3 = document.getElementById("3").value;
    b4 = document.getElementById("4").value;
    b5 = document.getElementById("5").value;
    b6 = document.getElementById("6").value;
    b7 = document.getElementById("7").value;
    b8 = document.getElementById("8").value;
    b9 = document.getElementById("9").value;

   // Checkin Player 1 is won or not

    if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }
    else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X'))
    {
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 1 win", "success");
    }

    // Checkin Player 2 is won or not

    if((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("6").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("5").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("1").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("4").disabled = true;
        document.getElementById("6").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }
    else if((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O'))
    {
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("7").disabled = true;
        document.getElementById("8").disabled = true;
        document.getElementById("9").disabled = true;
        swal("Congrats!", " Player 2 win", "success");
    }

    //Checking for Tie

    else if((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') &&
            (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') &&
            (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
            (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O')){
        document.getElementById('print').innerHTML = " It's Draw";
        swal( "Oops" ,  "DRAW!" ,  "error" );
    }
}

// Function to reset game
function func_10() {
    document.getElementById("1").disabled = false;
    document.getElementById('1').value = '';
    document.getElementById("2").disabled = false;
    document.getElementById("2").value = '';
    document.getElementById("3").disabled = false;
    document.getElementById("3").value = '';
    document.getElementById("4").disabled = false;
    document.getElementById("4").value = '';
    document.getElementById("5").disabled = false;
    document.getElementById("5").value = '';
    document.getElementById("6").disabled = false;
    document.getElementById("6").value = '';
    document.getElementById("7").disabled = false;
    document.getElementById("7").value = '';
    document.getElementById("8").disabled = false;
    document.getElementById("8").value = '';
    document.getElementById("9").disabled = false;
    document.getElementById("9").value = '';
    document.getElementById("print").innerHTML = "";

}

//functions check turn of the player and put accordingly value X or 0

flag = 1;

function func_1(){

    if(flag == 1){
        document.getElementById("1").value = "X";
        document.getElementById("1").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("1").value = "O";
        document.getElementById("1").disable = true;
        flag = 1;
    }
}

function func_2(){

    if(flag == 1){
        document.getElementById("2").value = "X";
        document.getElementById("2").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("2").value = "O";
        document.getElementById("2").disable = true;
        flag = 1;
    }
}

function func_3(){

    if(flag == 1){
        document.getElementById("3").value = "X";
        document.getElementById("3").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("3").value = "O";
        document.getElementById("3").disable = true;
        flag = 1;
    }
}

function func_4(){

    if(flag == 1){
        document.getElementById("4").value = "X";
        document.getElementById("4").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("4").value = "O";
        document.getElementById("4").disable = true;
        flag = 1;
    }
}

function func_5(){

    if(flag == 1){
        document.getElementById("5").value = "X";
        document.getElementById("5").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("5").value = "O";
        document.getElementById("5").disable = true;
        flag = 1;
    }
}

function func_6(){

    if(flag == 1){
        document.getElementById("6").value = "X";
        document.getElementById("6").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("6").value = "O";
        document.getElementById("6").disable = true;
        flag = 1;
    }
}

function func_7(){

    if(flag == 1){
        document.getElementById("7").value = "X";
        document.getElementById("7").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("7").value = "O";
        document.getElementById("7").disable = true;
        flag = 1;
    }
}

function func_8(){

    if(flag == 1){
        document.getElementById("8").value = "X";
        document.getElementById("8").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("8").value = "O";
        document.getElementById("8").disable = true;
        flag = 1;
    }
}

function func_9(){

    if(flag == 1){
        document.getElementById("9").value = "X";
        document.getElementById("9").disable = true;
        flag = 0;
    }
    else{
        document.getElementById("9").value = "O";
        document.getElementById("9").disable = true;
        flag = 1;
    }
}


