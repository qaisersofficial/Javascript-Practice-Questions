function factorial(){

    const input = +document.getElementById("Input").value;
    if(isNaN(input)){
        alert("please enter a valid number!");
        return;
    }
    let result = 1;
    let showResult = `${input}! = `;

    for (let i = input; i >= 1; i--) {
        result *= i;
        showResult += `${i} * `;
      }
  showResult = showResult.slice(0, -3) + ` = ${result}`;
  document.getElementById('Factorial').innerHTML = showResult;
}


