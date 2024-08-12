let input;
do{
    input = +prompt("Please enter number greater than 100");
    if(isNaN(input)){
        alert("Please enter a valid number")
     }
     if(input >= 100 || input == ""){
        break;
     }
     else{
        alert("Please enter a number greater than 100! please try again ");
     }
}while(input <= 100 && input)