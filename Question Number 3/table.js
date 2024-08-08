//  5*1=5
//  5*2=10
//  5*3=15
function table(){
    const input= +document.getElementById('userInput').value;
    if(isNaN(input)){
        alert("plz enter a valid number");
        return;
    }
    let result= '';
    for(let i= 1 ; i<=10; i++){
        result += `${input} * ${i} = ${input * i}<br>`; //line by line output   
    }
    document.getElementById('tbl').innerHTML= result;
}
