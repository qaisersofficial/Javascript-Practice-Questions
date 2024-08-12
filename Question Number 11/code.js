let input;
do{
    input = +prompt("Please enter number greater than 100");
    if(isNaN(input)){
        alert("Please enter a valid number")
     }
}while(input <= 100 && input)